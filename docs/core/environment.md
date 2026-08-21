# Environment

Dokumen ini mendefinisikan environment variables yang digunakan aplikasi.

## Backend

File:

```text
backend/.env
```

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?pgbouncer=true"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=3000
```

### Variable

| Variable       | Required | Description                                              |
| -------------- | :------: | -------------------------------------------------------- |
| `DATABASE_URL` |    ✅    | Connection string PostgreSQL (melalui PgBouncer)         |
| `DIRECT_URL`   |    ✅    | Connection string langsung ke PostgreSQL (tanpa pooler)  |
| `PORT`         |    ❌    | Port backend server (default: `3000`)                    |

> **Catatan:** Pada Prisma v7, connection URL dikonfigurasi di `prisma.config.ts` (bukan di `schema.prisma`). `DIRECT_URL` diperlukan oleh Prisma untuk menjalankan migration. `DATABASE_URL` yang melalui PgBouncer tidak mendukung migration karena memerlukan koneksi langsung ke database.

## Frontend

File:

```text
frontend/.env
```

```env
EXPO_PUBLIC_API_URL="http://localhost:3000/api/v1"
```

Untuk physical device:

```env
EXPO_PUBLIC_API_URL="http://192.168.x.x:3000/api/v1"
```

### Variable

| Variable              | Required | Description                   |
| --------------------- | :------: | ----------------------------- |
| `EXPO_PUBLIC_API_URL`  |    ✅    | Base URL REST API backend     |

## Rules

* `.env` tidak boleh di-commit.
* Sediakan `.env.example` saat configuration runtime siap. Template belum tersedia saat ini, jadi agent tidak boleh mengasumsikan file tersebut sudah ada.
* Jangan menyimpan credential langsung di source code.
* `EXPO_PUBLIC_*` hanya untuk value yang aman diekspos ke aplikasi mobile.
* Production menggunakan environment variables production.
