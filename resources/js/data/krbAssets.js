/**
 * KRB centralized asset manifest.
 *
 * Single source of truth for every frontend asset URL. Files live in
 * public/assets/krb and are served by Laravel from the web root.
 * Full documentation: docs/KRB_ASSET_MANIFEST.md
 *
 * Usage:
 *   import { krbAssets, krbAssetSizes } from '@/data/krbAssets';
 *   <img src={krbAssets.photos.hero.sma} width={krbAssetSizes.photos.sma.width} ... />
 *
 * Only add entries for files that actually exist in public/assets/krb.
 */
const BASE = '/assets/krb';

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

        /** No member (EL) photos available yet. */
        members: {},
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
};
