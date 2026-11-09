import { krbAssets } from '@/data/krbAssets';

/** Small "sparkle" strokes (accent-lines.svg); yellow by default, purple via filter. */
export default function AccentMarks({ tone = 'yellow', className = '' }) {
    return (
        <span className={`krb-accent krb-accent--${tone} ${className}`} aria-hidden="true">
            <img src={krbAssets.icons.accentLines} alt="" decoding="async" draggable="false" />
        </span>
    );
}
