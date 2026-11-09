import { krbAssets, krbAssetSizes } from '@/data/krbAssets';

/**
 * Home Hero content. Temporary frontend data — shaped so it can later be
 * replaced by CMS data without touching the components.
 */
export const heroCopy = {
    badge: 'EST. SMA',
    title: 'KRB',
    status: 'STILL GOING.',
    tagline: ['Dari SMA,', 'lanjut terus.'],
    note: ['Cerita masih', 'berjalan.'],
    description: 'Kumpulan momen, perjalanan, kegiatan random, dan cerita dari KRB yang akan terus bertambah.',
};

/**
 * Collage photos (edited grayscale versions).
 *
 * - `focus`: CSS object-position, chosen so faces stay inside the crop.
 * - `shape.vertices`: clockwise outline of the pasted paper, in % of its box.
 * - `shape.paperTear`: tear depth (%) per edge, starting from the first vertex.
 */
export const heroPhotos = [
    {
        id: 'air-terjun',
        position: 'hero-photo--air-terjun',
        photo: {
            src: krbAssets.photos.hero.airTerjun,
            size: krbAssetSizes.photos.airTerjun,
            alt: 'Anak-anak KRB foto bareng di bebatuan depan air terjun',
            focus: '50% 46%',
        },
        shape: {
            vertices: [
                [0.4, 10.4],
                [99.6, 0.4],
                [87.2, 99.4],
                [2.4, 99.6],
            ],
            paperTear: [0.4, 0.5, 2.6, 0.5],
            seed: 11,
        },
    },
    {
        id: 'sma',
        position: 'hero-photo--sma',
        priority: true,
        photo: {
            src: krbAssets.photos.hero.sma,
            size: krbAssetSizes.photos.sma,
            alt: 'Foto grup KRB waktu SMA, rame-rame pose di lapangan sekolah',
            focus: '50% 56%',
        },
        shape: {
            vertices: [
                [6.4, 1.2],
                [57, 14.6],
                [99.4, 12.8],
                [95.4, 99.6],
                [0.4, 98],
            ],
            paperTear: [3.4, 3, 0.4, 1.2, 0.4],
            seed: 23,
        },
    },
    {
        id: 'road-trip',
        position: 'hero-photo--road-trip',
        photo: {
            src: krbAssets.photos.hero.roadTrip,
            size: krbAssetSizes.photos.roadTrip,
            alt: 'Selfie rame-rame anak KRB pas road trip di jalan pegunungan',
            focus: '50% 58%',
        },
        shape: {
            vertices: [
                [8.2, 16.4],
                [97.8, 0.6],
                [99.6, 77.6],
                [0.6, 99.4],
            ],
            paperTear: [0.4, 0.5, 3.2, 0.5],
            seed: 37,
        },
    },
    {
        id: 'makan-bareng',
        position: 'hero-photo--makan-bareng',
        photo: {
            src: krbAssets.photos.hero.makanBareng,
            size: krbAssetSizes.photos.makanBareng,
            alt: 'Anak-anak KRB makan bareng, duduk melingkar di depan makanan',
            focus: '50% 48%',
        },
        shape: {
            vertices: [
                [12, 6.6],
                [99.2, 0.6],
                [96.6, 92],
                [0.6, 99.4],
            ],
            paperTear: [0.5, 1.4, 2.8, 0.5],
            seed: 53,
        },
    },
];

/** Decorative assets used by the hero, resolved from the central manifest. */
export const heroDecor = {
    crown: krbAssets.icons.crown,
    accentLines: krbAssets.icons.accentLines,
    arrow: krbAssets.icons.doodleArrow,
    scribble: krbAssets.icons.underlineScribble,
    brushPurple: krbAssets.decorative.brushes.purple,
    brushYellow: krbAssets.decorative.brushes.yellow,
    tape: krbAssets.decorative.tapes.straight,
    tapeAngled: krbAssets.decorative.tapes.angled,
    halftone: krbAssets.decorative.patterns.halftone,
    checker: krbAssets.decorative.patterns.checkerTorn,
    tornLabel: krbAssets.decorative.paper.tornLabel,
};
