/**
 * Simple brand glyphs (lucide-react no longer ships brand icons).
 * Drawn in currentColor; YouTube's play triangle uses --social-cutout.
 */
export default function SocialIcon({ name }) {
    if (name === 'instagram') {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
            </svg>
        );
    }

    if (name === 'youtube') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor" />
                <path d="M10 8.8v6.4l5.4-3.2z" fill="var(--social-cutout, #4c1aa8)" />
            </svg>
        );
    }

    if (name === 'tiktok') {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M15.6 2.5c.35 2.55 1.95 4.15 4.4 4.45v3.15a7.6 7.6 0 0 1-4.35-1.4v6.6a5.85 5.85 0 1 1-5.85-5.85c.3 0 .6.02.9.07v3.2a2.7 2.7 0 1 0 1.85 2.58V2.5z"
                />
            </svg>
        );
    }

    return null;
}
