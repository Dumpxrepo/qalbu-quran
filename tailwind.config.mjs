/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// Mendaftarkan font yang kita load dari Google Fonts
				inter: ['Inter', 'sans-serif'],
				arabic: ['Amiri', 'serif'], 
			},
			colors: {
				// Kita bisa custom warna default disini jika mau
				// Tapi kita sudah pakai default emerald & slate
			}
		},
	},
	plugins: [],
}