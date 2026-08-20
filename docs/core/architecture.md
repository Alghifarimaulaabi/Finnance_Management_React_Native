# Architecture

Arsitektur aplikasi **Personal Finance Management** menggunakan client-server architecture.

## 1. Stack

```text
React Native + Expo
        ↓
     REST API
        ↓
      Express
        ↓
      Prisma
        ↓
   PostgreSQL
```

### Frontend

* React Native
* Expo
* Expo Router
* NativeWind
* TanStack Query untuk server state jika diperlukan

### Backend

* Node.js
* Express
* Prisma
* PostgreSQL

---

## 2. Project Structure

```text
project/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── components/
│   │   ├── features/
│   │   ├── services/
│   │   ├── hooks/
│   │   └── types/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── validators/
│   │   └── middlewares/
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
│
└── docs/
    ├── README.md
    ├── features.md
    ├── requirements.md
    ├── api-contract.md
    └── architecture.md
```

---

## 3. Data Flow

```text
Mobile Screen
     ↓
API Service
     ↓
Express Route
     ↓
Controller
     ↓
Service
     ↓
Prisma
     ↓
PostgreSQL
```

React Native **tidak boleh mengakses database secara langsung**.

---

## 4. Backend Responsibility

* **Routes** → mendefinisikan endpoint API.
* **Controllers** → menangani HTTP request/response.
* **Services** → menjalankan business logic.
* **Validators** → memvalidasi input.
* **Prisma** → mengakses database.

---

## 5. Core Data

Data utama aplikasi:

```text
Account
Transaction
Category
Budget
FinancialGoal
```

Relasi utama:

```text
Account ────< Transaction >──── Category
                                  │
                                  └──── Budget
                                  
FinancialGoal
```

---

## 6. Important Rules

* Backend menjadi source of truth untuk data keuangan.
* Perhitungan saldo dilakukan di backend.
* Semua database operation melalui Prisma.
* API mengikuti kontrak pada `api-contract.md`.
* Implementasi fitur mengikuti `features.md`.
* Business rules mengikuti `requirements.md`.
* Tidak menggunakan login atau authentication.
* Jangan menambahkan abstraction/library tanpa kebutuhan yang jelas.
