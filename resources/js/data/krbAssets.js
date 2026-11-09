/**
 * KRB centralized asset manifest.
 *
 * Single source of truth for every frontend asset URL. Files live in
 * public/assets/krb (general site assets) and, for the Members page, in the
 * original pack folder public/img/KRB_Members_Asset_Pack_V1/members (kept in
 * place on purpose, see docs). All are served by Laravel from the web root.
 * Full documentation: docs/KRB_ASSET_MANIFEST.md
 *
 * Usage:
 *   import { krbAssets, krbAssetSizes } from '@/data/krbAssets';
 *   <img src={krbAssets.photos.hero.sma} width={krbAssetSizes.photos.sma.width} ... />
 *
 * Only add entries for files that actually exist in public/assets/krb.
 */
const BASE = '/assets/krb';
const MEMBERS = '/img/KRB_Members_Asset_Pack_V1/members';

export const krbAssets = {
    photos: {
        /** Edited grayscale versions (faces/people unchanged) — for Home Hero. */
        hero: {
            sma: `${BASE}/photos/hero/sma-grayscale.jpg`,
            roadTrip: `${BASE}/photos/hero/road-trip-grayscale.jpg`,
            airTerjun: `${BASE}/photos/hero/air-terjun-grayscale.jpg`,
            makanBareng: `${BASE}/photos/hero/makan-bareng-grayscale.jpg`,
            schoolDays: `${BASE}/photos/hero/school-days-grayscale.jpg`,
        },

        /** Color-corrected natural versions — for Momen Favorit, Archive, etc. */
        moments: {
            sma: `${BASE}/photos/moments/sma-natural.jpg`,
            roadTrip: `${BASE}/photos/moments/road-trip-natural.jpg`,
            airTerjun: `${BASE}/photos/moments/air-terjun-natural.jpg`,
            makanBareng: `${BASE}/photos/moments/makan-bareng-natural.jpg`,
            schoolDays: `${BASE}/photos/moments/school-days-natural.jpg`,
        },
    },

    decorative: {
        paper: {
            tornBanner: `${BASE}/decorative/paper/torn-paper-banner.webp`,
            tornLabel: `${BASE}/decorative/paper/torn-paper-label.webp`,
        },

        brushes: {
            purple: `${BASE}/decorative/brushes/brush-purple.webp`,
            yellow: `${BASE}/decorative/brushes/brush-yellow.webp`,
            purpleFlat: `${BASE}/decorative/brushes/brush-purple-flat.svg`,
            yellowFlat: `${BASE}/decorative/brushes/brush-yellow-flat.svg`,
        },

        tapes: {
            set: `${BASE}/decorative/tapes/purple-tape-set.webp`,
            angled: `${BASE}/decorative/tapes/purple-tape-angled.webp`,
            longFolded: `${BASE}/decorative/tapes/purple-tape-long-folded.webp`,
            short: `${BASE}/decorative/tapes/purple-tape-short.webp`,
            straight: `${BASE}/decorative/tapes/purple-tape-straight.webp`,
            flat: `${BASE}/decorative/tapes/purple-tape-flat.svg`,
        },

        patterns: {
            halftone: `${BASE}/decorative/patterns/halftone-purple.webp`,
            halftoneDots: `${BASE}/decorative/patterns/halftone-dots.svg`,
            checkerTorn: `${BASE}/decorative/patterns/checker-purple-torn.webp`,
            checkerboard: `${BASE}/decorative/patterns/checkerboard.svg`,
        },

        frames: {
            polaroidPortrait: `${BASE}/decorative/frames/polaroid-portrait.webp`,
            polaroidLandscape: `${BASE}/decorative/frames/polaroid-landscape.webp`,
        },
    },

    icons: {
        crown: `${BASE}/icons/crown.svg`,
        doodleArrow: `${BASE}/icons/doodle-arrow.svg`,
        underlineScribble: `${BASE}/icons/underline-scribble.svg`,
        sparkleBurst: `${BASE}/icons/sparkle-burst.svg`,
        accentLines: `${BASE}/icons/accent-lines.svg`,
    },

    textures: {
        paperCream: `${BASE}/textures/paper-cream.webp`,
    },

    /** No video thumbnails available yet. */
    videoThumbnails: {},

    /**
     * Members page (asset pack V1). Keyed by member id (see data/members.js).
     * Cutouts are automated DRAFT masks: review before final publishing.
     */
    members: {
        radialBurst: `${MEMBERS}/backgrounds/el-retro-radial-burst.svg`,

        /** Original posters, archive only — never use them in place of cutouts. */
        posters: {
            'el-bata': `${MEMBERS}/posters-original/el-bata.jpg`,
            'el-botak': `${MEMBERS}/posters-original/el-botak.png`,
            'el-copad': `${MEMBERS}/posters-original/el-copad.png`,
            'el-gandila': `${MEMBERS}/posters-original/el-gandila.png`,
            'el-javo': `${MEMBERS}/posters-original/el-javo.jpg`,
            'el-kidal': `${MEMBERS}/posters-original/el-kidal.png`,
            'el-kritis': `${MEMBERS}/posters-original/el-kritis.jpg`,
            'el-micin': `${MEMBERS}/posters-original/el-micin.jpg`,
            'el-pop': `${MEMBERS}/posters-original/el-pop.png`,
            'el-pribumi': `${MEMBERS}/posters-original/el-pribumi.png`,
            'el-sirna': `${MEMBERS}/posters-original/el-sirna.png`,
            'el-sula': `${MEMBERS}/posters-original/el-sula.jpg`,
            'el-sumo': `${MEMBERS}/posters-original/el-sumo.jpg`,
            'el-tuna': `${MEMBERS}/posters-original/el-tuna.png`,
            'el-turu': `${MEMBERS}/posters-original/el-turu.jpg`,
        },
        cutouts: {
            'el-bata': `${MEMBERS}/cutouts-draft/el-bata.png`,
            'el-botak': `${MEMBERS}/cutouts-draft/el-botak.png`,
            'el-copad': `${MEMBERS}/cutouts-draft/el-copad.png`,
            'el-gandila': `${MEMBERS}/cutouts-draft/el-gandila.png`,
            'el-javo': `${MEMBERS}/cutouts-draft/el-javo.png`,
            'el-kidal': `${MEMBERS}/cutouts-draft/el-kidal.png`,
            'el-kritis': `${MEMBERS}/cutouts-draft/el-kritis.png`,
            'el-micin': `${MEMBERS}/cutouts-draft/el-micin.png`,
            'el-pop': `${MEMBERS}/cutouts-draft/el-pop.png`,
            'el-pribumi': `${MEMBERS}/cutouts-draft/el-pribumi.png`,
            'el-sirna': `${MEMBERS}/cutouts-draft/el-sirna.png`,
            'el-sula': `${MEMBERS}/cutouts-draft/el-sula.png`,
            'el-sumo': `${MEMBERS}/cutouts-draft/el-sumo.png`,
            'el-tuna': `${MEMBERS}/cutouts-draft/el-tuna.png`,
            'el-turu': `${MEMBERS}/cutouts-draft/el-turu.png`,
        },
        heroStickers: {
            'el-copad': `${MEMBERS}/hero-stickers-white-outline/el-copad-sticker.png`,
            'el-javo': `${MEMBERS}/hero-stickers-white-outline/el-javo-sticker.png`,
            'el-kritis': `${MEMBERS}/hero-stickers-white-outline/el-kritis-sticker.png`,
            'el-pribumi': `${MEMBERS}/hero-stickers-white-outline/el-pribumi-sticker.png`,
            'el-tuna': `${MEMBERS}/hero-stickers-white-outline/el-tuna-sticker.png`,
            'el-turu': `${MEMBERS}/hero-stickers-white-outline/el-turu-sticker.png`,
        },
    },
};

/**
 * Intrinsic pixel sizes (width × height) for raster assets.
 * Use them for <img width/height> to prevent layout shift.
 * Hero (grayscale) and moments (natural) versions of a photo share the same size.
 */
export const krbAssetSizes = {
    photos: {
        sma: { width: 1365, height: 2048 },
        roadTrip: { width: 1536, height: 2048 },
        airTerjun: { width: 900, height: 1600 },
        makanBareng: { width: 828, height: 1472 },
        schoolDays: { width: 1200, height: 1600 },
    },
    decorative: {
        paper: {
            tornBanner: { width: 2172, height: 724 },
            tornLabel: { width: 1448, height: 1086 },
        },
        brushes: {
            purple: { width: 2172, height: 724 },
            yellow: { width: 2172, height: 724 },
        },
        tapes: {
            set: { width: 1448, height: 1086 },
            angled: { width: 717, height: 402 },
            longFolded: { width: 946, height: 366 },
            short: { width: 364, height: 362 },
            straight: { width: 718, height: 295 },
        },
        patterns: {
            halftone: { width: 1254, height: 1254 },
            checkerTorn: { width: 1254, height: 1254 },
        },
        frames: {
            polaroidPortrait: { width: 1086, height: 1448 },
            polaroidLandscape: { width: 1448, height: 1086 },
        },
    },
    textures: {
        paperCream: { width: 1254, height: 1254 },
    },
    members: {
        posters: {
            'el-bata': { width: 899, height: 1134 },
            'el-botak': { width: 1080, height: 1323 },
            'el-copad': { width: 1080, height: 1333 },
            'el-gandila': { width: 1080, height: 1355 },
            'el-javo': { width: 900, height: 1117 },
            'el-kidal': { width: 1080, height: 1365 },
            'el-kritis': { width: 900, height: 1131 },
            'el-micin': { width: 900, height: 1128 },
            'el-pop': { width: 1080, height: 1355 },
            'el-pribumi': { width: 1080, height: 1323 },
            'el-sirna': { width: 1080, height: 1342 },
            'el-sula': { width: 900, height: 1149 },
            'el-sumo': { width: 900, height: 1138 },
            'el-tuna': { width: 1080, height: 1364 },
            'el-turu': { width: 899, height: 1123 },
        },
        cutouts: {
            'el-bata': { width: 398, height: 677 },
            'el-botak': { width: 539, height: 808 },
            'el-copad': { width: 496, height: 771 },
            'el-gandila': { width: 530, height: 806 },
            'el-javo': { width: 423, height: 690 },
            'el-kidal': { width: 596, height: 820 },
            'el-kritis': { width: 549, height: 693 },
            'el-micin': { width: 508, height: 672 },
            'el-pop': { width: 514, height: 887 },
            'el-pribumi': { width: 487, height: 792 },
            'el-sirna': { width: 576, height: 867 },
            'el-sula': { width: 439, height: 689 },
            'el-sumo': { width: 557, height: 723 },
            'el-tuna': { width: 529, height: 816 },
            'el-turu': { width: 433, height: 685 },
        },
        heroStickers: {
            'el-copad': { width: 510, height: 785 },
            'el-javo': { width: 453, height: 720 },
            'el-kritis': { width: 563, height: 707 },
            'el-pribumi': { width: 501, height: 806 },
            'el-tuna': { width: 543, height: 830 },
            'el-turu': { width: 447, height: 699 },
        },
    },
};
