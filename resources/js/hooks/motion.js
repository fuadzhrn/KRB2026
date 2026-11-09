import { gsap } from 'gsap';

export { gsap };

export const MOTION_QUERIES = {
    reduceMotion: '(prefers-reduced-motion: reduce)',
    mobile: '(max-width: 767.98px)',
};

/** CSS variables the hero uses as entrance offsets (see home-hero.css). */
export const ENTRANCE_PROPS = 'opacity,--ex,--ey,--er,--es';

const playedIntros = new Set();

/**
 * Entrance intros play once per full page load. Inertia keeps the layout
 * mounted and remounts pages on visits, so coming back to Home shows the
 * hero immediately instead of replaying the intro.
 *
 * @param {string} name
 * @returns {boolean} true when the caller should play its intro now
 */
export function claimIntro(name) {
    if (playedIntros.has(name)) {
        return false;
    }

    playedIntros.add(name);

    return true;
}

export function prefersReducedMotion() {
    return window.matchMedia(MOTION_QUERIES.reduceMotion).matches;
}

/** Smaller travel distances on phones. */
export function motionDistance() {
    return window.matchMedia(MOTION_QUERIES.mobile).matches ? 0.6 : 1;
}
