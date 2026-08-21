# Database

Aplikasi menggunakan **PostgreSQL** sebagai database dan **Prisma** sebagai ORM.

Aplikasi bersifat **single-user** dan tidak menggunakan model `User` atau authentication.

## Database Stack

```text
Express
   ↓
Prisma
   ↓
PostgreSQL (Supabase)
```

## Core Models

### Account

Dompet atau rekening yang dimiliki user.

| Column      | Type          | Description                         |
| ----------- | ------------- | ----------------------------------- |
| `id`        | `String`      | Primary key (cuid)                  |
| `name`      | `String`      | Nama account (e.g. "BCA", "Cash")   |
| `type`      | `AccountType` | `cash`, `bank`, `ewallet`, `other`  |
| `balance`   | `Decimal`     | Saldo saat ini                      |
| `currency`  | `String`      | Selalu `"IDR"`; bukan input user/API |
| `createdAt` | `DateTime`    | Timestamp dibuat                    |
| `updatedAt` | `DateTime`    | Timestamp diubah                    |

**Relasi:** Account → banyak Transaction (`onDelete: Restrict`)

---

### Transaction

Pemasukan atau pengeluaran.

| Column       | Type              | Description                        |
| ------------ | ----------------- | ---------------------------------- |
| `id`         | `String`          | Primary key (cuid)                 |
| `type`       | `TransactionType` | `income` atau `expense`            |
| `amount`     | `Decimal`         | Nominal transaksi                  |
| `note`       | `String?`         | Catatan opsional                   |
| `date`       | `DateTime`        | Tanggal transaksi                  |
| `accountId`  | `String`          | Foreign key ke Account             |
| `categoryId` | `String`          | Foreign key ke Category            |
| `createdAt`  | `DateTime`        | Timestamp dibuat                   |
| `updatedAt`  | `DateTime`        | Timestamp diubah                   |

**Relasi:**
* Transaction → Account (`onDelete: Restrict`)
* Transaction → Category (`onDelete: Restrict`)

**Indexes:** `accountId`, `categoryId`, `date`, `type`

---

### Category

Kategori transaksi (default dan custom).

| Column      | Type              | Description                               |
| ----------- | ----------------- | ----------------------------------------- |
| `id`        | `String`          | Primary key (cuid)                        |
| `name`      | `String`          | Nama kategori (e.g. "Makanan")            |
| `type`      | `TransactionType` | `income` atau `expense`                   |
| `isDefault` | `Boolean`         | `true` untuk kategori bawaan              |
| `createdAt` | `DateTime`        | Timestamp dibuat                          |
| `updatedAt` | `DateTime`        | Timestamp diubah                          |

**Relasi:** Category → banyak Transaction, Category → banyak Budget

---

### Budget

Budget bulanan per kategori.

| Column       | Type       | Description                    |
| ------------ | ---------- | ------------------------------ |
| `id`         | `String`   | Primary key (cuid)             |
| `amount`     | `Decimal`  | Batas budget                   |
| `month`      | `Int`      | Bulan (1-12)                   |
| `year`       | `Int`      | Tahun (e.g. 2026)              |
| `categoryId` | `String`   | Foreign key ke Category        |
| `createdAt`  | `DateTime` | Timestamp dibuat               |
| `updatedAt`  | `DateTime` | Timestamp diubah               |

**Relasi:** Budget → Category (`onDelete: Cascade`)

**Constraint:** Unique `[categoryId, month, year]` — satu budget per kategori per bulan.

**Index:** `[month, year]`

---

### FinancialGoal

Target keuangan (menabung, beli barang, dana darurat, dll.)

| Column         | Type         | Description                           |
| -------------- | ------------ | ------------------------------------- |
| `id`           | `String`     | Primary key (cuid)                    |
| `name`         | `String`     | Nama target (e.g. "Laptop")          |
| `targetAmount` | `Decimal`    | Target nominal                        |
| `savedAmount`  | `Decimal`    | Nominal terkumpul                     |
| `targetDate`   | `DateTime?`  | Tanggal target (opsional)             |
| `status`       | `GoalStatus` | `active` atau `completed`             |
| `createdAt`    | `DateTime`   | Timestamp dibuat                      |
| `updatedAt`    | `DateTime`   | Timestamp diubah                      |

---

## Enums

| Enum              | Values                           |
| ----------------- | -------------------------------- |
| `AccountType`     | `cash`, `bank`, `ewallet`, `other` |
| `TransactionType` | `income`, `expense`              |
| `GoalStatus`      | `active`, `completed`            |

---

## Entity Relationship

```text
Account ────< Transaction >──── Category >──── Budget

FinancialGoal (standalone)
```

---

## Tipe Data Keuangan

Seluruh nominal keuangan menggunakan `Decimal(19, 4)` untuk keamanan perhitungan uang.

* **Tidak boleh** menggunakan `Float` atau `Double`.
* Prisma `Decimal` di-mapping ke PostgreSQL `NUMERIC(19,4)`.
* Format: 19 digit total, 4 digit desimal → mendukung nilai hingga ~999 triliun.
* Domain produk saat ini hanya menerima Rupiah utuh. Skala desimal pada database disimpan untuk konsistensi tipe, bukan untuk mendukung mata uang atau pecahan lain.

---

## Default Categories (Seed Data)

Saat migration pertama, sistem harus mengisi kategori default:

### Expense Categories

| Name         | Type      |
| ------------ | --------- |
| Makanan      | `expense` |
| Transportasi | `expense` |
| Belanja      | `expense` |
| Hiburan      | `expense` |
| Tagihan      | `expense` |

### Income Categories

| Name  | Type     |
| ----- | -------- |
| Gaji  | `income` |
| Bonus | `income` |

Semua default categories memiliki `isDefault: true`.

---

## Deletion Rules

| Model       | Rule                                                              |
| ----------- | ----------------------------------------------------------------- |
| Account     | **Restrict** — Tidak boleh dihapus jika masih memiliki transaksi  |
| Transaction | Dapat dihapus langsung. Saldo account harus diperbarui.           |
| Category    | **Restrict** — Default category tidak boleh dihapus. Custom category tidak boleh dihapus jika digunakan transaksi. |
| Budget      | Dapat dihapus langsung.                                           |
| FinancialGoal | Dapat dihapus langsung.                                        |

---

## Prisma

Schema:

```text
backend/prisma/schema.prisma
```

Config (connection URLs):

```text
backend/prisma.config.ts
```

> **Catatan:** Pada Prisma v7, `url` dan `directUrl` dikonfigurasi di `prisma.config.ts`, bukan di `schema.prisma`.

Migration:

```bash
npx prisma migrate dev --name <migration_name>
```

Generate Prisma Client:

```bash
npx prisma generate
```

Validate schema:

```bash
npx prisma validate
```

Prisma Studio:

```bash
npx prisma studio
```

---

## Database Rules

* Semua akses database melalui Prisma.
* React Native tidak boleh mengakses PostgreSQL secara langsung.
* Business logic database berada di backend.
* Perubahan schema harus menggunakan Prisma migration.
* Data keuangan harus menggunakan `Decimal(19, 4)`.
* Aplikasi single-user, tidak ada model `User`.
* `Account.currency` harus selalu bernilai `IDR`. Jangan tambahkan selector mata uang, kurs, atau conversion rate tanpa perubahan spesifikasi.
