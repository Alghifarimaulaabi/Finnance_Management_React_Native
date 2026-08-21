# API Contract

Dokumen ini mendefinisikan kontrak API antara **React Native mobile app** dan **Express backend**.

Aplikasi ini ditujukan untuk **satu pengguna pribadi**, tidak menggunakan sistem login atau authentication, dan hanya menggunakan **IDR**.

## Scope Mata Uang dan Nominal

* Semua field nominal (`amount`, `balance`, `targetAmount`, dan `savedAmount`) bernilai Rupiah utuh dalam format JSON `number`.
* Nilai nominal harus lebih besar atau sama dengan `0` sesuai konteks; nominal transaksi wajib lebih besar dari `0`.
* API tidak menerima field `currency`, kurs, atau nilai mata uang selain IDR.
* Tidak ada konversi mata uang atau perhitungan lintas mata uang.

## 1. Base URL

```text
/api/v1
```

Contoh:

```text
GET /api/v1/transactions
```

---

# 2. Standard Response

## Success

```json
{
  "success": true,
  "data": {}
}
```

Untuk collection:

```json
{
  "success": true,
  "data": [],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

## Error

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

---

# 3. Error Codes

| Code               | HTTP Status | Description              |
| ------------------ | ----------: | ------------------------ |
| `VALIDATION_ERROR` |         400 | Data request tidak valid |
| `NOT_FOUND`        |         404 | Resource tidak ditemukan |
| `CONFLICT`         |         409 | Terjadi konflik data     |
| `INTERNAL_ERROR`   |         500 | Internal server error    |

---

# 4. Dashboard

## GET `/dashboard`

Mengambil ringkasan keuangan.

### Response

```json
{
  "success": true,
  "data": {
    "totalBalance": 6500000,
    "totalIncome": 8000000,
    "totalExpense": 1500000,
    "remainingMoney": 6500000,
    "recentTransactions": []
  }
}
```

---

# 5. Transactions

## GET `/transactions`

Mengambil daftar transaksi.

### Query Parameters

```text
page
limit
type
categoryId
accountId
startDate
endDate
search
sortBy
sortOrder
```

Contoh:

```text
GET /api/v1/transactions?page=1&limit=20&type=expense
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "transaction-id",
      "type": "expense",
      "amount": 50000,
      "category": {
        "id": "category-id",
        "name": "Makanan"
      },
      "account": {
        "id": "account-id",
        "name": "Cash"
      },
      "note": "Makan siang",
      "date": "2026-08-20T12:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 1
  }
}
```

---

## GET `/transactions/:id`

Mengambil detail transaksi.

### Response

```json
{
  "success": true,
  "data": {
    "id": "transaction-id",
    "type": "expense",
    "amount": 50000,
    "categoryId": "category-id",
    "accountId": "account-id",
    "note": "Makan siang",
    "date": "2026-08-20T12:00:00Z"
  }
}
```

---

## POST `/transactions`

Membuat transaksi.

### Request

```json
{
  "type": "expense",
  "amount": 50000,
  "categoryId": "category-id",
  "accountId": "account-id",
  "note": "Makan siang",
  "date": "2026-08-20T12:00:00Z"
}
```

### Response

```json
{
  "success": true,
  "data": {
    "id": "transaction-id",
    "type": "expense",
    "amount": 50000,
    "categoryId": "category-id",
    "accountId": "account-id",
    "note": "Makan siang",
    "date": "2026-08-20T12:00:00Z"
  }
}
```

---

## PATCH `/transactions/:id`

Mengubah transaksi.

### Request

```json
{
  "amount": 75000,
  "note": "Makan siang + minum"
}
```

---

## DELETE `/transactions/:id`

Menghapus transaksi.

### Response

```json
{
  "success": true,
  "data": null
}
```

---

# 6. Categories

## GET `/categories`

Mengambil semua kategori.

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "category-id",
      "name": "Makanan",
      "type": "expense",
      "isDefault": true
    }
  ]
}
```

---

## POST `/categories`

Membuat custom category.

### Request

```json
{
  "name": "Gaming",
  "type": "expense"
}
```

---

## PATCH `/categories/:id`

Mengubah custom category.

### Request

```json
{
  "name": "Game"
}
```

---

## DELETE `/categories/:id`

Menghapus custom category.

Default category tidak boleh dihapus.

---

# 7. Accounts / Wallets

## GET `/accounts`

Mengambil seluruh account.

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "account-id",
      "name": "BCA",
      "type": "bank",
      "balance": 5000000
    },
    {
      "id": "account-id-2",
      "name": "Cash",
      "type": "cash",
      "balance": 1500000
    }
  ]
}
```

---

## POST `/accounts`

Membuat account.

### Request

```json
{
  "name": "BCA",
  "type": "bank",
  "initialBalance": 5000000
}
```

---

## PATCH `/accounts/:id`

Mengubah account.

### Request

```json
{
  "name": "BCA Utama"
}
```

---

## DELETE `/accounts/:id`

Menghapus account.

Account yang masih memiliki transaksi harus ditangani dengan aman dan tidak boleh menyebabkan transaksi menjadi invalid.

---

# 8. Budgets

## GET `/budgets`

Mengambil budget berdasarkan periode.

### Query Parameters

```text
month
year
```

Contoh:

```text
GET /api/v1/budgets?month=8&year=2026
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "budget-id",
      "categoryId": "category-id",
      "categoryName": "Makanan",
      "amount": 1000000,
      "spent": 650000,
      "remaining": 350000,
      "progress": 65,
      "status": "active"
    }
  ]
}
```

---

## POST `/budgets`

Membuat budget.

### Request

```json
{
  "categoryId": "category-id",
  "amount": 1000000,
  "month": 8,
  "year": 2026
}
```

---

## PATCH `/budgets/:id`

Mengubah budget.

### Request

```json
{
  "amount": 1500000
}
```

---

## DELETE `/budgets/:id`

Menghapus budget.

---

# 9. Financial Goals

## GET `/goals`

Mengambil seluruh financial goals.

### Response

```json
{
  "success": true,
  "data": [
    {
      "id": "goal-id",
      "name": "Laptop",
      "targetAmount": 10000000,
      "savedAmount": 6500000,
      "progress": 65,
      "status": "active"
    }
  ]
}
```

---

## POST `/goals`

Membuat financial goal.

### Request

```json
{
  "name": "Laptop",
  "targetAmount": 10000000,
  "targetDate": "2026-12-31"
}
```

---

## PATCH `/goals/:id`

Mengubah financial goal.

### Request

```json
{
  "name": "Laptop Gaming",
  "targetAmount": 12000000
}
```

---

## DELETE `/goals/:id`

Menghapus financial goal.

---

# 10. Analytics

## GET `/analytics/summary`

Mengambil ringkasan analytics.

### Query Parameters

```text
startDate
endDate
```

### Response

```json
{
  "success": true,
  "data": {
    "totalIncome": 8000000,
    "totalExpense": 1500000,
    "balanceChange": 6500000
  }
}
```

---

## GET `/analytics/categories`

Mengambil pengeluaran berdasarkan kategori.

### Response

```json
{
  "success": true,
  "data": [
    {
      "categoryId": "category-id",
      "categoryName": "Makanan",
      "amount": 650000,
      "percentage": 43.33
    }
  ]
}
```

---

## GET `/analytics/monthly`

Mengambil data keuangan berdasarkan bulan.

### Query Parameters

```text
year
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "month": 1,
      "income": 8000000,
      "expense": 1500000
    }
  ]
}
```

---

# 11. Financial Insights

## GET `/insights`

Mengambil financial insight.

### Query Parameters

```text
period
```

Nilai yang didukung:

```text
week
month
year
```

### Response

```json
{
  "success": true,
  "data": [
    {
      "type": "expense_increase",
      "title": "Pengeluaran meningkat",
      "message": "Pengeluaran makanan bulan ini naik 18% dibanding bulan lalu.",
      "categoryId": "category-id"
    }
  ]
}
```

Insight harus berdasarkan data keuangan yang tersedia.

---

# 12. Period Comparison

## GET `/analytics/comparison`

Membandingkan dua periode.

### Query Parameters

```text
type
```

Nilai:

```text
week
month
year
```

### Response

```json
{
  "success": true,
  "data": {
    "current": {
      "income": 8000000,
      "expense": 1500000
    },
    "previous": {
      "income": 7500000,
      "expense": 1200000
    },
    "change": {
      "income": 6.67,
      "expense": 25
    }
  }
}
```

---

# 13. Validation

Backend harus memvalidasi seluruh request.

Contoh request invalid:

```json
{
  "type": "expense",
  "amount": -50000
}
```

Response:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Amount must be greater than 0"
  }
}
```

Validasi harus dilakukan di backend, bukan hanya di React Native.

---

# 14. Data Consistency

Operasi yang memengaruhi beberapa data harus dilakukan secara atomic.

Contoh membuat transaksi:

```text
Create Transaction
       ↓
Update Account Balance
       ↓
Update related calculations
       ↓
Commit
```

Jika proses gagal, perubahan terkait harus dibatalkan.

---

# 15. API Versioning

API menggunakan versioning:

```text
/api/v1
```

Breaking changes harus menggunakan versi API baru.

Contoh:

```text
/api/v1/transactions
/api/v2/transactions
```

---

# 16. HTTP Methods

| Method   | Usage                  |
| -------- | ---------------------- |
| `GET`    | Mengambil data         |
| `POST`   | Membuat data           |
| `PATCH`  | Mengubah sebagian data |
| `DELETE` | Menghapus data         |

---

# 17. General Rules

* Aplikasi tidak menggunakan login atau authentication.
* Backend menjadi sumber kebenaran seluruh data.
* Client tidak boleh menentukan saldo akhir secara manual.
* Nominal keuangan harus menggunakan tipe data yang aman untuk perhitungan uang.
* Backend harus melakukan validation terhadap seluruh request.
* Response API harus memiliki format yang konsisten.
* API production harus menggunakan HTTPS.
* Endpoint tidak boleh menyediakan data yang tidak diperlukan oleh mobile app.
