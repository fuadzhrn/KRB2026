# KRB Asset Manifest

Referensi aset frontend website KRB. Semua path di dokumen ini sudah diverifikasi terhadap file yang benar-benar ada (Tahap 2.5, 8 November 2026).

- **Lokasi file:** `public/assets/krb/`
- **URL publik:** `/assets/krb/...`
- **Manifest kode:** `resources/js/data/krbAssets.js` → `krbAssets` (URL) dan `krbAssetSizes` (dimensi piksel)

```jsx
import { krbAssets, krbAssetSizes } from '@/data/krbAssets';

<img
    src={krbAssets.photos.hero.sma}
    width={krbAssetSizes.photos.sma.width}
    height={krbAssetSizes.photos.sma.height}
    alt="Foto bersama KRB saat SMA"
/>
```

Alias `@` → `resources/js` disediakan otomatis oleh `laravel-vite-plugin`. Jangan menulis path aset secara langsung di komponen; selalu lewat `krbAssets`.

---

## 1. Struktur folder

```text
public/assets/krb/
├── photos/
│   ├── hero/              5 foto grayscale (JPG)
│   ├── moments/           5 foto natural (JPG)
│   └── members/           (kosong, belum ada foto anggota)
├── decorative/
│   ├── paper/             2 sobekan kertas (WebP)
│   ├── brushes/           2 brush realistis (WebP) + 2 brush flat (SVG)
│   ├── tapes/             5 tape realistis (WebP) + 1 tape flat (SVG)
│   ├── patterns/          2 pola realistis (WebP) + 2 pola flat (SVG)
│   └── frames/            2 bingkai polaroid (WebP)
├── icons/                 5 doodle (SVG)
├── textures/              1 tekstur kertas (WebP)
└── video-thumbnails/      (kosong, belum ada thumbnail video)
```

Total: **34 file**. Semuanya salinan byte-per-byte dari file sumber (hash MD5 identik), tanpa konversi, kompresi, atau perubahan warna.

> Folder `members/` dan `video-thumbnails/` masih kosong. Git tidak melacak folder kosong, jadi folder ini bisa hilang setelah clone. Akan terisi ketika asetnya tersedia.

---

## 2. Foto

Wajah, orang, dan komposisi tidak diubah. Versi grayscale dan natural dari foto yang sama memiliki ukuran identik.

Kolom "Key" berisi nama key di `krbAssets.photos.hero` / `krbAssets.photos.moments` dan `krbAssetSizes.photos`.

### 2.1 Hero (grayscale)

| Asset | Key | URL | Ukuran | Sumber asli | Penggunaan |
|---|---|---|---|---|---|
| SMA grayscale | `sma` | `/assets/krb/photos/hero/sma-grayscale.jpg` | 1365×2048, 768 KB | `public/img/KRB_Asset_Edit_Tahap_1/KRB_SMA_hero_grayscale.jpg` | Home Hero |
| Road Trip grayscale | `roadTrip` | `/assets/krb/photos/hero/road-trip-grayscale.jpg` | 1536×2048, 1,3 MB | `public/img/KRB_Asset_Edit_Tahap_1/KRB_RoadTrip_hero_grayscale.jpg` | Home Hero |
| Air Terjun grayscale | `airTerjun` | `/assets/krb/photos/hero/air-terjun-grayscale.jpg` | 900×1600, 325 KB | `public/img/KRB_Asset_Edit_Tahap_2/KRB_AirTerjun_hero_grayscale.jpg` | Home Hero |
| Makan Bareng grayscale | `makanBareng` | `/assets/krb/photos/hero/makan-bareng-grayscale.jpg` | 828×1472, 224 KB | `public/img/KRB_Asset_Edit_Tahap_2/KRB_MakanBareng_hero_grayscale.jpg` | Home Hero |
| School Days grayscale | `schoolDays` | `/assets/krb/photos/hero/school-days-grayscale.jpg` | 1200×1600, 403 KB | `public/img/KRB_Asset_Edit_Tahap_2/KRB_SchoolDays_hero_grayscale.jpg` | Home Hero (cadangan) / Timeline |

### 2.2 Moments (natural)

| Asset | Key | URL | Ukuran | Sumber asli | Penggunaan |
|---|---|---|---|---|---|
| SMA natural | `sma` | `/assets/krb/photos/moments/sma-natural.jpg` | 1365×2048, 1,0 MB | `public/img/KRB_Asset_Edit_Tahap_1/KRB_SMA_natural.jpg` | Momen Favorit, Timeline, Archive, About |
| Road Trip natural | `roadTrip` | `/assets/krb/photos/moments/road-trip-natural.jpg` | 1536×2048, 1,5 MB | `public/img/KRB_Asset_Edit_Tahap_1/KRB_RoadTrip_natural.jpg` | Momen Favorit, Archive |
| Air Terjun natural | `airTerjun` | `/assets/krb/photos/moments/air-terjun-natural.jpg` | 900×1600, 422 KB | `public/img/KRB_Asset_Edit_Tahap_2/KRB_AirTerjun_natural.jpg` | Momen Favorit, Archive |
| Makan Bareng natural | `makanBareng` | `/assets/krb/photos/moments/makan-bareng-natural.jpg` | 828×1472, 314 KB | `public/img/KRB_Asset_Edit_Tahap_2/KRB_MakanBareng_natural.jpg` | Momen Favorit, Archive |
| School Days natural | `schoolDays` | `/assets/krb/photos/moments/school-days-natural.jpg` | 1200×1600, 538 KB | `public/img/KRB_Asset_Edit_Tahap_2/KRB_SchoolDays_natural.jpg` | Timeline, Archive |

Semua foto berorientasi **portrait**. Untuk frame landscape, atur crop dengan `object-fit: cover` + `object-position` agar wajah tidak terpotong.

### 2.3 Members

Belum ada foto anggota (EL). `krbAssets.photos.members` sengaja dibiarkan kosong.

---

## 3. Aset dekoratif

Semua WebP di bawah ini (kecuali tekstur kertas) memiliki **alpha channel / transparan** (diverifikasi dari header VP8X).

Ada dua gaya untuk beberapa elemen:
- **Realistis (WebP):** sesuai gaya scrapbook di mockup. Gunakan ini sebagai default.
- **Flat (SVG, sufiks `-flat`):** bentuk vektor sederhana. Warnanya **belum** memakai palet KRB (mis. `#7C3AED`, `#FACC15`, `#A855F7`), jadi sesuaikan dulu jika dipakai.

### 3.1 Paper — `krbAssets.decorative.paper`

| Asset | Key | URL | Ukuran | Fungsi | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Torn paper banner | `tornBanner` | `/assets/krb/decorative/paper/torn-paper-banner.webp` | 2172×724 | Strip kertas sobek mendatar, divider | Hero, pemisah antar section |
| Torn paper label | `tornLabel` | `/assets/krb/decorative/paper/torn-paper-label.webp` | 1448×1086 | Patch/label kertas sobek di belakang teks | Hero tagline, label section |

### 3.2 Brushes — `krbAssets.decorative.brushes`

| Asset | Key | URL | Ukuran | Fungsi | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Brush ungu | `purple` | `/assets/krb/decorative/brushes/brush-purple.webp` | 2172×724 | Sapuan cat ungu di belakang heading | Hero heading, judul section |
| Brush kuning | `yellow` | `/assets/krb/decorative/brushes/brush-yellow.webp` | 2172×724 | Highlight kuning | Hero, KRB in Numbers |
| Brush ungu flat | `purpleFlat` | `/assets/krb/decorative/brushes/brush-purple-flat.svg` | viewBox 320×120 | Alternatif vektor | Opsional |
| Brush kuning flat | `yellowFlat` | `/assets/krb/decorative/brushes/brush-yellow-flat.svg` | viewBox 320×120 | Alternatif vektor | Opsional |

### 3.3 Tapes — `krbAssets.decorative.tapes`

| Asset | Key | URL | Ukuran | Fungsi | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Purple tape set | `set` | `/assets/krb/decorative/tapes/purple-tape-set.webp` | 1448×1086 | 4 tape dalam satu sheet (referensi; lebih praktis memakai potongan di bawah) | — |
| Purple tape angled | `angled` | `/assets/krb/decorative/tapes/purple-tape-angled.webp` | 717×402 | Selotip miring di sudut foto | Hero collage, polaroid |
| Purple tape long folded | `longFolded` | `/assets/krb/decorative/tapes/purple-tape-long-folded.webp` | 946×366 | Selotip panjang | Hero collage, Timeline |
| Purple tape short | `short` | `/assets/krb/decorative/tapes/purple-tape-short.webp` | 364×362 | Selotip pendek | Polaroid, kartu member |
| Purple tape straight | `straight` | `/assets/krb/decorative/tapes/purple-tape-straight.webp` | 718×295 | Selotip lurus | Polaroid, kartu |
| Purple tape flat | `flat` | `/assets/krb/decorative/tapes/purple-tape-flat.svg` | viewBox 140×70 | Alternatif vektor | Opsional |

### 3.4 Patterns — `krbAssets.decorative.patterns`

| Asset | Key | URL | Ukuran | Fungsi | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Halftone ungu | `halftone` | `/assets/krb/decorative/patterns/halftone-purple.webp` | 1254×1254 | Titik halftone realistis | Hero background accent |
| Halftone dots flat | `halftoneDots` | `/assets/krb/decorative/patterns/halftone-dots.svg` | viewBox 180×120 | Titik halftone vektor | Aksen kecil |
| Checker torn | `checkerTorn` | `/assets/krb/decorative/patterns/checker-purple-torn.webp` | 1254×1254 | Checkerboard ungu di kertas sobek | Hero, Footer |
| Checkerboard flat | `checkerboard` | `/assets/krb/decorative/patterns/checkerboard.svg` | viewBox 160×96 | Checkerboard vektor | Aksen kecil |

### 3.5 Frames — `krbAssets.decorative.frames`

| Asset | Key | URL | Ukuran | Fungsi | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Polaroid portrait | `polaroidPortrait` | `/assets/krb/decorative/frames/polaroid-portrait.webp` | 1086×1448 | Bingkai polaroid vertikal, tengah transparan | Hero collage, Momen Favorit |
| Polaroid landscape | `polaroidLandscape` | `/assets/krb/decorative/frames/polaroid-landscape.webp` | 1448×1086 | Bingkai polaroid horizontal, tengah transparan | Momen Favorit, Video Archive |

Catatan: README paket V2 menyarankan polaroid untuk foto dinamis (dari CMS) dibuat dengan CSS (`<img>` di dalam wrapper berbingkai), bukan menaruh foto di bawah PNG bingkai.

---

## 4. Icons — `krbAssets.icons`

Doodle khas KRB. Untuk ikon fungsional (menu, play, search, panah navigasi) gunakan `lucide-react`.

| Asset | Key | URL | viewBox | Warna saat ini | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Crown | `crown` | `/assets/krb/icons/crown.svg` | 128×96 | `#6D28D9` | Hero heading, The Crew |
| Doodle arrow | `doodleArrow` | `/assets/krb/icons/doodle-arrow.svg` | 160×100 | `#6D28D9` | Hero CTA, anotasi foto |
| Underline scribble | `underlineScribble` | `/assets/krb/icons/underline-scribble.svg` | 180×60 | `#6D28D9` + `#FACC15` | Garis bawah heading |
| Sparkle burst | `sparkleBurst` | `/assets/krb/icons/sparkle-burst.svg` | 96×96 | `#FACC15` | Aksen di sekitar heading/foto |
| Accent lines | `accentLines` | `/assets/krb/icons/accent-lines.svg` | 120×80 | `#FACC15` | Aksen "highlight" kecil |

Warna SVG belum sama dengan palet KRB (`#6611D7` / `#F8D333`). Jika perlu warna yang tepat atau dapat diubah lewat CSS, SVG bisa dibuat sebagai komponen React inline dengan `currentColor`. File aslinya tidak diubah.

---

## 5. Textures — `krbAssets.textures`

| Asset | Key | URL | Ukuran | Fungsi | Section yang direkomendasikan |
|---|---|---|---|---|---|
| Paper cream | `paperCream` | `/assets/krb/textures/paper-cream.webp` | 1254×1254, tidak transparan | Tekstur kertas krem (tileable) | Background halaman/section |

Juga tersedia sebagai utility Tailwind `krb-paper-texture` di `resources/css/app.css` (path yang sama).

---

## 6. Aset yang belum tersedia

| Kebutuhan | Status |
|---|---|
| Foto anggota (EL) | Belum ada; `photos/members/` kosong |
| Thumbnail Video Archive | Belum ada; `video-thumbnails/` kosong |
| File video | Belum ada |
| Foto tambahan untuk Archive/Timeline (selain 5 momen di atas) | Belum ada |
| Logo/wordmark KRB sebagai file | Belum ada (bisa dibuat sebagai teks dengan font Archivo Black) |
| Favicon KRB | Belum ada (`public/favicon.ico` masih bawaan Laravel) |

---

## 7. File sumber yang tetap di lokasi lama

Tidak ada file sumber yang dipindah, diganti nama, atau dihapus. Folder `public/img/` masih berisi 67 file.

### 7.1 Sumber yang sudah disalin (34 file)
Semua file pada tabel di atas, kolom "Sumber asli", plus:
- `public/img/KRB_Decorative_Assets_V2/webp-optimized/*.webp` (14 file) → `decorative/*`, `textures/*`
- `public/img/KRB_Decorative_Icons_Custom/*.svg` (10 file) → `icons/*`, `decorative/*/…-flat.svg`, `decorative/patterns/*.svg`

### 7.2 Sengaja tidak disalin

| File | Alasan |
|---|---|
| `public/img/KRB_Asset_Edit_Tahap_2/KRB_AirTerjun_asli.jpg` | Foto mentah sebelum koreksi. Frontend memakai versi natural/grayscale. Disimpan sebagai arsip. |
| `public/img/KRB_Asset_Edit_Tahap_2/KRB_MakanBareng_asli.jpg` | Sama seperti di atas |
| `public/img/KRB_Asset_Edit_Tahap_2/KRB_SchoolDays_asli.jpg` | Sama seperti di atas |
| `public/img/KRB_Asset_Edit_Tahap_1/Preview_Sebelum_Sesudah.jpg` | Lembar preview hasil edit (bukan aset website) |
| `public/img/KRB_Asset_Edit_Tahap_2/KRB_Preview_Edit_Tahap_2.jpg` | Lembar preview hasil edit (bukan aset website) |
| `public/img/KRB_Decorative_Assets_V2/png-original/*.png` (10 file) | Master PNG. Versi WebP identik secara visual, transparan, dan jauh lebih ringan. |
| `public/img/KRB_Decorative_Assets_V2/tape-pieces/*.png` (4 file) | Master PNG dari tape satuan; versi WebP sudah dipakai |
| `public/img/KRB_Decorative_Assets_V2/README.txt` | Dokumentasi paket |
| `public/img/KRB_Decorative_Assets_V2/css/krb-scrapbook.css` | Contoh CSS (path relatif ke folder lama). Konsepnya diadaptasi ke `resources/css/app.css` |
| `public/img/KRB_Decorative_Icons_Custom/README.txt` | Dokumentasi paket |
| `public/img/KRB_Decorative_Icons_Custom/krb-colors.css` | Palet lama (`#6D28D9`, `#FACC15`, dst.), tidak sesuai design system final. Token resmi ada di `resources/css/app.css` |

### 7.3 Belum diklasifikasikan

| File | Temuan |
|---|---|
| `public/img/New folder/ChatGPT Image Nov 8, 2026, 02_15_39 PM-1.png` … `-10.png` (10 file) | Nama otomatis. **Hash MD5 identik byte-per-byte** dengan 10 file di `KRB_Decorative_Assets_V2/png-original/` (torn-paper-banner, torn-paper-label, brush-purple, brush-yellow, tape-purple-set, halftone, checker, polaroid portrait, polaroid landscape, paper-texture). Tidak dipakai. Kandidat untuk dihapus saat pembersihan, menunggu keputusan pemilik project. |

---

## 8. Aturan untuk tahap berikutnya

1. Ambil URL aset hanya dari `krbAssets`; jangan menulis `/assets/krb/...` atau `/img/...` langsung di komponen.
2. Sertakan `width`/`height` dari `krbAssetSizes` pada `<img>` untuk mencegah layout shift.
3. Aset dekoratif: `alt=""` dan `aria-hidden="true"`. Foto: `alt` deskriptif dalam bahasa Indonesia santai.
4. Foto di bawah lipatan layar: `loading="lazy" decoding="async"`. Foto Hero utama: `fetchpriority="high"`, tanpa lazy.
5. Jika menambah aset baru: salin ke `public/assets/krb/<kategori>/` dengan nama kebab-case, tambahkan entri di `krbAssets.js` (dan `krbAssetSizes` untuk raster), lalu perbarui dokumen ini.
