import { krbAssets } from '@/data/krbAssets';
import { membersRadialBackground, rosterMembers } from '@/data/members';

/** The EL Roster section copy. */
export const rosterCopy = {
    title: { before: 'The', highlight: 'EL', after: 'Roster' },
    description: ['Kumpulan karakter unik KRB.', 'Kenalin para “EL” di balik cerita-cerita seru kita!'],
    moreNote: ['+ Masih', 'Banyak', 'EL Lainnya!'],
};

/**
 * Editorial layout (mockup): 4 large poster cards, then 2 medium poster
 * cards + 3 compact cards + the "+ Masih Banyak EL Lainnya!" note, then
 * every remaining member as compact cards. Sizes depend on position, not
 * on who the member is — new members simply flow into the compact grid.
 */
const LAYOUT = { featured: 4, standard: 2, compactBesideNote: 3 };

export function splitRoster(list = rosterMembers) {
    const featuredEnd = LAYOUT.featured;
    const standardEnd = featuredEnd + LAYOUT.standard;
    const besideNoteEnd = standardEnd + LAYOUT.compactBesideNote;

    return {
        featured: list.slice(0, featuredEnd),
        standard: list.slice(featuredEnd, standardEnd),
        compactBesideNote: list.slice(standardEnd, besideNoteEnd),
        compactRest: list.slice(besideNoteEnd),
    };
}

/** Scrapbook extras per card position (kept sparse on purpose). */
export const cardDecorBySlot = {
    featured: [['crown'], ['accent'], [], ['tape', 'accent']],
    standard: [['tape'], ['tape']],
};

export const rosterAssets = {
    radialBurst: membersRadialBackground,
    crown: krbAssets.icons.crown,
    accentLines: krbAssets.icons.accentLines,
    tape: krbAssets.decorative.tapes.straight,
    brushYellow: krbAssets.decorative.brushes.yellow,
    scribble: krbAssets.icons.underlineScribble,
};
