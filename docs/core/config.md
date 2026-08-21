# Configuration

Dokumen ini berisi konfigurasi umum aplikasi.

## Project

* Mobile: React Native + Expo
* Backend: Express.js + TypeScript
* ORM: Prisma v7
* Database: PostgreSQL (Supabase)
* API: REST
* Authentication: Tidak digunakan (single-user)
* Currency: IDR saja (tanpa kurs atau konversi)

## API

Base URL:

```text
/api/v1
```

Frontend berkomunikasi dengan backend melalui REST API.

## Prisma

* Schema: `backend/prisma/schema.prisma`
* Config: `backend/prisma.config.ts`
* Output: `backend/generated/prisma`

## Configuration Rules

* Jangan hardcode configuration yang berbeda antar environment.
* Gunakan environment variables untuk URL API dan database.
* Jangan menyimpan secret atau credential di source code.
* Perubahan configuration harus mempertahankan kompatibilitas dengan `api-contract.md`.
* Prisma migration memerlukan `DIRECT_URL` (bukan melalui PgBouncer).
* Jangan menambahkan configuration untuk exchange rate atau currency provider selama produk masih IDR-only.
