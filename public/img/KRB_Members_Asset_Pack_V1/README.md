# KRB MEMBERS ASSETS — V1

Paket aset khusus halaman Members KRB.

STRUKTUR
- members/posters-original/: 15 poster anggota asli (salinan, tidak diubah)
- members/cutouts-draft/: 15 ekstraksi transparan dari foto poster asli
- members/hero-stickers-white-outline/: 6 stiker dengan outline putih untuk Hero
- members/backgrounds/el-retro-radial-burst.svg: background radial scalable tanpa teks dan wajah
- members/reference/: referensi mockup untuk penataan frontend
- members-manifest.json: database file aset + nama yang ditranskripsi dari poster
- krbMembersAssets.js: modul data untuk React

PENTING UNTUK KUALITAS:
1. Cutout dibuat secara non-generatif memakai masking, bukan menggambar ulang wajah.
2. Pemisahan dari poster bertekstur radial bersifat draf, dan beberapa tepi rambut, bahu,
   unsur topi koboi atau sisa potongan poster mungkin memerlukan koreksi manual.
3. Bagian tubuh yang tertutup panel nama tidak direkonstruksi.
4. Saat diimplementasikan, posisikan pangkal cutout di belakang torn-paper border
   (komposisi seperti mockup), supaya potongan bawah yang lurus tertutup.
5. JANGAN menganggap foto cutout sudah lolos QC untuk semua ukuran layar.
6. Nama dan nickname dari poster telah diketik secara manual: verifikasi ejaan sebelum tayang.
7. Fun facts dan deskripsi sengaja kosong: belum ada data asli untuk itu.
8. Keenam anggota di Hero hanya untuk komposisi visual, tidak menunjukkan status atau ketua.
9. Poster asli tetap disimpan untuk arsip. Jangan menimpa dengan hasil crop.

INSTALASI (ASUMSI LARAVEL + REACT + INERTIA)
A. Salin folder `members` ke `public/assets/krb/members`.
B. Tempatkan `krbMembersAssets.js` di `resources/js/data/`.
C. Sesuaikan manifest jika folder target berbeda (jangan menebak path).
D. Bangun kartu menggunakan data `krbMembers`; nama tidak perlu baked ke gambar.
E. Gunakan `heroStickerUrl` pada Hero, `cutoutUrl` pada Spotlight; foto anggota tetap original.
F. Footer dan Navbar gunakan komponen global, jangan buat ulang.

Aset scrapbook umum (purple brush, torn paper, tape, halftone, crown)
telah tersedia pada KRB Decorative Icons Custom V1 dan KRB Decorative Assets V2.
Paket Members ini tidak menduplikasinya.
