import { krbAssets, krbAssetSizes } from '@/data/krbAssets';

/**
 * Content for the Home sections below the hero.
 * Temporary frontend data, shaped to be swapped for CMS data later.
 *
 * ⚠ Values copied from the final mockup that still need confirmation
 *   are marked with `// KONFIRMASI`.
 */

const { hero, moments } = krbAssets.photos;
const sizes = krbAssetSizes.photos;

/* ---------- KRB in Numbers ---------- */

export const krbNumbers = [
    { id: 'anggota', value: '15', label: 'Anggota' }, // KONFIRMASI: master brief says "lebih dari 15"
    { id: 'momen', value: '100+', label: 'Momen' }, // KONFIRMASI
    { id: 'trip', value: '5+', label: 'Trip' }, // KONFIRMASI
    { id: 'cerita', value: '∞', label: 'Cerita', srValue: 'Tak terhingga' },
];

/* ---------- Momen Favorit ---------- */

export const favoriteMomentsIntro =
    'Beberapa momen pilihan dari perjalanan KRB, dari trip, hangout, sampai kegiatan random yang selalu seru.';

export const favoriteMoments = [
    {
        id: 'trip-air-terjun',
        title: 'Trip Air Terjun',
        location: 'Curug, Jawa Barat', // KONFIRMASI
        photo: { src: moments.airTerjun, size: sizes.airTerjun, focus: '50% 48%', alt: 'Anak-anak KRB foto bareng di depan air terjun' },
        tape: true,
    },
    {
        id: 'road-trip',
        title: 'Road Trip',
        location: 'Puncak, Bogor', // KONFIRMASI
        photo: { src: moments.roadTrip, size: sizes.roadTrip, focus: '50% 62%', alt: 'Selfie rame-rame anak KRB di pinggir jalan saat road trip' },
    },
    {
        id: 'makan-bareng',
        title: 'Makan Bareng',
        location: 'Basecamp KRB', // KONFIRMASI
        photo: { src: moments.makanBareng, size: sizes.makanBareng, focus: '50% 45%', alt: 'Anak-anak KRB makan bareng, duduk melingkar' },
        tape: true,
    },
    {
        id: 'healing',
        title: 'Healing di Puncak',
        location: 'Puncak, Bogor', // KONFIRMASI — mockup uses the road trip photo here too
        photo: { src: moments.roadTrip, size: sizes.roadTrip, focus: '50% 24%', alt: 'Anak-anak KRB rame-rame di jalan hutan pinus' },
    },
];

/* ---------- Timeline ---------- */

export const timelineIntro = 'Perjalanan singkat KRB dari masa ke masa.';

export const timeline = [
    {
        id: 'sma',
        label: 'SMA',
        caption: ['Awal cerita,', 'awal kenal.'],
        photo: { src: hero.sma, size: sizes.sma, focus: '50% 22%' },
    },
    {
        id: 'trip',
        label: 'TRIP',
        caption: ['Mulai keliling,', 'nyari pengalaman.'],
        photo: { src: hero.roadTrip, size: sizes.roadTrip, focus: '50% 18%' },
    },
    {
        id: 'hangout',
        label: 'HANGOUT',
        caption: ['Makan, ngobrol,', 'random, tapi seru.'],
        photo: { src: hero.makanBareng, size: sizes.makanBareng, focus: '50% 42%' },
    },
    {
        id: 'now',
        label: 'NOW',
        caption: ['Masih bareng,', 'masih jalan terus.'],
        photo: { src: moments.airTerjun, size: sizes.airTerjun, focus: '50% 40%' },
    },
];

/* ---------- Video Archive ---------- */

export const videoArchiveIntro = 'Kumpulan video momen terbaik, reeling, dan cerita perjalanan KRB.';

/**
 * No video files exist yet. `videoUrl`, `duration` and `views` stay null
 * until real videos are uploaded; the UI shows "Segera" instead of
 * made-up numbers.
 */
export const featuredVideo = {
    id: 'featured',
    title: 'Video pilihan KRB',
    videoUrl: null,
    duration: null,
    poster: { src: moments.schoolDays, size: sizes.schoolDays, focus: '50% 72%' },
};

export const videoList = [
    {
        id: 'vlog-air-terjun',
        title: 'Vlog Trip Air Terjun',
        videoUrl: null,
        duration: null,
        views: null,
        thumbnail: { src: moments.airTerjun, size: sizes.airTerjun, focus: '50% 30%' },
    },
    {
        id: 'road-trip',
        title: 'Keseruan Road Trip',
        videoUrl: null,
        duration: null,
        views: null,
        thumbnail: { src: moments.roadTrip, size: sizes.roadTrip, focus: '50% 62%' },
    },
    {
        id: 'random-1',
        title: 'Random KRB #1',
        videoUrl: null,
        duration: null,
        views: null,
        thumbnail: { src: moments.makanBareng, size: sizes.makanBareng, focus: '50% 45%' },
    },
];

/* ---------- The Crew ---------- */

export const crewIntro = 'Bukan sekadar nama, ini identitas khas KRB.';

/** Member photos aren't available yet (`photo: null` → placeholder card). */
export const crewMembers = [
    { id: 'el-pribumi', nickname: 'El Pribumi', photo: null },
    { id: 'el-kritis', nickname: 'El Kritis', photo: null },
    { id: 'el-turu', nickname: 'El Turu', photo: null },
    { id: 'el-javo', nickname: 'El Javo', photo: null },
    { id: 'el-bata', nickname: 'El Bata', photo: null },
    { id: 'el-micin', nickname: 'El Micin', photo: null },
];
