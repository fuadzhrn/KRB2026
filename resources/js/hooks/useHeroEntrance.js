import { useLayoutEffect } from 'react';
import { ENTRANCE_PROPS, MOTION_QUERIES, claimIntro, gsap, motionDistance, prefersReducedMotion } from '@/hooks/motion';

/** Photos are "placed" in this order, each settling from a small tilt (deg). */
const PHOTO_ORDER = ['.hero-photo--air-terjun', '.hero-photo--road-trip', '.hero-photo--sma', '.hero-photo--makan-bareng'];
const PHOTO_TILT = [-2.5, 2.5, -2, 2];

/**
 * Hero intro — "photos being pasted into a scrapbook".
 *
 * Elements keep their design transforms (rotate, skew, centring): the tween
 * only drives the offset variables --ex/--ey/--er/--es that home-hero.css
 * adds on top, plus opacity, and clears them when done. Total ≈ 1.5s.
 *
 * @param {import('react').RefObject<HTMLElement>} scopeRef
 */
export function useHeroEntrance(scopeRef) {
    useLayoutEffect(() => {
        const scope = scopeRef.current;

        if (!scope || prefersReducedMotion() || !claimIntro('hero')) {
            return undefined;
        }

        const d = motionDistance();
        const isMobile = window.matchMedia(MOTION_QUERIES.mobile).matches;

        const context = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
            const settle = (vars) => ({ opacity: 1, ...vars, clearProps: ENTRANCE_PROPS });

            // Heading
            tl.fromTo('.hero-title', { opacity: 0, '--ey': `${26 * d}px` }, settle({ '--ey': '0px', duration: 0.7 }), 0.2);

            // EST. SMA (brush, text, underline) slides in from the left
            tl.fromTo(
                ['.hero-badge-brush', '.hero-badge', '.hero-badge-scribble'],
                { opacity: 0, '--ex': `${-20 * d}px`, '--er': '-2deg' },
                settle({ '--ex': '0px', '--er': '0deg', duration: 0.6, stagger: 0.05 }),
                0.35,
            );
            tl.fromTo('.hero-crown', { opacity: 0, '--es': 0.92 }, settle({ '--es': 1, duration: 0.4, ease: 'power2.out' }), 0.55);

            // STILL GOING: brush wipes in, then the text
            tl.fromTo(
                '.hero-status-brush',
                { clipPath: 'inset(0% 100% 0% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.5, ease: 'power2.inOut', clearProps: 'clipPath' },
                0.45,
            );
            tl.fromTo('.hero-status', { opacity: 0, '--ey': `${12 * d}px` }, settle({ '--ey': '0px', duration: 0.55 }), 0.5);
            tl.fromTo('.hero-status-scribble', { opacity: 0 }, settle({ duration: 0.3 }), 0.85);

            // Handwritten tagline + its doodles
            tl.fromTo('.hero-tagline', { opacity: 0, '--ey': `${15 * d}px` }, settle({ '--ey': '0px', duration: 0.5 }), 0.6);
            tl.fromTo('.hero-tagline-scribble', { opacity: 0 }, settle({ duration: 0.3 }), 0.85);
            tl.fromTo('.hero-arrow', { opacity: 0, '--ex': `${-8 * d}px` }, settle({ '--ex': '0px', duration: 0.4 }), 0.85);

            // Photos placed one by one
            tl.fromTo(
                PHOTO_ORDER,
                {
                    opacity: 0,
                    '--ey': `${20 * d}px`,
                    '--er': (index) => `${PHOTO_TILT[index]}deg`,
                },
                settle({ '--ey': '0px', '--er': '0deg', duration: 0.65, stagger: isMobile ? 0.1 : 0.12 }),
                0.5,
            );
            tl.fromTo('.hero-tape', { opacity: 0, '--ey': `${-6 * d}px` }, settle({ '--ey': '0px', duration: 0.35, stagger: 0.15 }), 0.95);

            // "Cerita masih berjalan." note
            tl.fromTo(
                ['.hero-note-paper', '.hero-note', '.hero-note-scribble'],
                { opacity: 0, '--ey': `${14 * d}px` },
                settle({ '--ey': '0px', duration: 0.5, stagger: 0.05 }),
                1,
            );

            // Patterns & sparkles: fade only (single group on phones)
            tl.fromTo(
                ['.hero-halftone', '.hero-checker', '.hero-stripes', '.hero-accent'],
                { opacity: 0 },
                settle({ duration: 0.5, stagger: isMobile ? 0 : 0.04, ease: 'power1.out' }),
                isMobile ? 0.6 : 0.75,
            );

            // Description under the collage
            tl.fromTo(
                '.hero-description',
                { opacity: 0, y: 8 * d },
                { opacity: 1, y: 0, duration: 0.5, clearProps: 'opacity,transform' },
                1.05,
            );
        }, scope);

        return () => context.revert();
    }, [scopeRef]);
}
