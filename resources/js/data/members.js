import { krbAssets, krbAssetSizes } from '@/data/krbAssets';

/**
 * KRB members — the single source of member data for the Members page.
 *
 * Profiles only; image URLs come from the central manifest
 * (krbAssets.members), keyed by the same `id`. Shaped like the records a
 * CMS (Filament) will send later, so this array can be swapped for Inertia
 * props without touching the components.
 *
 * To add a member: append a profile (any position — `order` follows the
 * array) and register their files in krbAssets.js under the same id.
 *
 * Names verified against the original posters (posters-original/).
 * funFacts / description are intentionally empty: no real data yet.
 */
const MEMBER_PROFILES = [
    { id: 'el-pribumi', elName: 'El Pribumi', nickname: 'Pria Idaman Ibumu', realName: 'Muh. Ichlasul Amal K.' },
    { id: 'el-kritis', elName: 'El Kritis', nickname: 'Keriting Manis', realName: 'Gilang Setiawan A.' },
    { id: 'el-turu', elName: 'El Turu', nickname: 'Tuan Rumah', realName: 'Muh. Very Astra' },
    { id: 'el-javo', elName: 'El Javo', nickname: 'Jago Valo', realName: 'Arief Muhammad Usry' },
    { id: 'el-tuna', elName: 'El Tuna', nickname: 'Tukang Berkelana', realName: 'Muh. Farhan Abdullah' },
    { id: 'el-copad', elName: 'El Copad', nickname: 'Cowok Wattpad', realName: 'Muh. Rifqi Rozan R.' },
    { id: 'el-bata', elName: 'El Bata', nickname: 'Bandar Tobat', realName: 'Aditya Prasetya W. Misi' },
    { id: 'el-micin', elName: 'El Micin', nickname: 'Mirip China', realName: 'Muh. Andrego R. M.' },
    { id: 'el-sumo', elName: 'El Sumo', nickname: 'Suka Moshing', realName: 'Muh. Fikri Farizi' },
    { id: 'el-sula', elName: 'El Sula', nickname: 'Suka Lari', realName: 'Aan Syawaluddin' },
    { id: 'el-kidal', elName: 'El Kidal', nickname: 'Koki Handal', realName: 'Muh. Yusran Malik' },
    { id: 'el-botak', elName: 'El Botak', nickname: 'Bocah Tampan Keren', realName: 'Moh. Yazid Reza P.' },
    { id: 'el-gandila', elName: 'El Gandila', nickname: 'Ganteng Dari Lahir', realName: 'Muh. Naufal Athaillah' },
    { id: 'el-pop', elName: 'El Pop', nickname: 'Prince Of Pilar', realName: 'Alim Budiman' },
    { id: 'el-sirna', elName: 'El Sirna', nickname: 'Suara Irama Sempurna', realName: 'Muh. Fuad Zahran' },
];

const { members: memberAssets } = krbAssets;
const { members: memberSizes } = krbAssetSizes;

/** { src, width, height } for a member image, or null when the file doesn't exist. */
function memberImage(group, id) {
    const src = memberAssets[group]?.[id];

    return src ? { src, ...memberSizes[group][id] } : null;
}

export const members = MEMBER_PROFILES.map((profile, index) => ({
    slug: profile.id,
    order: index + 1,
    isActive: true,
    funFacts: [],
    description: '',
    ...profile,
    /** Transparent draft cutout (roster cards, Spotlight). null → placeholder. */
    portrait: memberImage('cutouts', profile.id),
    /** Original poster — archive only, never a substitute for the cutout. */
    posterOriginal: memberImage('posters', profile.id),
    /** White-outline sticker (Members hero), only for some members. */
    heroSticker: memberImage('heroStickers', profile.id),
    /** Cutouts are automated draft masks until reviewed. */
    needsPhotoReview: true,
}));

export function getMemberById(id) {
    return members.find((member) => member.id === id) ?? null;
}

/** Hero composition order (visual only — not a ranking; KRB has no leader). */
export const heroMemberIds = ['el-pribumi', 'el-tuna', 'el-copad', 'el-turu', 'el-kritis', 'el-javo'];

export const heroMembers = heroMemberIds.map(getMemberById).filter((member) => member?.heroSticker);

/** The EL Roster: every active member, in roster order. */
export const rosterMembers = members.filter((member) => member.isActive).sort((a, b) => a.order - b.order);

/** EL Spotlight slider: everyone with a portrait gets a turn. */
export const spotlightMembers = rosterMembers.filter((member) => member.portrait);

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
