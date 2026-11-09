import { useLayoutEffect } from 'react';
import { claimIntro, gsap, motionDistance, prefersReducedMotion } from '@/hooks/motion';

/**
 * Navbar intro: the bar drops in softly, then logo, links and actions.
 * Only opacity/transform; the navbar stays usable while it runs.
 *
 * @param {import('react').RefObject<HTMLElement>} headerRef
 */
export function useNavbarEntrance(headerRef) {
    useLayoutEffect(() => {
        const header = headerRef.current;

        if (!header || prefersReducedMotion() || !claimIntro('navbar')) {
            return undefined;
        }

        const distance = motionDistance();

        const context = gsap.context(() => {
            const clear = { clearProps: 'opacity,transform' };

            gsap.timeline({ defaults: { ease: 'power2.out' } })
                .fromTo(header, { opacity: 0, y: -14 * distance }, { opacity: 1, y: 0, duration: 0.5, ...clear }, 0)
                .fromTo('.krb-navbar__logo', { opacity: 0, y: -8 * distance }, { opacity: 1, y: 0, duration: 0.4, ...clear }, 0.1)
                .fromTo(
                    '.krb-navbar__links > li',
                    { opacity: 0, y: -6 * distance },
                    { opacity: 1, y: 0, duration: 0.35, stagger: 0.05, ...clear },
                    0.15,
                )
                .fromTo('.krb-navbar__actions', { opacity: 0, y: -6 * distance }, { opacity: 1, y: 0, duration: 0.35, ...clear }, 0.25);
        }, header);

        return () => context.revert();
    }, [headerRef]);
}
