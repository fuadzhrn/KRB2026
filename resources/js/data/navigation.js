/**
 * Main navigation (navbar).
 *
 * `route` is the Laravel route name behind each page. While a page isn't
 * built yet (route missing from the shared `availableRoutes`), the item
 * points to its matching section on Home via `fallbackHref`.
 */
export const mainNavigation = [
    { id: 'home', label: 'Home', href: '/', route: 'home' },
    { id: 'archive', label: 'Archive', href: '/archive', route: 'archive', fallbackHref: '/#video-archive' },
    { id: 'members', label: 'Members', href: '/members', route: 'members', fallbackHref: '/#the-crew' },
    { id: 'about', label: 'About', href: '/about', route: 'about', fallbackHref: '/#tentang-krb' },
];

export const primaryCallToAction = {
    label: 'Jelajahi KRB',
    href: '/#momen-favorit',
};

/**
 * Social accounts. `url: null` = not provided yet → the icon is hidden
 * until a real URL is filled in here.
 */
export const socialLinks = [
    { id: 'instagram', label: 'Instagram', url: null },
    { id: 'youtube', label: 'YouTube', url: null },
    { id: 'tiktok', label: 'TikTok', url: null },
];

/* ---------- Footer ---------- */

export const krbIdentity = {
    established: 'EST. 2020',
    origin: 'SMAGA, MAKASSAR',
    description: 'Tempat nyimpan foto, video, dan cerita random anak-anak KRB.',
};

/**
 * Footer link groups. `route` is the Laravel route name the link depends
 * on: the link only becomes clickable once that route exists (shared from
 * the server as `availableRoutes`). Until then it shows as "segera".
 */
export const footerLinkGroups = [
    {
        id: 'jelajahi',
        heading: 'Jelajahi',
        links: [
            { id: 'home', label: 'Home', href: '/', route: 'home' },
            { id: 'archive', label: 'Archive', href: '/archive', route: 'archive' },
            { id: 'members', label: 'Members', href: '/members', route: 'members' },
            { id: 'about', label: 'About', href: '/about', route: 'about' },
        ],
    },
    {
        id: 'langsung-ke',
        heading: 'Langsung ke',
        links: [
            { id: 'momen-favorit', label: 'Momen Favorit', href: '/#momen-favorit', route: 'home' },
            { id: 'video-archive', label: 'Video Archive', href: '/#video-archive', route: 'home' },
            // Target: The EL Roster section (#para-el) on the Members page.
            { id: 'para-el', label: 'Para EL', href: '/members#para-el', route: 'members' },
        ],
    },
];

export const siteCredit = {
    owner: 'KRB',
    developer: 'Fuad',
};
