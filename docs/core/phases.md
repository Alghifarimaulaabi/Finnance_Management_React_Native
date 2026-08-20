# Development Phases

Dokumen ini menentukan urutan pengerjaan aplikasi **Personal Finance Management**.

AI Agent harus mengikuti phase secara berurutan dan tidak melewati phase yang belum selesai.

---

## Phase 1 — Project Foundation

**Status:** Pending

* [x] Setup React Native + Expo
* [ ] Setup Express backend
* [ ] Setup Prisma
* [ ] Setup PostgreSQL
* [ ] Setup project structure
* [ ] Setup environment variables
* [ ] Setup Git
* [ ] Setup basic UI/design system

**Output:** Project dapat dijalankan di mobile dan backend.

---

## Phase 2 — Database

**Status:** Pending

* [ ] Membuat Prisma schema
* [ ] Membuat model `Account`
* [ ] Membuat model `Transaction`
* [ ] Membuat model `Category`
* [ ] Membuat model `Budget`
* [ ] Membuat model `FinancialGoal`
* [ ] Membuat relationships
* [ ] Menjalankan migration
* [ ] Membuat seed data untuk default categories

**Output:** Database siap digunakan.

---

## Phase 3 — Backend Core API

**Status:** Pending

* [ ] Setup Express
* [ ] Setup API versioning `/api/v1`
* [ ] Setup routes
* [ ] Setup controllers
* [ ] Setup services
* [ ] Setup validators
* [ ] Setup error handling
* [ ] Implement Account API
* [ ] Implement Category API
* [ ] Implement Transaction API

**Output:** CRUD API utama berjalan.

---

## Phase 4 — Mobile Core

**Status:** Pending

* [ ] Setup Expo Router
* [ ] Setup navigation
* [ ] Setup API client
* [ ] Setup server state
* [ ] Membuat Dashboard
* [ ] Membuat Transaction screen
* [ ] Membuat Add Transaction
* [ ] Membuat Edit/Delete Transaction
* [ ] Membuat Account screen
* [ ] Membuat Category screen

**Output:** User dapat mengelola transaksi melalui mobile app.

---

## Phase 5 — Budget & Financial Goals

**Status:** Pending

* [ ] Implement Budget API
* [ ] Implement Financial Goal API
* [ ] Membuat Budget screen
* [ ] Membuat Budget progress
* [ ] Membuat Budget warning
* [ ] Membuat Financial Goal screen
* [ ] Membuat Goal progress
* [ ] Menangani goal completion

**Output:** User dapat mengatur budget dan target keuangan.

---

## Phase 6 — Analytics

**Status:** Pending

* [ ] Implement Analytics API
* [ ] Expense by category
* [ ] Income vs Expense
* [ ] Monthly analytics
* [ ] Balance history
* [ ] Period comparison
* [ ] Membuat Analytics screen
* [ ] Menambahkan charts
* [ ] Financial insights

**Output:** User dapat melihat kondisi dan perkembangan keuangannya.

---

## Phase 7 — UX & Reliability

**Status:** Pending

* [ ] Loading states
* [ ] Empty states
* [ ] Error states
* [ ] Form validation
* [ ] Confirmation dialog
* [ ] Pull to refresh
* [ ] Optimistic update jika diperlukan
* [ ] Offline/error handling dasar
* [ ] Improve mobile responsiveness

**Output:** Aplikasi nyaman dan stabil digunakan.

---

## Phase 8 — Testing

**Status:** Pending

* [ ] Test API
* [ ] Test CRUD transaction
* [ ] Test account balance
* [ ] Test budget calculation
* [ ] Test financial goal calculation
* [ ] Test analytics calculation
* [ ] Test validation
* [ ] Test error handling
* [ ] Test mobile UI
* [ ] Test pada physical Android device

**Output:** Fitur utama tervalidasi dan bebas dari bug kritis.

---

## Phase 9 — Production Preparation

**Status:** Pending

* [ ] Review environment variables
* [ ] Setup production PostgreSQL
* [ ] Deploy backend
* [ ] Configure production API URL
* [ ] Test production API
* [ ] Optimize performance
* [ ] Review security
* [ ] Review database backup
* [ ] Remove development/debug code

**Output:** Backend dan database siap production.

---

## Phase 10 — Android Release

**Status:** Pending

* [ ] Configure Expo/EAS
* [ ] Configure app name
* [ ] Configure app icon
* [ ] Configure splash screen
* [ ] Configure Android package name
* [ ] Build release APK/AAB
* [ ] Install release build
* [ ] Final testing
* [ ] Prepare Play Store release jika diperlukan

**Output:** Aplikasi siap digunakan secara production.

---

# Phase Completion Rules

Setiap phase dianggap selesai jika:

* Semua task pada phase selesai.
* Tidak ada bug kritis yang belum diselesaikan.
* Implementasi sesuai `features.md`.
* Implementasi sesuai `requirements.md`.
* API mengikuti `api-contract.md`.
* Architecture mengikuti `architecture.md`.

AI Agent tidak boleh mengerjakan phase berikutnya jika phase saat ini belum selesai, kecuali user secara eksplisit meminta sebaliknya.
