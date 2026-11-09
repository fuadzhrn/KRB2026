import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import Scribble from '@/components/scrapbook/Scribble';
import TornPaper from '@/components/scrapbook/TornPaper';
import { rosterAssets, rosterCopy } from '@/data/membersRoster';

const PAPER_TEAR = [10, 0.8, 12, 0.8];

/** Torn-paper intro bar: "The EL Roster" + short description. */
export default function MemberRosterHeader() {
    const { title, description } = rosterCopy;

    return (
        <header className="roster-header" data-reveal>
            <TornPaper tear={PAPER_TEAR} seed={719} className="roster-header__paper" />

            <div className="roster-header__inner">
                <h2 id="members-roster-title" className="roster-header__title">
                    {title.before}{' '}
                    <span className="roster-header__highlight">
                        <DecorativeElement src={rosterAssets.crown} className="roster-header__crown" />
                        {title.highlight}
                        <Scribble tone="yellow" className="roster-header__underline" />
                    </span>{' '}
                    {title.after}
                </h2>

                <span className="roster-header__divider" aria-hidden="true" />

                <p className="roster-header__text">
                    {description[0]} {description[1]}
                </p>

                <span className="roster-header__strokes" aria-hidden="true" />
            </div>
        </header>
    );
}
