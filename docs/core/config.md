# Configuration

Dokumen ini berisi konfigurasi umum aplikasi.

## Project

* Mobile: React Native + Expo
* Backend: Express.js
* ORM: Prisma
* Database: PostgreSQL
* API: REST
* Authentication: Tidak digunakan

## API

Base URL:

```text
/api/v1
```

Frontend berkomunikasi dengan backend melalui REST API.

## Configuration Rules

* Jangan hardcode configuration yang berbeda antar environment.
* Gunakan environment variables untuk URL API dan database.
* Jangan menyimpan secret atau credential di source code.
* Perubahan configuration harus mempertahankan kompatibilitas dengan `api-contract.md`.
