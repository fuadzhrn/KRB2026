/**
 * Purely decorative image (brush, tape, doodle, pattern…).
 * Hidden from assistive tech; position/size/rotation come from `className`.
 */
export default function DecorativeElement({ src, className = '', width, height }) {
    return (
        <span className={`krb-decor ${className}`} aria-hidden="true">
            <img src={src} alt="" width={width} height={height} decoding="async" draggable="false" />
        </span>
    );
}
