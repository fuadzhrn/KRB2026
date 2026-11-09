import { krbAssets } from '@/data/krbAssets';

/**
 * Hand-drawn underline taken from underline-scribble.svg.
 * The SVG has a purple and a yellow stroke; `tone` picks which one is
 * shown (white = purple stroke recoloured).
 */
export default function Scribble({ tone = 'purple', className = '' }) {
    return (
        <span className={`krb-scribble krb-scribble--${tone} ${className}`} aria-hidden="true">
            <img src={krbAssets.icons.underlineScribble} alt="" decoding="async" draggable="false" />
        </span>
    );
}
