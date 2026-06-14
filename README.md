# Cerahati

## Tentang Cerahati

Cerahati adalah portal digital yang menghubungkan panti asuhan dengan masyarakat yang ingin berbagi dan peduli. Melalui Cerahati, kamu dapat menemukan informasi lengkap tentang berbagai panti asuhan, mulai dari lokasi, jumlah anak asuh, hingga fasilitasnya. 

## Anggota

Dafa Andika Firmansyah - 2210511049  
Farel Bayhaqi - 2210511073  
Putra Mahandika - 2110511047  

## Installation

1. Clone repository:
```bash
git clone https://github.com/zerrr232/SOA-Kel.9_Rumah-yatim
cd cerahati
```

2. Install dependencies:
```bash
npm install
```

3. Setup Database MySQL
```bash
1. Jalankan MySQL Anda (misal melalui XAMPP).
2. Buat database baru bernama cerahati melalui phpMyAdmin atau klien database favorit Anda.
3. Import file cerahati.sql yang ada di dalam repositori ini ke dalam database cerahati tersebut.
```

4. Jalankan Server Redis
Pastikan layanan Redis Anda sudah aktif sebelum menyalakan aplikasi.
- Di Windows/Linux: Buka terminal baru dan ketik redis-server untuk mengaktifkannya.

Cara Menjalankan Aplikasi
Setelah semua langkah di atas selesai, buka folder cerahatiAPI dan jalankan aplikasi dengan perintah:
```bash
node app.js
```

Cara Mengonfigurasi Front-End (Opsional)
1. Buka file `app.js` menggunakan VS Code atau Text Editor pilihan Anda.
2. Cari baris kode berikut (sekitar baris 60):
   ```javascript
   app.use(express.static(path.join(__dirname, '/frontend')));
   ```
3. Ubah teks '/frontend' sesuai dengan nama atau lokasi folder tempat Anda menyimpan folder frontend proyek ini.
4. Simpan file app.js, lalu jalankan ulang aplikasi menggunakan perintah node app.js.
5. Buka browser dan akses http://localhost:3000.

