import { useRef } from 'react';
import MembersHeroCollage from '@/components/members/MembersHeroCollage';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import TornPaper from '@/components/scrapbook/TornPaper';
import { membersHeroCopy, membersHeroDecor } from '@/data/membersHero';
import { useMembersHeroEntrance } from '@/hooks/useMembersHeroEntrance';

const PAPER_TEAR = [55, 0, 0, 0];

/**
 * Members hero — "THE EL ROSTER." with a six-member sticker collage.
 * Same stage technique as the Home hero: elements are placed in % of a
 * fixed-ratio stage and type uses container units (members-hero.css).
 */
export default function MembersHero() {
    const heroRef = useRef(null);

    useMembersHeroEntrance(heroRef);

    return (
        <section ref={heroRef} className="members-hero" aria-labelledby="members-hero-title">
            <div className="members-hero__inner">
                <div className="members-hero__stage">
                    <DecorativeElement src={membersHeroDecor.halftone} className="mh-el mh-halftone mh-halftone--left" />

                    <MembersHeroCollage />

                    {/* THE EL */}
                    <DecorativeElement src={membersHeroDecor.brushPurple} className="mh-el krb-decor--stretch mh-kicker-brush" />
                    <DecorativeElement src={membersHeroDecor.crown} className="mh-el mh-crown" />

                    <h1 id="members-hero-title" className="mh-heading">
                        <span className="mh-el mh-kicker">{membersHeroCopy.kicker}</span>{' '}
                        <span className="mh-el mh-title">
                            {membersHeroCopy.title}
                            <span className="mh-title__dot" aria-hidden="true" />
                        </span>
                    </h1>

                    {/* Tagline */}
                    <DecorativeElement src={membersHeroDecor.brushYellow} className="mh-el krb-decor--stretch mh-tagline-brush" />
                    <p className="mh-el mh-tagline">
                        <span className="mh-tagline__line">{membersHeroCopy.tagline[0]}</span>{' '}
                        <span className="mh-tagline__line mh-tagline__line--indent">{membersHeroCopy.tagline[1]}</span>
                    </p>
                    <DecorativeElement src={membersHeroDecor.arrow} className="mh-el mh-arrow" />
                </div>
            </div>

            <TornPaper tear={PAPER_TEAR} seed={613} className="members-hero__paper" />
        </section>
    );
}
