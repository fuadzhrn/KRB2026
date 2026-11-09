import { useMemo } from 'react';
import { tornPolygon } from '@/components/scrapbook/tornPolygon';

/**
 * A photo pasted onto a scrapbook page: off-white paper with torn edges,
 * soft shadow, and the real photo clipped inside.
 *
 * The outline (`shape.vertices`) is relative to the element box, so the same
 * shape works on every breakpoint; the box itself is placed via `className`.
 */
export default function ScrapPhoto({ photo, shape, className = '', priority = false, loading = 'eager' }) {
    const { paperClip, photoClip } = useMemo(
        () => ({
            paperClip: tornPolygon(shape.vertices, shape.paperTear, shape.seed),
            photoClip: tornPolygon(
                shape.vertices,
                shape.paperTear.map((depth) => depth * 0.55),
                shape.seed + 101,
            ),
        }),
        [shape],
    );

    return (
        <figure className={`hero-photo ${className}`}>
            <div className="hero-photo__paper" style={{ '--paper-clip': paperClip }}>
                <div className="hero-photo__image" style={{ '--photo-clip': photoClip }}>
                    <img
                        src={photo.src}
                        alt={photo.alt ?? ''}
                        width={photo.size.width}
                        height={photo.size.height}
                        loading={loading}
                        decoding={priority ? 'sync' : 'async'}
                        fetchPriority={priority ? 'high' : 'auto'}
                        draggable="false"
                        style={{ '--photo-focus': photo.focus }}
                    />
                </div>
            </div>
        </figure>
    );
}
