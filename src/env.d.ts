/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

/**
 * TYPE DEFINITIONS UNTUK ENVIRONMENT VARIABLES
 * ============================================
 * File ini mendefinisikan tipe data untuk semua environment variables
 * yang digunakan dalam aplikasi. Ini membantu TypeScript memberikan
 * autocomplete dan type checking.
 */

interface ImportMetaEnv {
  // API EQuran (Qur'an, Doa, Imsakiyah, Shalat)
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

  // API MyQuran (Jadwal Shalat Real-time - Homepage Widget)
  readonly PUBLIC_API_IPINFO: string;
  readonly PUBLIC_API_IPINFO_TOKEN: string;
  readonly PUBLIC_API_MQ_KOTA_CARI: string;
  readonly PUBLIC_API_MQ_JADWAL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}