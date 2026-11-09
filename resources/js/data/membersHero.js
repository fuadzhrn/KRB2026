import { krbAssets } from '@/data/krbAssets';
import { heroMembers } from '@/data/members';

/**
 * Members Hero content + collage layout. Kept apart from the components so
 * copy, order and positions can later come from a CMS.
 */
export const membersHeroCopy = {
    kicker: 'THE EL',
    title: 'ROSTER',
    tagline: ['Karakter beda-beda,', 'tetap satu KRB.'],
};

/**
 * Collage slots. `layer`: back row sits behind the front row.
 * `slot` maps to a positioning class in members-hero.css.
 * Order here is visual only — KRB has no leader.
 */
const COLLAGE_SLOTS = {
    'el-pribumi': { layer: 'back', slot: 'back-left' },
    'el-tuna': { layer: 'back', slot: 'back-center' },
    'el-copad': { layer: 'back', slot: 'back-right' },
    'el-turu': { layer: 'front', slot: 'front-left' },
    'el-kritis': { layer: 'front', slot: 'front-center' },
    'el-javo': { layer: 'front', slot: 'front-right' },
};

export const membersHeroCollage = heroMembers
    .filter((member) => COLLAGE_SLOTS[member.id])
    .map((member) => ({
        id: member.id,
        elName: member.elName,
        image: member.heroSticker,
        ...COLLAGE_SLOTS[member.id],
    }));

/** Decorative assets used by the Members hero (from the central manifest). */
export const membersHeroDecor = {
    brushPurple: krbAssets.decorative.brushes.purple,
    brushYellow: krbAssets.decorative.brushes.yellow,
    crown: krbAssets.icons.crown,
    arrow: krbAssets.icons.doodleArrow,
    accentLines: krbAssets.icons.accentLines,
    halftone: krbAssets.decorative.patterns.halftone,
    checker: krbAssets.decorative.patterns.checkerTorn,
};
