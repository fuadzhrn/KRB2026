import { useLayoutEffect } from 'react';
import { ENTRANCE_PROPS, MOTION_QUERIES, claimIntro, gsap, motionDistance, prefersReducedMotion } from '@/hooks/motion';

/** Back row first, then the front row — each member "stuck" one after another. */
const MEMBER_ORDER = [
    '.mh-member--back-left',
    '.mh-member--back-center',
    '.mh-member--back-right',
    '.mh-member--front-left',
    '.mh-member--front-center',
    '.mh-member--front-right',
];

/**
 * Members hero intro (≈ 1.4s). Like the Home hero, it only drives the
 * --ex/--ey/--er/--es offsets + opacity that members-hero.css adds on top
 * of the design transforms, and clears them when done.
 *
 * @param {import('react').RefObject<HTMLElement>} scopeRef
 */
export function useMembersHeroEntrance(scopeRef) {
    useLayoutEffect(() => {
        const scope = scopeRef.current;

        if (!scope || prefersReducedMotion() || !claimIntro('members-hero')) {
            return undefined;
        }

        const d = motionDistance();
        const isMobile = window.matchMedia(MOTION_QUERIES.mobile).matches;

        const context = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            const settle = (vars) => ({ opacity: 1, ...vars, clearProps: ENTRANCE_PROPS });

            // Big purple brush behind the collage: fade only
            tl.fromTo('.mh-collage-brush', { opacity: 0 }, settle({ duration: 0.5, ease: 'power1.out' }), 0.1);

            // THE EL slides in from the left
            tl.fromTo(
                ['.mh-kicker-brush', '.mh-kicker'],
                { opacity: 0, '--ex': `${-20 * d}px` },
                settle({ '--ex': '0px', duration: 0.5, stagger: 0.06 }),
                0.15,
            );
            tl.fromTo('.mh-crown', { opacity: 0, '--es': 0.92 }, settle({ '--es': 1, duration: 0.4, ease: 'power2.out' }), 0.4);

            // ROSTER.
            tl.fromTo('.mh-title', { opacity: 0, '--ey': `${22 * d}px` }, settle({ '--ey': '0px', duration: 0.6 }), 0.25);

            // Tagline: yellow brush wipes in, then the text
            tl.fromTo(
                '.mh-tagline-brush',
                { clipPath: 'inset(0% 100% 0% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.45, ease: 'power2.inOut', clearProps: 'clipPath' },
                0.45,
            );
            tl.fromTo('.mh-tagline', { opacity: 0, '--ey': `${12 * d}px` }, settle({ '--ey': '0px', duration: 0.5 }), 0.55);
            tl.fromTo('.mh-arrow', { opacity: 0, '--ex': `${-8 * d}px` }, settle({ '--ex': '0px', duration: 0.4 }), 0.8);

            // Members, one after another
            tl.fromTo(
                MEMBER_ORDER,
                { opacity: 0, '--ey': `${18 * d}px` },
                settle({ '--ey': '0px', duration: 0.6, stagger: isMobile ? 0.08 : 0.1 }),
                0.35,
            );

            // Patterns & sparkles: fade only
            tl.fromTo(
                ['.mh-halftone', '.mh-accent', '.mh-checker'],
                { opacity: 0 },
                settle({ duration: 0.45, stagger: isMobile ? 0 : 0.04, ease: 'power1.out' }),
                0.7,
            );
        }, scope);

        return () => context.revert();
    }, [scopeRef]);
}
