import { useMemo } from 'react';
import { tornPolygon } from '@/components/scrapbook/tornPolygon';

const RECTANGLE = [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100],
];

/**
 * A piece of paper with torn edges (decorative background layer).
 * By default a rectangle, `tear` = depth in % for [top, right, bottom, left].
 * Pass `vertices` (clockwise, in %) for a custom outline; `tear` then holds
 * one depth per edge.
 */
export default function TornPaper({ tear = [6, 0, 6, 0], seed = 1, vertices = RECTANGLE, className = '' }) {
    const clip = useMemo(() => tornPolygon(vertices, tear, seed), [vertices, tear, seed]);

    return <span className={`krb-torn-paper ${className}`} style={{ '--torn-clip': clip }} aria-hidden="true" />;
}
