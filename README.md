# Qalbu - Aplikasi Al-Qur'an & Doa (Astro + Cloudflare)

Website modern untuk membaca Al-Qur'an, Doa harian, dan sekarang Jadwal Imsakiyah serta Jadwal Shalat dengan fitur audio player interaktif, tafsir, dan desain responsif. Dibangun menggunakan Astro Framework dan dideploy ke Cloudflare Pages.

## 🚀 Tech Stack

* **Framework:** [Astro](https://astro.build) (Server-Side Rendering / SSR Mode)
* **Language:** TypeScript / JavaScript
* **Styling:** Tailwind CSS
* **Platform:** Cloudflare Pages
* **Data Source:** `equran.id` API (untuk Qur'an, Doa, Imsakiyah, Shalat) dan `myquran.com` API (untuk Asmaul Husna)
* **Icon:** Lucide Icons
* **Library Tambahan:** jsPDF (via CDN untuk export PDF di client-side, mudah digunakan tanpa install)

## ✨ Fitur Utama

1.  **Al-Qur'an Digital:**
    * Daftar 114 Surat dengan pencarian real-time (Nama, Arti, Nomor).
    * **Audio Player Cerdas:**
        * Audio Full satu surat.
        * Audio per-ayat dengan fitur **Auto-play Next Ayat** (Otomatis lanjut ke ayat berikutnya).
    * **Pilihan Qori:** Dropdown untuk mengganti Qori (Misyari Rasyid, Sudais, dll) yang langsung mengubah sumber suara.
    * **Tafsir Popup:** Modal interaktif untuk melihat tafsir per ayat tanpa pindah halaman.
    * Navigasi Surat (Next/Prev) dengan logika batas (disabled di surat pertama/terakhir).
2.  **Kumpulan Doa:**
    * Pencarian Doa berdasarkan kategori dan nama.
    * Detail Doa lengkap dengan Arab, Latin, Arti, dan Riwayat.
3.  **Asmaul Husna:**
    * Daftar 99 Nama Allah yang Maha Indah.
    * Pencarian Asmaul Husna berdasarkan nama, nomor, dan arti.
4.  **Jadwal Imsakiyah:**
    * Dropdown Provinsi dan Kabupaten/Kota untuk pilih lokasi.
    * Tabel jadwal harian (Imsak, Subuh, dll.) dengan warna highlight pada Imsak/Maghrib.
    * Button Export PDF: Generate PDF 1 halaman dengan desain modern (hierarki visual, warna eye-catching, layout clean).
    * Responsif: Dropdown stack di mobile, side-by-side di desktop.
    * Dark mode support seperti halaman lain.
5.  **Jadwal Shalat:**
    * Dropdown Provinsi, Kabupaten/Kota, dan Bulan untuk pilih lokasi dan bulan.
    * Shalat Berikutnya: Waktu hitung mundur berdasarkan jadwal shalat terdekat.
    * Jadwal Shalat Hari Ini: Tampilan jadwal shalat untuk hari ini dengan highlight pada shalat aktif.
    * Tabel Jadwal Shalat: Tampilan tabel untuk bulan yang dipilih dengan warna berbeda untuk setiap kolom shalat.
    * Halaman Khusus: Halaman khusus untuk setiap lokasi dengan tab navigasi bulan.
6.  **Jadwal Shalat Hari Ini di Halaman Utama:**
    * Menampilkan jadwal shalat hari ini berdasarkan lokasi alamat IP user.
    * Shalat Berikutnya: Waktu hitung mundur berdasarkan jadwal shalat terdekat berikutnya.
    * Jam beserta detiknya berdasarkan alamat IP user.
    * Jadwal Shalat Hari Ini: Tampilan jadwal shalat untuk hari ini dengan highlight pada shalat aktif.
6.  **UI/UX Modern:**
    * Desain bersih (Clean), Tipografi yang nyaman dibaca (Inter & Amiri).
    * Responsif (Mobile Friendly).
    * Sistem Error Handling (404 & 500 Pages).

## 🛠️ Cara Menjalankan di Local

Pastikan Anda sudah menginstall **Node.js** (v18+).

1.  **Clone Repository**
    ```bash
    git clone https://github.com/Dumpxrepo/qalbu-quran.git
    cd qalbu-quran
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**
    Buat file `.env` di root folder dan isi (termasuk API baru untuk Imsakiyah dan Shalat):
    ```env
    PUBLIC_API_QURAN_LIST=https://equran.id/api/v2/surat
    PUBLIC_API_QURAN_DETAIL=https://equran.id/api/v2/surat
    PUBLIC_API_TAFSIR_DETAIL=https://equran.id/api/v2/tafsir
    PUBLIC_API_DOA_LIST=https://equran.id/api/doa
    PUBLIC_API_DOA_DETAIL=https://equran.id/api/doa
    PUBLIC_API_ASMAUL_HUSNA=https://api.myquran.com/v2/husna/semua
    PUBLIC_API_IMSAKIYAH_PROVINSI=https://equran.id/api/v2/imsakiyah/provinsi
    PUBLIC_API_IMSAKIYAH_KABKOTA=https://equran.id/api/v2/imsakiyah/kabkota
    PUBLIC_API_IMSAKIYAH_JADWAL=https://equran.id/api/v2/imsakiyah
    PUBLIC_API_SHALAT_PROVINSI=https://equran.id/api/v2/shalat/provinsi
    PUBLIC_API_SHALAT_KABKOTA=https://equran.id/api/v2/shalat/kabkota
    PUBLIC_API_SHALAT_JADWAL=https://equran.id/api/v2/shalat
    PUBLIC_API_IPINFO=https://ipinfo.io
    PUBLIC_API_IPINFO_TOKEN=6bb67ae5952de4
    PUBLIC_API_MQ_KOTA_CARI=https://api.myquran.com/v2/sholat/kota/cari
    PUBLIC_API_MQ_JADWAL=https://api.myquran.com/v2/sholat/jadwal
    ```

4.  **Jalankan Development Server**
    ```bash
    npm run dev
    ```
    Buka browser di `http://localhost:4321`. Coba halaman `/shalat` untuk lihat fitur baru.

## ☁️ Cara Deploy ke Cloudflare Pages

Project ini sudah dikonfigurasi menggunakan adapter `@astrojs/cloudflare`. Fitur baru seperti export PDF berjalan di client-side, aman untuk Pages.

### **Opsi 1: Deploy via Git Integration (Rekomendasi)**

1.  **Push ke GitHub**
    Pastikan kode sudah di-push ke repository GitHub.

2.  **Setup di Cloudflare Dashboard**
    * Buka [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create application** → **Pages**
    * Klik **Connect to Git** dan pilih repository `qalbu-quran`
    * **Build settings** akan otomatis terdeteksi:
        * **Framework preset:** `Astro`
        * **Build command:** `npm run build`
        * **Build output directory:** `dist`
    * Klik **Save and Deploy**

3.  **Environment Variables**
    Tambahkan semua variabel dari `.env` di **Settings** → **Environment variables** dashboard.

### **Opsi 2: Deploy via CLI (Direct Upload)**

```bash
# Build project
npm run build

# Deploy ke Pages (memerlukan Wrangler CLI)
npx wrangler pages deploy dist
```

**Catatan:** Untuk CLI deploy, pastikan sudah login:
```bash
npx wrangler login
```

## 📚 Struktur & Penjelasan Logika

### Struktur Folder
* `src/pages`: Berisi routing halaman. Menggunakan file-based routing Astro (`[nomor].astro` untuk dinamis). Baru: `shalat/index.astro` dan `shalat/[slug].astro` untuk halaman shalat.
* `src/layouts`: Layout utama (Header, Footer) yang digunakan ulang.
* `public`: Aset statis.

### Logika Audio Player (Client-Side)
Logika audio terletak di tag `<script>` pada halaman `src/pages/surat/[nomor].astro`.
* **Event Listener `ended`:** Saat audio ayat selesai diputar, script akan mencari tombol play untuk ayat berikutnya (`nomorAyat + 1`) dan memicu event `click()` secara otomatis.
* **State Qori:** Menggunakan variabel global `currentQoriId`. Saat dropdown berubah, semua source audio diperbarui URL-nya berdasarkan ID Qori yang dipilih.

### Logika Shalat (Baru - Mudah Dipahami)
- **Server-Side (Astro)**: Fetch daftar provinsi saat build/load halaman (cepat, no client fetch awal).
- **Client-Side (JS di <script>)**: 
  - Event change pada dropdown provinsi: Fetch kabkota via POST.
  - Event change pada kabkota dan bulan: Fetch jadwal, render tabel dengan loop map.
  - Hitung mundur untuk shalat berikutnya: Gunakan setInterval untuk update countdown setiap detik.
  - Tab navigasi bulan: Gunakan event listener untuk update data saat tab diklik.
- **Dark Mode**: Gunakan var(--) Tailwind untuk auto switch.
- **Error Handling**: Try-catch, tampil pesan jika gagal.
- **UI/UX**: Responsif via Tailwind, animasi transition, aksesibilitas aria-label.

Dibuat dengan ❤️ untuk pembelajaran dan ibadah.
