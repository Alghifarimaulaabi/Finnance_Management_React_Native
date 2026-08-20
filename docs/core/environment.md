# Environment

Dokumen ini mendefinisikan environment variables yang digunakan aplikasi.

## Backend

File:

```text
backend/.env
```

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
PORT=3000
```

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

## Rules

* `.env` tidak boleh di-commit.
* Sediakan `.env.example`.
* Jangan menyimpan credential langsung di source code.
* `EXPO_PUBLIC_*` hanya untuk value yang aman diekspos ke aplikasi mobile.
* Production menggunakan environment variables production.
