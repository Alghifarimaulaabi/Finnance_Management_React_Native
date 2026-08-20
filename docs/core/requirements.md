# Requirements

Dokumen ini mendefinisikan kebutuhan fungsional dan aturan utama aplikasi **Personal Finance Management**.

## 1. Dashboard

### REQ-DASH-001 — Total Saldo

* Sistem harus menampilkan total saldo seluruh account milik user.
* Total saldo dihitung berdasarkan saldo setiap account.
* Saldo harus diperbarui setelah transaksi berhasil dibuat, diubah, atau dihapus.

### REQ-DASH-002 — Pemasukan

* Sistem harus menghitung total pemasukan berdasarkan transaksi bertipe `income`.
* Perhitungan dapat dilakukan berdasarkan periode yang dipilih.

### REQ-DASH-003 — Pengeluaran

* Sistem harus menghitung total pengeluaran berdasarkan transaksi bertipe `expense`.
* Perhitungan dapat dilakukan berdasarkan periode yang dipilih.

### REQ-DASH-004 — Sisa Uang

* Sistem harus menampilkan sisa uang berdasarkan pemasukan dan pengeluaran pada periode aktif.

### REQ-DASH-005 — Transaksi Terbaru

* Dashboard harus menampilkan transaksi terbaru.
* Transaksi harus diurutkan berdasarkan tanggal terbaru.

---

## 2. Transaction

### REQ-TRANS-001 — Membuat Transaksi

User harus dapat membuat transaksi dengan informasi:

* Tipe transaksi
* Nominal
* Kategori
* Account
* Tanggal
* Catatan opsional

### REQ-TRANS-002 — Tipe Transaksi

Sistem harus mendukung minimal:

* `income`
* `expense`

### REQ-TRANS-003 — Validasi Nominal

* Nominal harus berupa angka.
* Nominal harus lebih besar dari `0`.
* Sistem tidak boleh menyimpan transaksi dengan nominal tidak valid.

### REQ-TRANS-004 — Edit Transaksi

* User dapat mengubah transaksi miliknya.
* Perubahan transaksi harus memperbarui saldo dan perhitungan terkait.

### REQ-TRANS-005 — Hapus Transaksi

* User dapat menghapus transaksi miliknya.
* Penghapusan transaksi harus memperbarui saldo dan analytics.

### REQ-TRANS-006 — Ownership

* User hanya dapat melihat dan memodifikasi transaksi miliknya sendiri.
* User tidak boleh mengakses transaksi milik user lain.

---

## 3. Category

### REQ-CAT-001 — Default Category

Sistem harus menyediakan kategori default:

* Makanan
* Transportasi
* Belanja
* Hiburan
* Tagihan
* Gaji
* Bonus

### REQ-CAT-002 — Custom Category

* User dapat membuat kategori custom.
* Nama kategori harus memiliki nilai.
* Kategori harus terhubung dengan user yang membuatnya.

### REQ-CAT-003 — Category Ownership

User hanya dapat mengubah atau menghapus custom category miliknya.

---

## 4. Account / Wallet

### REQ-ACC-001 — Account

User dapat memiliki lebih dari satu account.

Contoh:

* Cash
* Bank
* E-wallet
* Rekening lainnya

### REQ-ACC-002 — Saldo Account

Setiap account harus memiliki saldo.

Saldo harus diperbarui berdasarkan transaksi yang terkait dengan account tersebut.

### REQ-ACC-003 — Account Ownership

User hanya dapat melihat dan mengubah account miliknya sendiri.

### REQ-ACC-004 — Account Deletion

Account yang masih memiliki transaksi harus ditangani dengan aman sebelum dihapus.

Sistem tidak boleh menyebabkan transaksi menjadi tidak valid atau kehilangan referensi secara tidak terkontrol.

---

## 5. Transaction History

### REQ-HIST-001 — Filtering

User dapat memfilter transaksi berdasarkan:

* Tanggal
* Tipe transaksi
* Kategori

### REQ-HIST-002 — Search

User dapat mencari transaksi berdasarkan informasi yang relevan seperti catatan atau nama kategori.

### REQ-HIST-003 — Sorting

User dapat mengurutkan transaksi berdasarkan:

* Tanggal
* Nominal

### REQ-HIST-004 — Pagination

Jika jumlah transaksi besar, sistem harus mendukung pagination atau mekanisme loading bertahap.

---

# 6. Budget

## REQ-BUDGET-001 — Monthly Budget

User dapat menentukan budget berdasarkan kategori dan periode.

Contoh:

```text
Makanan
Budget: Rp1.000.000
Periode: Agustus 2026
```

### REQ-BUDGET-002 — Budget Usage

Sistem harus menghitung penggunaan budget berdasarkan transaksi `expense` pada kategori dan periode yang sesuai.

### REQ-BUDGET-003 — Budget Progress

Sistem harus menampilkan progress penggunaan budget.

Contoh:

```text
Budget      Rp1.000.000
Terpakai      Rp650.000
Progress           65%
```

### REQ-BUDGET-004 — Budget Warning

Sistem harus memberikan indikator ketika penggunaan budget mendekati limit.

Default threshold dapat menggunakan:

```text
80% → Warning
100% → Exceeded
```

Threshold harus dibuat configurable jika diperlukan.

---

# 7. Financial Goals

## REQ-GOAL-001 — Create Goal

User dapat membuat target keuangan dengan:

* Nama target
* Target nominal
* Nominal terkumpul
* Tanggal target opsional

### REQ-GOAL-002 — Goal Progress

Sistem harus menghitung progress target berdasarkan:

```text
progress = amountSaved / targetAmount × 100
```

### REQ-GOAL-003 — Goal Completion

Jika nominal terkumpul mencapai target, sistem harus menandai goal sebagai selesai.

---

# 8. Financial Analytics

## REQ-ANALYTICS-001 — Expense by Category

Sistem harus dapat menghitung total pengeluaran berdasarkan kategori.

### REQ-ANALYTICS-002 — Income vs Expense

Sistem harus dapat membandingkan total pemasukan dan pengeluaran berdasarkan periode.

### REQ-ANALYTICS-003 — Monthly Expense

Sistem harus dapat menampilkan perubahan pengeluaran antar periode.

### REQ-ANALYTICS-004 — Balance History

Sistem harus dapat menampilkan perkembangan saldo berdasarkan data transaksi.

---

# 9. Financial Insight

## REQ-INSIGHT-001 — Generate Insight

Sistem dapat menghasilkan insight berdasarkan data transaksi user.

Contoh:

> Pengeluaran makanan bulan ini naik 18% dibanding bulan lalu.

### REQ-INSIGHT-002 — Data Accuracy

Insight hanya boleh menggunakan data transaksi yang tersedia.

Sistem tidak boleh membuat angka atau informasi keuangan yang tidak berasal dari data user.

### REQ-INSIGHT-003 — Period Comparison

Insight dapat menggunakan perbandingan:

* Minggu ini vs minggu lalu
* Bulan ini vs bulan lalu
* Tahun ini vs tahun lalu

---

# 10. Period Comparison

## REQ-PERIOD-001 — Supported Period

Sistem harus mendukung perbandingan:

* Minggu ini vs minggu lalu
* Bulan ini vs bulan lalu
* Tahun ini vs tahun lalu

### REQ-PERIOD-002 — Consistent Calculation

Perbandingan harus menggunakan periode yang setara.

Contoh:

```text
August 2026
vs
July 2026
```

### REQ-PERIOD-003 — Percentage Change

Jika diperlukan, sistem dapat menghitung perubahan persentase:

```text
percentageChange =
((current - previous) / previous) × 100
```

Jika nilai periode sebelumnya adalah `0`, sistem tidak boleh menghasilkan pembagian dengan nol.

---

# 11. General Requirements

### REQ-GEN-001 — Authentication

User harus melakukan authentication sebelum mengakses data keuangan pribadi.

### REQ-GEN-002 — Data Isolation

Data keuangan setiap user harus terisolasi.

User tidak boleh dapat mengakses:

* Transaksi user lain
* Account user lain
* Category private user lain
* Budget user lain
* Financial goal user lain

### REQ-GEN-003 — Data Consistency

Perubahan transaksi harus konsisten terhadap:

* Account balance
* Dashboard
* Budget
* Analytics
* Financial insight

### REQ-GEN-004 — Error Handling

Sistem harus memberikan error yang jelas ketika:

* Data tidak valid
* Request gagal
* Resource tidak ditemukan
* User tidak memiliki permission

### REQ-GEN-005 — Mobile First

Aplikasi harus dioptimalkan untuk penggunaan pada perangkat mobile.

### REQ-GEN-006 — API Security

Backend harus melakukan validasi authentication dan authorization pada setiap endpoint yang membutuhkan data pribadi user.

### REQ-GEN-007 — Sensitive Data

Data keuangan user harus diperlakukan sebagai data private dan tidak boleh dikembalikan kepada user lain.
