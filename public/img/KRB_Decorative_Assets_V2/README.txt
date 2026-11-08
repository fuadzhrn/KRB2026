KRB — DECORATIVE ASSETS V2
==========================
Paket aset dekorasi untuk frontend KRB (React + Laravel + Inertia).

DIREKTORI
- png-original/     10 aset PNG (mayoritas transparan)
- webp-optimized/   versi WebP berukuran lebih ringan (+4 tape terpisah)
- tape-pieces/      4 potongan tape PNG transparan dari 1 lembar aset
- css/krb-scrapbook.css  contoh komponen dekorasi dan Polaroid berbasis CSS

DAFTAR UTAMA
- torn-paper-banner      : strip kertas sobek mendatar
- torn-paper-label       : patch/label kertas sobek
- brush-purple-realistic : sapuan cat ungu
- brush-yellow-realistic : sapuan cat kuning
- tape-purple-set        : 4 tape dalam satu sheet
- halftone-purple-realistic : halftone titik ungu
- checker-purple-torn    : checkerboard pada sobekan kertas
- polaroid-frame-landscape : bingkai foto horizontal, tengah transparan
- polaroid-frame-portrait  : bingkai foto vertikal, tengah transparan
- paper-texture-cream   : tekstur kertas krem, TIDAK transparan

PEMAKAIAN
1. Untuk produksi gunakan file WebP, PNG disimpan sebagai master.
2. Untuk foto dari CMS, gunakan elemen <img> dalam komponen .krb-polaroid.
   Lebih fleksibel daripada menaruh foto di bawah PNG bingkai.
3. Jangan menjadikan satu halaman sebagai gambar besar; setiap teks dan foto
   harus berupa elemen frontend yang responsif dan bisa berubah dari CMS.
4. Gunakan ikon normal dari library lucide-react (search, play, arrows, menu)
   dan aset dekorasi V1 (crown, doodle) untuk elemen khas KRB.
5. Catatan: gambar yang dibuat ini adalah aset siap pakai, bukan hasil akhir
   website. Sesuaikan crop/ukuran saat coding agar cocok dengan mockup.
