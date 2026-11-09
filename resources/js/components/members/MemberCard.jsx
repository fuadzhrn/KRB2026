import { useMemo } from 'react';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import { tornPolygon } from '@/components/scrapbook/tornPolygon';
import { rosterAssets } from '@/data/membersRoster';

const FRAME_SHAPE = [
    [0, 0],
    [100, 0],
    [100, 100],
    [0, 100],
];

/**
 * One member, styled like the original EL posters.
 *
 * variant:
 *  - "featured" / "standard": paper frame + retro radial burst + colour cutout
 *  - "compact": grayscale cutout with a yellow sticker outline (colour on hover)
 *
 * Informational only for now: there is no member detail page yet, so the
 * card is not a link.
 */
export default function MemberCard({ member, variant = 'standard', decor = [], emphasis = false, seed = 1 }) {
    const frameClip = useMemo(() => tornPolygon(FRAME_SHAPE, [1.2, 1.4, 1.2, 1.4], seed), [seed]);
    const hasBurst = variant !== 'compact';

    return (
        <article
            className={`member-card member-card--${variant}${emphasis ? ' member-card--emphasis' : ''}`}
            aria-label={`${member.elName}, ${member.nickname}`}
        >
            <span className="member-card__paper" style={{ '--frame-clip': frameClip }} aria-hidden="true" />

            <div className="member-card__photo">
                {hasBurst && (
                    <img className="member-card__burst" src={rosterAssets.radialBurst} alt="" decoding="async" draggable="false" />
                )}

                {member.portrait ? (
                    <img
                        className="member-card__portrait"
                        src={member.portrait.src}
                        width={member.portrait.width}
                        height={member.portrait.height}
                        alt={`Foto ${member.elName}`}
                        loading="lazy"
                        decoding="async"
                        draggable="false"
                    />
                ) : (
                    <span className="member-card__placeholder">
                        <span>Foto segera</span>
                    </span>
                )}
            </div>

            <div className="member-card__info">
                {emphasis && (
                    <DecorativeElement src={rosterAssets.brushYellow} className="krb-decor--stretch member-card__name-brush" />
                )}
                <h3 className="member-card__name">{member.elName}</h3>
                <p className="member-card__nickname">({member.nickname})</p>
                <p className="member-card__realname">{member.realName}</p>
            </div>

            {decor.includes('crown') && <DecorativeElement src={rosterAssets.crown} className="member-card__crown" />}
            {decor.includes('accent') && <DecorativeElement src={rosterAssets.accentLines} className="member-card__accent" />}
            {decor.includes('tape') && (
                <DecorativeElement src={rosterAssets.tape} className="krb-decor--stretch member-card__tape" />
            )}
        </article>
    );
}
