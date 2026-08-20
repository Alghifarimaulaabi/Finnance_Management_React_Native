# Database

Aplikasi menggunakan **PostgreSQL** sebagai database dan **Prisma** sebagai ORM.

## Database Stack

```text
Express
   ↓
Prisma
   ↓
PostgreSQL
```

## Core Models

Database memiliki model utama:

* `Account`
* `Transaction`
* `Category`
* `Budget`
* `FinancialGoal`

Relasi utama:

```text
Account ────< Transaction >──── Category
                                  │
                                  └──── Budget

FinancialGoal
```

## Prisma

Schema:

```text
backend/prisma/schema.prisma
```

Migration:

```bash
npx prisma migrate dev
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

## Database Rules

* Semua akses database melalui Prisma.
* React Native tidak boleh mengakses PostgreSQL secara langsung.
* Business logic database berada di backend.
* Perubahan schema harus menggunakan Prisma migration.
* Data keuangan harus menggunakan tipe numeric yang aman untuk perhitungan uang.
