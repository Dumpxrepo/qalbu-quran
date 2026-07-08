# Qalbu - Aplikasi Al-Qur'an & Doa

Website modern untuk membaca Al-Qur'an, doa harian, Asmaul Husna, jadwal imsakiyah, dan jadwal shalat — dilengkapi audio player interaktif, tafsir per-ayat, background music, dark mode, dan desain responsif. Dibangun dengan **Astro SSR** dan dideploy ke **Cloudflare Pages**.

**Live:** [https://qalbu-quran.pages.dev/](https://qalbu-quran.pages.dev/)

---

## Preview

### Halaman Utama (Al-Qur'an)
![Halaman Utama](https://i.ibb.co.com/gFtrMMP1/aq-ss.png)

### Detail Surat
![Detail Surat](https://i.ibb.co.com/tT5b3324/surat-ss.png)

### Asmaul Husna
![Asmaul Husna](https://i.ibb.co.com/jkcxL4dJ/ah-ss.png)

### Kumpulan Doa
![Kumpulan Doa](https://i.ibb.co.com/nMjVkjGf/doa-ss.png)

### Contoh Isi Doa
![Contoh Isi Doa](https://i.ibb.co.com/b5Dkv3NS/isi-doa.png)

### Jadwal Imsakiyah
![Jadwal Imsakiyah](https://i.ibb.co.com/tMqq94ZX/ji-ss.png)

### Jadwal Shalat
![Jadwal Shalat](https://i.ibb.co.com/JRYT7GXv/js-ss.png)

---

## Tech Stack

| Teknologi | Keterangan |
|-----------|------------|
| [Astro](https://astro.build) | Framework utama — Server-Side Rendering (SSR) mode |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework |
| [Cloudflare Pages](https://pages.cloudflare.com) | Platform deployment (Edge-first) |
| [Wrangler](https://developers.cloudflare.com/workers/wrangler/) | Cloudflare CLI untuk local dev & deploy |
| TypeScript | Type-safe JavaScript |
| jsPDF (CDN) | Export PDF client-side (halaman Imsakiyah) |

**Data Sources (API Eksternal):**
- [equran.id](https://equran.id) — Al-Qur'an, Doa, Tafsir, Imsakiyah, Shalat
- [myquran.com](https://myquran.com) — Asmaul Husna, Jadwal Shalat, Geolokasi kota

---

## Fitur Utama

### 1. Al-Qur'an Digital
- Daftar 114 surat dengan pencarian real-time (nama, arti, nomor)
- Halaman detail surat dengan teks Arab, transliterasi Latin, dan terjemahan Indonesia
- **Audio Player:**
  - Putar audio per-ayat dengan **auto-play next ayat** (otomatis lanjut ke ayat berikutnya)
  - Audio full satu surat
  - Pilihan **6 Qori**: Juhany, Qasim, Sudais, Dossari, Rasyid, Dosari
  - Progress bar per-ayat dengan pembaruan setiap 100ms
- **Tafsir per-ayat:** Modal popup interaktif — klik ikon tafsir pada ayat tanpa pindah halaman
- Navigasi sidebar surat dengan pencarian

### 2. Kumpulan Doa
- Daftar doa lengkap dengan pencarian berdasarkan nama dan kategori
- Detail doa: teks Arab, transliterasi, terjemahan, riwayat, dan tags
- Navigasi Prev/Next antar doa

### 3. Asmaul Husna
- Daftar 99 Nama Allah dengan pencarian real-time
- Tampilan grid card dengan nomor, nama Arab, nama Latin, dan arti

### 4. Jadwal Imsakiyah
- Dropdown cascading: Provinsi → Kabupaten/Kota
- Tabel jadwal harian (Imsak, Subuh, Dzuhur, Ashar, Maghrib, Isya)
- Highlight warna pada kolom Imsak dan Maghrib
- **Export PDF:** Generate PDF 1 halaman dengan desain modern via jsPDF

### 5. Jadwal Shalat
- **Halaman pencarian:** 3 dropdown cascading (Provinsi → Kabupaten → Bulan)
- **Halaman khusus:** Tampilan lokasi spesifik dengan tab navigasi 12 bulan
- **Widget shalat berikutnya:** Countdown timer otomatis ke waktu shalat terdekat
- Highlight "HARI INI" pada tabel bulanan

### 6. Widget Shalat di Halaman Utama
- Deteksi lokasi otomatis (Geolocation API → ipapi.co → Jakarta fallback)
- 6 kartu shalat berwarna dengan highlight shalat aktif
- Countdown ke shalat berikutnya
- Setelah Isya, otomatis switch ke jadwal Subuh besok

### 7. Background Music
- Auto-play musik latar dengan tombol toggle
- **Smart Pause/Resume:** Otomatis pause saat audio Quran diputar, resume setelah selesai
- Auto-hide tombol (muncul saat interaksi, menghilang setelah 3 detik)
- Shift-up otomatis saat tombol scroll-to-top muncul

### 8. Dark Mode
- Toggle dark/light dengan persistensi localStorage
- FOUC prevention (script inline sebelum paint)
- CSS custom properties (`:root` / `.dark`)
- Extensive dark mode overrides untuk semua halaman

### 9. SEO & Metadata
- Open Graph + Twitter Cards untuk sharing sosial
- JSON-LD WebSite schema
- Google Search Console meta tag verification
- Sitemap.xml dan robots.txt
- Canonical URL

### 10. UI/UX
- Desain responsif (mobile-first): hamburger menu, stacked layouts
- Tipografi: Inter (sans-serif) + Amiri (Arabic serif)
- Scroll-to-top dengan progress circle SVG
- Custom 404 dan 500 error pages

---

## Cara Menjalankan di Local

### Opsi 1: Node.js (Langsung)

**Prasyarat:**
- [Node.js](https://nodejs.org) v18+ (disarankan v20+)
- npm, pnpm, atau yarn

```bash
# Clone repository
git clone https://github.com/Dumpxrepo/qalbu-quran.git
cd qalbu-quran

# Install dependencies
npm install
# atau
pnpm install
```

**Buat file `.env` di root project** (lihat bagian Environment Variables di bawah).

```bash
# Jalankan development server
npm run dev
# atau
pnpm dev
```

Buka **http://localhost:4321** di browser.

### Opsi 2: Docker

**Prasyarat:**
- [Docker](https://docker.com) + [Docker Compose](https://docs.docker.com/compose/)

```bash
# Clone repository
git clone https://github.com/Dumpxrepo/qalbu-quran.git
cd qalbu-quran

# Jalankan dengan Docker Compose
docker compose up
```

Buka **http://localhost:4321**. Hot-reload aktif — edit file, browser auto-refresh.

> **Catatan:** Docker hanya untuk development. Production tetap di Cloudflare Pages.

### Script Lainnya

```bash
npm run build     # Build untuk production
npm run preview   # Preview build result di local
```

---

## Cara Deploy ke Cloudflare Pages

### Opsi 1: Git Auto-Deploy (Recommended)

1. **Push repository ke GitHub**

2. **Setup di Cloudflare Dashboard:**
   - Buka [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pilih **Workers & Pages** → **Create application** → **Pages**
   - Klik **Connect to Git**, pilih repository `qalbu-quran`
   - **Build settings** terdeteksi otomatis:
     - Framework preset: `Astro`
     - Build command: `npm run build`
     - Build output directory: `dist`
   - **Environment variables:** Tambahkan semua variabel dari `.env` (lihat bagian di bawah)
   - Klik **Save and Deploy**

3. **Setiap push ke GitHub otomatis trigger deploy baru.**

### Opsi 2: Wrangler CLI (Manual)

```bash
# Login ke Cloudflare
npx wrangler login

# Build project
npm run build

# Deploy ke Cloudflare Pages
npx wrangler pages deploy dist --project-name=qalbu-quran
```

> **Catatan:** Deploy via CLI tidak membawa environment variables dari `.env`. Pastikan env vars sudah di-set di Cloudflare Dashboard untuk deployment yang benar.

### Push dari Local ke GitHub + Deploy

```bash
# Add, commit, push
git add .
git commit -m "your message"
git push origin main

# Deploy via Wrangler (opsional, manual)
npm run build
npx wrangler pages deploy dist --project-name=qalbu-quran
```

---

## Environment Variables

Semua variable menggunakan prefix `PUBLIC_` agar bisa diakses dari client-side (browser).

### Cara Mengisi

1. **Local development:** Buat file `.env` di root project
2. **Cloudflare Pages:** Tambahkan di Dashboard → Workers & Pages → qalbu-quran → Settings → Environment variables

### Daftar Variables

| Variable | Nilai | Keterangan |
|----------|-------|------------|
| `PUBLIC_API_QURAN_LIST` | `https://equran.id/api/v2/surat` | API daftar 114 surat |
| `PUBLIC_API_QURAN_DETAIL` | `https://equran.id/api/v2/surat` | API detail surat (append `/nomor`) |
| `PUBLIC_API_TAFSIR_DETAIL` | `https://equran.id/api/v2/tafsir` | API tafsir per-ayat (append `/nomor`) |
| `PUBLIC_API_DOA_LIST` | `https://equran.id/api/doa` | API daftar doa |
| `PUBLIC_API_DOA_DETAIL` | `https://equran.id/api/doa` | API detail doa (append `/id`) |
| `PUBLIC_API_ASMAUL_HUSNA` | `https://api.myquran.com/v2/husna/semua` | API 99 Nama Allah |
| `PUBLIC_API_IMSAKIYAH_PROVINSI` | `https://equran.id/api/v2/imsakiyah/provinsi` | API daftar provinsi imsakiyah |
| `PUBLIC_API_IMSAKIYAH_KABKOTA` | `https://equran.id/api/v2/imsakiyah/kabkota` | API kabupaten/kota (POST) |
| `PUBLIC_API_IMSAKIYAH_JADWAL` | `https://equran.id/api/v2/imsakiyah` | API jadwal imsakiyah (POST) |
| `PUBLIC_API_SHALAT_PROVINSI` | `https://equran.id/api/v2/shalat/provinsi` | API daftar provinsi shalat |
| `PUBLIC_API_SHALAT_KABKOTA` | `https://equran.id/api/v2/shalat/kabkota` | API kabupaten/kota shalat (POST) |
| `PUBLIC_API_SHALAT_JADWAL` | `https://equran.id/api/v2/shalat` | API jadwal shalat (POST) |
| `PUBLIC_API_MQ_KOTA_CARI` | `https://api.myquran.com/v2/sholat/kota/cari` | API pencarian kota (append `/nama`) |
| `PUBLIC_API_MQ_JADWAL` | `https://api.myquran.com/v2/sholat/jadwal` | API jadwal shalat (append `/id/tahun/bulan/tanggal`) |

### File `.env` Lengkap (Copy-Paste)

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
PUBLIC_API_MQ_KOTA_CARI=https://api.myquran.com/v2/sholat/kota/cari
PUBLIC_API_MQ_JADWAL=https://api.myquran.com/v2/sholat/jadwal
```

---

## Struktur Folder

```
qalbu-quran/
├── public/                     # Aset statis
│   ├── favicon.svg             #   Icon buku hijau
│   ├── robots.txt              #   Robot crawler config
│   └── sitemap.xml             #   Sitemap untuk search engine
├── src/
│   ├── env.d.ts                # TypeScript declarations untuk env vars
│   ├── layouts/
│   │   └── Layout.astro        # Layout utama (navbar, footer, theme, music, scroll-to-top)
│   └── pages/
│       ├── index.astro          # Homepage — daftar surat + widget jadwal shalat
│       ├── 404.astro            # Halaman Not Found
│       ├── 500.astro            # Halaman Server Error
│       ├── surat/
│       │   └── [nomor].astro   # Detail surat (dynamic route per nomor)
│       ├── doa/
│       │   ├── index.astro     # Daftar doa
│       │   └── [id].astro      # Detail doa (dynamic route per id)
│       ├── asmaul-husna/
│       │   └── index.astro     # Daftar 99 Nama Allah
│       ├── shalat/
│       │   ├── index.astro     # Pencarian jadwal shalat
│       │   └── [slug].astro    # Halaman khusus lokasi (dynamic route)
│       └── imsakiyah/
│           └── index.astro     # Jadwal imsakiyah + export PDF
├── astro.config.mjs            # Konfigurasi Astro (SSR + Cloudflare adapter + Tailwind)
├── tailwind.config.mjs         # Konfigurasi Tailwind (custom fonts: Inter, Amiri)
├── package.json                # Dependencies dan scripts
├── Dockerfile                  # Multi-stage Docker build (dev/build/preview)
├── docker-compose.yml          # Docker Compose untuk local dev
├── .gitignore                  # Git ignore rules
└── .dockerignore               # Docker ignore rules
```

### Penjelasan Tiap Bagian

#### `src/pages/` — File-Based Routing

Astro menggunakan file-based routing. Setiap file di `src/pages/` otomatis menjadi route:

| File | Route | Fungsi |
|------|-------|--------|
| `index.astro` | `/` | Homepage — daftar surat + widget shalat real-time |
| `surat/[nomor].astro` | `/surat/1`, `/surat/2`, ... | Detail surat berdasarkan nomor |
| `doa/index.astro` | `/doa` | Daftar kumpulan doa |
| `doa/[id].astro` | `/doa/1`, `/doa/2`, ... | Detail doa berdasarkan id |
| `asmaul-husna/index.astro` | `/asmaul-husna` | Daftar 99 Nama Allah |
| `shalat/index.astro` | `/shalat` | Pencarian jadwal shalat |
| `shalat/[slug].astro` | `/shalat/jakarta`, ... | Halaman khusus lokasi |
| `imsakiyah/index.astro` | `/imsakiyah` | Jadwal imsakiyah + PDF export |
| `404.astro` | `/404` | Halaman error 404 |
| `500.astro` | `/500` | Halaman error 500 |

#### `src/layouts/Layout.astro` — Layout Utama

File ini membungkus SEMUA halaman. Berisi:
- **Navbar:** Fixed, responsive, animated underline indicator, hamburger menu mobile
- **Theme toggle:** Dark/light mode dengan localStorage persistence
- **Background music:** Audio player otomatis dengan smart pause/resume via CustomEvent
- **Scroll-to-top:** SVG progress circle, muncul di 300px scroll
- **Footer:** 6 tombol social media dengan animasi hover
- **SEO meta tags:** Open Graph, Twitter Cards, JSON-LD, canonical URL
- **Global CSS:** ~2400 baris CSS untuk theme, dark mode overrides, animasi, responsive

#### `src/env.d.ts` — Type Declarations

TypeScript type definitions untuk 14 environment variables `PUBLIC_API_*`. Memastikan IDE memberikan autocompletion dan type checking untuk semua API endpoint.

---

## Arsitektur & Cara Kerja

### Alur Data (Data Flow)

```
┌─────────────────────────────────────────────────────┐
│                    SERVER SIDE                       │
│  (Astro SSR — setiap request halaman)               │
│                                                      │
│  Frontmatter fetch() dari API eksternal:            │
│  equran.id / myquran.com → data → template Astro    │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                    CLIENT SIDE                       │
│  (Browser — interaktivitas)                         │
│                                                      │
│  • Search filtering (hidden .search-meta spans)     │
│  • Audio player (auto-play next, progress bar)      │
│  • Geolocation → prayer schedule widget             │
│  • Cascading dropdowns (provinsi → kabkota → data)  │
│  • PDF export (jsPDF via CDN)                       │
│  • Theme toggle (localStorage)                      │
│  • Countdown timer (setInterval)                    │
│  • Background music sync (CustomEvent)              │
└─────────────────────────────────────────────────────┘
```

### Komunikasi Antar Komponen

- **CustomEvent Protocol:** Halaman `/surat/[nomor]` mengirim event `quran-audio-started` dan `quran-audio-stopped` → Layout.astro menangkap event → pause/resume background music
- **SessionStorage:** Halaman `/shalat` menyimpan provinsi/kota ke `sessionStorage` → `/shalat/[slug]` membaca data tersebut
- **LocalStorage:** Theme preference (`theme` key) dan cache jadwal shalat (1 jam TTL)

### Pola Search (Pencarian)

Pola yang sama digunakan di halaman homepage, doa, asmaul-husna, dan sidebar surat:
1. Sembunyikan metadata pencarian di elemen `.search-meta` (case-insensitive)
2. Filter client-side dengan `includes()` berdasarkan input user
3. Toggle tombol clear saat query tidak kosong

### Dark Mode Strategy

- **FOUC Prevention:** Script inline di `<head>` membaca `localStorage.theme` SEBELUM paint
- **CSS Custom Properties:** Variabel `--bg`, `--text`, `--surface`, dst. di `:root` (light) dan `.dark`
- **Safety Net CSS:** ~1300 baris CSS dark mode overrides di Layout.astro untuk semua halaman
- **Persistensi:** `localStorage` key `theme` dengan nilai `dark` atau `light`

---

## Best Practices

### Development
- **SSR Mode:** Semua halaman di-render server-side untuk SEO yang optimal
- **Client-side interactivity:** Interaktivitas ditangani oleh `<script>` tags di dalam page files
- **Lazy loading:** CDN dependencies (jsPDF) hanya dimuat di halaman yang membutuhkan (imsakiyah)
- **Caching:** Jadwal shalat di-cache di `localStorage` dengan TTL 1 jam

### Deployment
- **Git Auto-Deploy:** Push ke GitHub → otomatis build & deploy ke Cloudflare Pages
- **Environment Variables:** Semua API endpoints di-set sebagai env vars, bukan hardcoded
- **Edge-first:** Cloudflare adapter menjalankan SSR di Edge network, bukan Node.js server

### Performance
- **No framework overhead:** Astro mengirimkan 0 JavaScript ke client kecuali yang diperlukan
- **Font loading:** Google Fonts (Inter + Amiri) dimuat via `<link>` di `<head>`
- **Image optimization:** SVG favicon, no large images
- **CSS-in-astro:** Semua CSS inline di Layout.astro, mengurangi HTTP requests

### Code Organization
- **File-based routing:** Route otomatis dari struktur file
- **Monolithic pages:** Setiap page file mandiri dengan script dan style sendiri
- **Shared layout:** Layout.astro sebagai satu-satunya shared component
- **Type safety:** TypeScript declarations untuk semua environment variables

---

## Contributing

1. Fork repository
2. Buat branch baru (`git checkout -b feature/nama-fitur`)
3. Commit perubahan (`git commit -m 'Add nama-fitur'`)
4. Push ke branch (`git push origin feature/nama-fitur`)
5. Buka Pull Request

---

## License

Dibuat untuk pembelajaran dan ibadah.

---

**Qalbu** — Al-Qur'an digital yang dibangun dengan sederhana untuk kemudahan umat.
