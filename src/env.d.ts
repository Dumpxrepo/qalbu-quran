/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * TYPE DEFINITIONS UNTUK ENVIRONMENT VARIABLES
 * ============================================
 * File ini mendefinisikan tipe data untuk semua environment variables
 * yang digunakan dalam aplikasi. Ini membantu TypeScript memberikan
 * autocomplete dan type checking.
 * 
 * UPDATE TERBARU:
 * - Menghapus PUBLIC_API_IPINFO dan PUBLIC_API_IPINFO_TOKEN
 * - Tidak menambahkan BigDataCloud (hardcoded di kode)
 * - Semua API deteksi lokasi sekarang client-side tanpa env vars
 */

interface ImportMetaEnv {
  // ==========================================
  // API EQuran (Qur'an, Doa, Imsakiyah, Shalat)
  // ==========================================
  readonly PUBLIC_API_QURAN_LIST: string;
  readonly PUBLIC_API_QURAN_DETAIL: string;
  readonly PUBLIC_API_TAFSIR_DETAIL: string;
  readonly PUBLIC_API_DOA_LIST: string;
  readonly PUBLIC_API_DOA_DETAIL: string;
  readonly PUBLIC_API_ASMAUL_HUSNA: string;
  readonly PUBLIC_API_IMSAKIYAH_PROVINSI: string;
  readonly PUBLIC_API_IMSAKIYAH_KABKOTA: string;
  readonly PUBLIC_API_IMSAKIYAH_JADWAL: string;
  readonly PUBLIC_API_SHALAT_PROVINSI: string;
  readonly PUBLIC_API_SHALAT_KABKOTA: string;
  readonly PUBLIC_API_SHALAT_JADWAL: string;

  // ==========================================
  // API MyQuran (Jadwal Shalat Real-time - Homepage Widget)
  // ==========================================
  readonly PUBLIC_API_MQ_KOTA_CARI: string;
  readonly PUBLIC_API_MQ_JADWAL: string;

  // ==========================================
  // CATATAN: API Deteksi Lokasi
  // ==========================================
  // Tidak ada environment variables untuk deteksi lokasi karena:
  // 1. HTML5 Geolocation API: Native browser API, tidak perlu URL
  // 2. BigDataCloud Reverse Geocoding: Hardcoded di kode (gratis, tanpa API key)
  // 3. ipapi.co: Hardcoded di kode (gratis, tanpa API key untuk basic usage)
  // 
  // Semua API di atas adalah client-side only dan tidak memerlukan
  // konfigurasi environment variables.
  // ==========================================
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}