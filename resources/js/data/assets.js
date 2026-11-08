/**
 * Central map of KRB public asset URLs.
 *
 * Files live under public/img and are served as-is by Laravel. When the public
 * folder gets reorganised later, update the base paths here only.
 */
const PHOTOS_1 = '/img/KRB_Asset_Edit_Tahap_1';
const PHOTOS_2 = '/img/KRB_Asset_Edit_Tahap_2';
const DECOR = '/img/KRB_Decorative_Assets_V2/webp-optimized';
const ICONS = '/img/KRB_Decorative_Icons_Custom';

export const photos = {
    sma: {
        grayscale: `${PHOTOS_1}/KRB_SMA_hero_grayscale.jpg`,
        natural: `${PHOTOS_1}/KRB_SMA_natural.jpg`,
        width: 1365,
        height: 2048,
    },
    roadTrip: {
        grayscale: `${PHOTOS_1}/KRB_RoadTrip_hero_grayscale.jpg`,
        natural: `${PHOTOS_1}/KRB_RoadTrip_natural.jpg`,
        width: 1536,
        height: 2048,
    },
    airTerjun: {
        grayscale: `${PHOTOS_2}/KRB_AirTerjun_hero_grayscale.jpg`,
        natural: `${PHOTOS_2}/KRB_AirTerjun_natural.jpg`,
        width: 900,
        height: 1600,
    },
    makanBareng: {
        grayscale: `${PHOTOS_2}/KRB_MakanBareng_hero_grayscale.jpg`,
        natural: `${PHOTOS_2}/KRB_MakanBareng_natural.jpg`,
        width: 828,
        height: 1472,
    },
    schoolDays: {
        grayscale: `${PHOTOS_2}/KRB_SchoolDays_hero_grayscale.jpg`,
        natural: `${PHOTOS_2}/KRB_SchoolDays_natural.jpg`,
        width: 1200,
        height: 1600,
    },
};

export const decorative = {
    tornPaperBanner: `${DECOR}/torn-paper-banner.webp`,
    tornPaperLabel: `${DECOR}/torn-paper-label.webp`,
    brushPurple: `${DECOR}/brush-purple-realistic.webp`,
    brushYellow: `${DECOR}/brush-yellow-realistic.webp`,
    tapeSet: `${DECOR}/tape-purple-set.webp`,
    tapeAngled: `${DECOR}/tape-angled.webp`,
    tapeLongFolded: `${DECOR}/tape-long-folded.webp`,
    tapeShort: `${DECOR}/tape-short.webp`,
    tapeStraight: `${DECOR}/tape-straight.webp`,
    halftone: `${DECOR}/halftone-purple-realistic.webp`,
    checker: `${DECOR}/checker-purple-torn.webp`,
    polaroidPortrait: `${DECOR}/polaroid-frame-portrait.webp`,
    polaroidLandscape: `${DECOR}/polaroid-frame-landscape.webp`,
    paperTexture: `${DECOR}/paper-texture-cream.webp`,
};

export const icons = {
    crown: `${ICONS}/crown.svg`,
    doodleArrow: `${ICONS}/doodle-arrow.svg`,
    underlineScribble: `${ICONS}/underline-scribble.svg`,
    sparkleBurst: `${ICONS}/sparkle-burst.svg`,
    accentLines: `${ICONS}/accent-lines.svg`,
    halftoneDots: `${ICONS}/halftone-dots.svg`,
    checkerboard: `${ICONS}/checkerboard.svg`,
    tapePurple: `${ICONS}/tape-purple.svg`,
    brushPurple: `${ICONS}/brush-purple.svg`,
    brushYellow: `${ICONS}/brush-yellow.svg`,
};
