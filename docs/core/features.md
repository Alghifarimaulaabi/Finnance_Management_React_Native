# Features

Dokumen ini berisi daftar fitur yang direncanakan untuk aplikasi **Personal Finance Management**.

## 1. Fitur Utama

### 1.1 Dashboard

* Total saldo
* Total pemasukan
* Total pengeluaran
* Sisa uang bulan ini
* Ringkasan transaksi terbaru

### 1.2 Transaksi

* Tambah pemasukan
* Tambah pengeluaran
* Edit transaksi
* Hapus transaksi
* Kategori transaksi
* Catatan transaksi
* Tanggal transaksi

### 1.3 Kategori

Kategori default:

* Makanan
* Transportasi
* Belanja
* Hiburan
* Tagihan
* Gaji
* Bonus

User juga dapat membuat **custom category**.

### 1.4 Dompet / Account

Mendukung beberapa jenis account:

* Cash
* Bank
* E-wallet
* Rekening lainnya

Setiap account memiliki saldo masing-masing.

Seluruh account menggunakan Rupiah Indonesia (IDR). Aplikasi belum mendukung konversi mata uang atau kurs.

### 1.5 Riwayat Transaksi

* Filter berdasarkan tanggal
* Filter pemasukan/pengeluaran
* Filter berdasarkan kategori
* Search transaksi
* Sorting berdasarkan tanggal
* Sorting berdasarkan nominal

---

## 2. Budgeting

### 2.1 Budget Bulanan

User dapat menentukan budget untuk setiap kategori.

Contoh:

```text
Makanan
Budget: Rp1.000.000
```

Fitur:

* Menentukan budget per kategori
* Menampilkan progress penggunaan budget
* Memberikan warning ketika mendekati limit

### 2.2 Target Keuangan

User dapat membuat target keuangan seperti:

* Target menabung
* Target membeli barang
* Target dana darurat

Setiap target memiliki progress.

Contoh:

```text
🎯 Laptop

Target      Rp10.000.000
Terkumpul   Rp6.500.000
Progress    65%
```

---

## 3. Analytics

### 3.1 Laporan Keuangan

Menampilkan:

* Pengeluaran berdasarkan kategori
* Perbandingan pemasukan dan pengeluaran
* Grafik pengeluaran bulanan
* Grafik perkembangan saldo

### 3.2 Financial Insight

Aplikasi dapat memberikan insight berdasarkan data keuangan user.

Contoh:

> Pengeluaran makanan bulan ini naik 18% dibanding bulan lalu.

Contoh lainnya:

> Kategori transportasi merupakan pengeluaran terbesar bulan ini.

### 3.3 Perbandingan Periode

User dapat membandingkan kondisi keuangan berdasarkan periode:

* Minggu ini vs minggu lalu
* Bulan ini vs bulan lalu
* Tahun ini vs tahun lalu
