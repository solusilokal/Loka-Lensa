# Loka Lensa - Mini Website Pusat Sewa Kamera & Lensa Terlengkap

Website landing page interaktif & mobile-first untuk **Loka Lensa** (Pusat Sewa Kamera & Lensa Terlengkap di Palangka Raya). Dilengkapi dengan katalog kamera/gear, rincian harga sewa, lightbox galeri foto, form booking langsung ke WhatsApp, integrasi Google Maps, FAQ akordeon, testimoni, dan fitur berbagi (share).

---

## 🚀 Cara Menjalankan & Preview

Tersedia **2 cara praktis** untuk melihat preview website ini:

### 1. Langsung Tanpa Terminal (Paling Cepat & Praktis)
- Buka folder `rental kamera` di Windows Explorer.
- Cukup **klik dua kali (double-click)** pada file **`standalone.html`**.
- Website akan langsung terbuka di browser (Chrome / Edge / Firefox) lengkap dengan tampilan styling, gambar, font, dan semua fitur interaktif tanpa perlu menjalankan server.

---

### 2. Menggunakan Vite Dev Server (Hot Reload)
- **Cara 1:** Klik dua kali file **`preview.bat`**, lalu pilih opsi `[2]` untuk menjalankan Vite Dev Server (otomatis membuka browser di `http://localhost:3000`).
- **Cara 2:** Buka terminal (PowerShell / Command Prompt) di folder ini dan jalankan:
  ```bash
  npm.cmd run dev
  ```
- Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 📁 Struktur File Proyek

```
rental kamera/
├── public/
│   ├── Gemini_Generated_Image_gymx90gymx90gymx.jpg   # Gambar hero banner kamera
│   ├── logo-loka-lensa.png                          # Logo resmi Loka Lensa
│   ├── sony-a7-iii.webp                             # Foto katalog Sony A7 III
│   ├── canon-eos-r.webp                             # Foto katalog Canon EOS R
│   ├── sony-fe-50mm.webp                            # Foto katalog Lensa Sony FE 50mm
│   ├── dji-ronin-sc2.webp                           # Foto katalog DJI Ronin SC 2
│   └── godox-sl60w.webp                             # Foto katalog Godox SL60W
├── src/
│   ├── assets/                                      # Aset gambar & ikon
│   ├── App.jsx                                      # Komponen utama React Loka Lensa
│   ├── index.css                                    # Konfigurasi Tailwind & Google Fonts Plus Jakarta Sans
│   └── main.jsx                                     # Entry point aplikasi React
├── standalone.html                                  # File mandiri (bisa dibuka langsung via double-click)
├── preview.bat                                      # Script launcher 1-klik untuk Windows
├── index.html                                       # File HTML utama untuk Vite
├── logo-loka-lensa.png                              # Logo resmi Loka Lensa (root)
├── package.json                                     # Konfigurasi dependensi npm
├── vite.config.js                                   # Konfigurasi Vite server & build
├── tailwind.config.js                               # Konfigurasi Tailwind CSS
├── postcss.config.js                                # Konfigurasi PostCSS
├── build_standalone.cjs                             # Script bundler untuk generate standalone.html
├── Gemini_Generated_Image_gymx90gymx90gymx.jpg       # Gambar hero banner (root)
└── loka_lensa_sewa_kamera.tsx                       # File source code asli
```

---

## ✨ Fitur-Fitur Unggulan

- **Hero Banner & Brand Loka Lensa**: Tampilan visual mobile responsif bernuansa dark slate & gold/amber yang elegan dan profesional.
- **Media Sosial & Lokasi**: Tombol cepat menuju Instagram, TikTok, dan Google Maps.
- **Cerita Kami**: Latar belakang pendirian Loka Lensa dari komunitas videografer lokal sejak 2019.
- **Highlight Layanan**: Badge keunggulan seperti Pusat Kota, Buka 08:00 - 22:00, dan Garansi Alat Normal.
- **Katalog & Harga Interaktif**: Slider horizontal menampilkan gear (Sony A7 III, Canon EOS R, Lensa Sony FE 50mm, DJI Ronin SC 2, Godox SL60W) lengkap dengan kategori dan harga per 24 jam.
- **Lightbox Galeri**: Klik pada gambar katalog untuk membuka preview foto fullscreen dengan navigasi slider kiri-kanan.
- **Tanya Jawab (FAQ)**: Akordeon interaktif untuk syarat sewa, perhitungan jam, denda keterlambatan, dan ketentuan booking.
- **Testimoni Pelanggan**: Review dan rating bintang dari para videografer, content creator, dan fotografer.
- **Formulir Pemesanan WhatsApp**: Form booking terintegrasi yang otomatis menyusun pesan dan mengirimkannya ke WhatsApp admin (+6289529605601).
- **Tombol Melayang (Sticky CTA)**: Tombol pemesanan yang otomatis melayang saat pengguna menggulir ke bawah layar.
- **Modal Berbagi (Share Sheet)**: Fitur salin link, share ke X (Twitter), Facebook, dan WhatsApp.
