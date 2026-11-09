import HeroMemberCutout from '@/components/members/HeroMemberCutout';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import { membersHeroCollage, membersHeroDecor } from '@/data/membersHero';

/** Six members stuck together over a big purple brush (right side of the hero). */
export default function MembersHeroCollage() {
    return (
        <div className="members-hero__collage" role="group" aria-label="Kolase enam anggota KRB">
            <DecorativeElement src={membersHeroDecor.brushPurple} className="mh-el krb-decor--stretch mh-collage-brush" />
            <DecorativeElement src={membersHeroDecor.halftone} className="mh-el mh-halftone mh-halftone--mid" />
            <DecorativeElement src={membersHeroDecor.halftone} className="mh-el mh-halftone mh-halftone--right" />
            <DecorativeElement src={membersHeroDecor.halftone} className="mh-el mh-halftone mh-halftone--bottom" />
            <DecorativeElement src={membersHeroDecor.accentLines} className="mh-el mh-accent mh-accent--left" />
            <DecorativeElement src={membersHeroDecor.accentLines} className="mh-el mh-accent mh-accent--right" />

            {membersHeroCollage.map((member) => (
                <HeroMemberCutout key={member.id} member={member} />
            ))}

            <DecorativeElement src={membersHeroDecor.checker} className="mh-el mh-checker" />
        </div>
    );
}
