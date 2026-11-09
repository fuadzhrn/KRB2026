import { useRef } from 'react';
import MemberCard from '@/components/members/MemberCard';
import MemberRosterHeader from '@/components/members/MemberRosterHeader';
import AccentMarks from '@/components/scrapbook/AccentMarks';
import Scribble from '@/components/scrapbook/Scribble';
import TornPaper from '@/components/scrapbook/TornPaper';
import { cardDecorBySlot, rosterCopy, splitRoster } from '@/data/membersRoster';
import { useRosterReveal } from '@/hooks/useRosterReveal';

const NOTE_TEAR = [3, 3, 4, 3];

/**
 * The EL Roster — every member as a poster-style card.
 * `members` defaults to the frontend data; later it can come from Inertia
 * props (CMS) with the same shape.
 */
export default function MembersRoster({ members }) {
    const sectionRef = useRef(null);
    const { featured, standard, compactBesideNote, compactRest } = splitRoster(members);

    useRosterReveal(sectionRef);

    return (
        <section ref={sectionRef} id="para-el" className="members-roster" aria-labelledby="members-roster-title">
            <MemberRosterHeader />

            <div className="members-roster__inner">
                <ul className="roster-grid roster-grid--featured">
                    {featured.map((member, index) => (
                        <li key={member.id} className="roster-grid__item" data-reveal>
                            <MemberCard
                                member={member}
                                variant="featured"
                                emphasis={index === 0}
                                decor={cardDecorBySlot.featured[index] ?? []}
                                seed={101 + index}
                            />
                        </li>
                    ))}
                </ul>

                {standard.length + compactBesideNote.length > 0 && (
                    <ul className="roster-grid roster-grid--mixed">
                        {standard.map((member, index) => (
                            <li key={member.id} className="roster-grid__item roster-grid__item--standard" data-reveal>
                                <MemberCard
                                    member={member}
                                    variant="standard"
                                    decor={cardDecorBySlot.standard[index] ?? []}
                                    seed={201 + index}
                                />
                            </li>
                        ))}
                        {compactBesideNote.map((member, index) => (
                            <li key={member.id} className="roster-grid__item roster-grid__item--compact" data-reveal>
                                <MemberCard member={member} variant="compact" seed={301 + index} />
                            </li>
                        ))}
                        {compactRest.length > 0 && (
                            <li className="roster-grid__item roster-more" aria-hidden="true" data-reveal>
                                <TornPaper tear={NOTE_TEAR} seed={401} className="roster-more__paper" />
                                <AccentMarks className="roster-more__accent" />
                                <p className="roster-more__text">
                                    {rosterCopy.moreNote.map((line) => (
                                        <span key={line}>{line}</span>
                                    ))}
                                </p>
                                <Scribble tone="yellow" className="roster-more__scribble" />
                            </li>
                        )}
                    </ul>
                )}

                {compactRest.length > 0 && (
                    <ul className="roster-grid roster-grid--compact">
                        {compactRest.map((member, index) => (
                            <li key={member.id} className="roster-grid__item roster-grid__item--compact" data-reveal>
                                <MemberCard member={member} variant="compact" seed={501 + index} />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}
