# Project Documentation

> Folder `docs/` adalah **Source of Truth** untuk project.
> AI agent harus membaca dokumentasi yang relevan sebelum melakukan perubahan.

## Documentation

| File              | Purpose                         |
| ----------------- | ------------------------------- |
| `requirements.md` | Kebutuhan project               |
| `features.md`     | Fitur dan business rules        |
| `architecture.md` | Arsitektur aplikasi             |
| `tech-stack.md`   | Teknologi yang digunakan        |
| `api-contract.md` | Contract API frontend ↔ backend |
| `database.md`     | Database dan Prisma             |
| `design.md`       | UI/UX dan design system         |
| `environment.md`  | Environment variables           |
| `config.md`       | Konfigurasi project             |
| `phases.md`       | Tahapan development             |
| `backlog.md`      | Bug dan task                    |

## AI Agent Rules

1. Baca dokumentasi yang relevan sebelum coding.
2. Periksa existing code sebelum membuat implementation baru.
3. Gunakan technology stack yang sudah ditentukan.
4. Jangan mengubah architecture tanpa alasan yang jelas.
5. Jangan melakukan refactor besar untuk task kecil.
6. Jangan menghapus atau merusak fitur existing.
7. Jangan membuat duplicate component, API, atau utility.
8. Update dokumentasi jika architecture, API, database, atau feature berubah.
9. Jangan expose secret atau credential.
10. Setelah perubahan, lakukan typecheck, lint, dan test yang relevan.

## Architecture

```text
React Native + Expo
        ↓
    REST API
        ↓
Express + TypeScript
        ↓
      Prisma
        ↓
   PostgreSQL
```

Frontend **tidak boleh mengakses database secara langsung**.

## Workflow

```text
Read Docs
   ↓
Inspect Existing Code
   ↓
Plan Minimal Change
   ↓
Implement
   ↓
Typecheck / Lint / Test
   ↓
Update Docs if Needed
```

> **Principle:** Understand the project before changing the project.
