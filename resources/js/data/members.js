import { krbAssets, krbAssetSizes } from '@/data/krbAssets';

/**
 * KRB members (Members page data).
 *
 * Profiles only — image URLs come from the central manifest
 * (krbAssets.members), keyed by the same `id`. To add a member: append a
 * profile below and register their files in krbAssets.js under the same id.
 *
 * Source: KRB_Members_Asset_Pack_V1 (members-manifest.json). Names were
 * transcribed by hand from the posters → verify spelling before launch.
 * funFacts / description are intentionally empty: no real data yet.
 */
const MEMBER_PROFILES = [
    { id: 'el-kritis', elName: 'El Kritis', nickname: 'Keriting Manis', fullName: 'Gilang Setiawan A.' },
    { id: 'el-turu', elName: 'El Turu', nickname: 'Tuan Rumah', fullName: 'Muh. Very Astra' },
    { id: 'el-javo', elName: 'El Javo', nickname: 'Jago Valo', fullName: 'Arief Muhammad Usry' },
    { id: 'el-bata', elName: 'El Bata', nickname: 'Bandar Tobat', fullName: 'Aditya Prasetya W. Msi' },
    { id: 'el-micin', elName: 'El Micin', nickname: 'Mirip China', fullName: 'Muh. Andrego R. M.' },
    { id: 'el-sumo', elName: 'El Sumo', nickname: 'Suka Moshing', fullName: 'Muh. Fikri Farizi' },
    { id: 'el-sula', elName: 'El Sula', nickname: 'Suka Lari', fullName: 'Aan Syawaluddin' },
    { id: 'el-kidal', elName: 'El Kidal', nickname: 'Koki Handal', fullName: 'Muh. Yusran Malik' },
    { id: 'el-botak', elName: 'El Botak', nickname: 'Bocah Tampan Keren', fullName: 'Moh. Yazid Reza P.' },
    { id: 'el-gandila', elName: 'El Gandila', nickname: 'Ganteng Dari Lahir', fullName: 'Muh. Naufal Athallah' },
    { id: 'el-pop', elName: 'El Pop', nickname: 'Prince Of Pilar', fullName: 'Alim Budiman' },
    { id: 'el-tuna', elName: 'El Tuna', nickname: 'Tukang Berkelana', fullName: 'Muh. Farhan Abdullah' },
    { id: 'el-copad', elName: 'El Copad', nickname: 'Cowok Wattpad', fullName: 'Muh. Rifqi Rozan R.' },
    { id: 'el-sirna', elName: 'El Sirna', nickname: 'Suara Irama Sempurna', fullName: 'Muh. Fuad Zahran' },
    { id: 'el-pribumi', elName: 'El Pribumi', nickname: 'Pria Idaman Ibumu', fullName: 'Muh. Ichlasul Amal K.' },
];

const { members: memberAssets } = krbAssets;
const { members: memberSizes } = krbAssetSizes;

/** { src, width, height } for a member image, or null when the file doesn't exist. */
function memberImage(group, id) {
    const src = memberAssets[group]?.[id];

    return src ? { src, ...memberSizes[group][id] } : null;
}

export const members = MEMBER_PROFILES.map((profile) => ({
    funFacts: [],
    description: '',
    ...profile,
    photos: {
        /** Archive only — never a substitute for the cutouts. */
        poster: memberImage('posters', profile.id),
        /** Transparent draft cutout (Spotlight, roster). */
        cutout: memberImage('cutouts', profile.id),
        /** White-outline sticker (Hero), only for some members. */
        heroSticker: memberImage('heroStickers', profile.id),
    },
    /** Cutouts are automated draft masks until reviewed. */
    needsPhotoReview: true,
}));

export function getMemberById(id) {
    return members.find((member) => member.id === id) ?? null;
}

/** Hero composition order (visual only — not a ranking; KRB has no leader). */
export const heroMemberIds = ['el-pribumi', 'el-tuna', 'el-copad', 'el-turu', 'el-kritis', 'el-javo'];

export const heroMembers = heroMemberIds.map(getMemberById).filter((member) => member?.photos.heroSticker);

/** The EL Roster: every member. */
export const rosterMembers = members;

/** EL Spotlight slider: everyone with a cutout gets a turn. */
export const spotlightMembers = members.filter((member) => member.photos.cutout);

/** Retro radial burst behind member cards (SVG, scalable). */
export const membersRadialBackground = memberAssets.radialBurst;

/**
 * "Same Crew, Different Moments": reuses the group photos already used on
 * Home (natural colour versions) — no new copies.
 */
export const crewMomentPhotos = [
    { id: 'sma', src: krbAssets.photos.moments.sma, size: krbAssetSizes.photos.sma },
    { id: 'road-trip', src: krbAssets.photos.moments.roadTrip, size: krbAssetSizes.photos.roadTrip },
    { id: 'air-terjun', src: krbAssets.photos.moments.airTerjun, size: krbAssetSizes.photos.airTerjun },
    { id: 'makan-bareng', src: krbAssets.photos.moments.makanBareng, size: krbAssetSizes.photos.makanBareng },
    { id: 'school-days', src: krbAssets.photos.moments.schoolDays, size: krbAssetSizes.photos.schoolDays },
];
