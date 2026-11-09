import { useLayoutEffect } from 'react';
import { gsap, motionDistance, prefersReducedMotion } from '@/hooks/motion';

/**
 * Scroll reveal for [data-reveal] items inside the scope.
 *
 * - Only items still below the fold are hidden, and only by JS at mount —
 *   if JS fails nothing stays invisible; items already on screen are left
 *   untouched.
 * - Items appear in small batches as they enter the viewport
 *   (IntersectionObserver + GSAP, stagger 0.08s).
 * - Reduced motion: no reveal at all.
 *
 * @param {import('react').RefObject<HTMLElement>} scopeRef
 */
export function useRosterReveal(scopeRef) {
    useLayoutEffect(() => {
        const scope = scopeRef.current;

        if (!scope || prefersReducedMotion() || !('IntersectionObserver' in window)) {
            return undefined;
        }

        const distance = 16 * motionDistance();
        const items = [...scope.querySelectorAll('[data-reveal]')].filter(
            (item) => item.getBoundingClientRect().top > window.innerHeight * 0.92,
        );

        if (items.length === 0) {
            return undefined;
        }

        const context = gsap.context(() => {
            gsap.set(items, { opacity: 0, y: distance });
        }, scope);

        let queue = [];
        let frame = 0;

        const flush = () => {
            frame = 0;
            const batch = queue.sort((a, b) => a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1);
            queue = [];

            context.add(() => {
                gsap.to(batch, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                    stagger: 0.08,
                    clearProps: 'opacity,transform',
                });
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        observer.unobserve(entry.target);
                        queue.push(entry.target);
                    }
                });

                if (queue.length && !frame) {
                    frame = requestAnimationFrame(flush);
                }
            },
            { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
        );

        items.forEach((item) => observer.observe(item));

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
            context.revert();
        };
    }, [scopeRef]);
}
