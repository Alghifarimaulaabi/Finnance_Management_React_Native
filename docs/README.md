# Project Documentation

> Folder `docs/` adalah **source of truth untuk spesifikasi produk dan keputusan teknis**.
> AI agent harus membaca dokumentasi yang relevan sebelum melakukan perubahan, lalu memeriksa kode untuk mengetahui status implementasi sebenarnya.

## Documentation

| File              | Purpose                         |
| ----------------- | ------------------------------- |
| `core/requirements.md` | Kebutuhan dan acceptance criteria |
| `core/features.md` | Ruang lingkup fitur |
| `core/architecture.md` | Arsitektur dan boundary |
| `core/tech-stack.md` | Stack saat ini dan rencana |
| `core/api-contract.md` | Kontrak API frontend/backend |
| `core/database.md` | Database dan Prisma |
| `core/environment.md` | Environment variables |
| `core/config.md` | Konfigurasi project |
| `core/phases.md` | Status implementasi per fase |

Design system didefinisikan di `frontend/DESIGN.md`. Product brief didefinisikan di `frontend/PRODUCT.md`.

## Product Scope

* Aplikasi adalah personal finance tracker untuk **satu pengguna pribadi**.
* Tidak ada login, authentication, model `User`, atau isolasi data per pengguna.
* Seluruh nilai keuangan menggunakan **Rupiah Indonesia (IDR)**.
* Aplikasi tidak mendukung kurs, konversi mata uang, atau account dengan mata uang lain.

## Documentation Status Rules

* `requirements.md`, `features.md`, dan `api-contract.md` menjelaskan target/contract, bukan bukti bahwa fitur telah tersedia.
* `phases.md` adalah tracker status implementasi. Checkbox hanya boleh dicentang setelah pekerjaan ada di kode dan telah diverifikasi.
* Jika dokumentasi dan kode berbeda, jangan menebak. Laporkan perbedaannya atau perbarui keduanya dalam task yang sama bila perubahan memang diminta.

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
11. Jangan menambahkan multi-user, authentication, multi-currency, transfer, atau tagihan berulang tanpa perubahan spesifikasi yang eksplisit.

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

Aplikasi ini adalah **aplikasi pribadi single-user**, tidak menggunakan login atau authentication, dan hanya menggunakan **IDR**.

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
