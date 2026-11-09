import { ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AccentMarks from '@/components/scrapbook/AccentMarks';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import Scribble from '@/components/scrapbook/Scribble';
import TornPaper from '@/components/scrapbook/TornPaper';
import { krbAssets } from '@/data/krbAssets';
import { crewIntro, crewMembers } from '@/data/homeSections';

const PAPER_TEAR = [3, 0, 0, 0];

export default function HomeCrew() {
    const listRef = useRef(null);
    const [canScrollMore, setCanScrollMore] = useState(false);

    useEffect(() => {
        const list = listRef.current;

        if (!list) {
            return undefined;
        }

        const update = () => setCanScrollMore(list.scrollLeft + list.clientWidth < list.scrollWidth - 4);

        update();
        list.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);

        return () => {
            list.removeEventListener('scroll', update);
            window.removeEventListener('resize', update);
        };
    }, []);

    const scrollToNext = () => {
        const list = listRef.current;
        const card = list?.firstElementChild;

        if (!list || !card) {
            return;
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        list.scrollBy({ left: card.getBoundingClientRect().width * 2, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    return (
        <section id="the-crew" className="krb-section krb-crew" aria-labelledby="krb-crew-title">
            <TornPaper tear={PAPER_TEAR} seed={131} className="krb-crew__paper" />

            <div className="krb-section__inner krb-crew__inner">
                <div className="krb-crew__intro">
                    <p className="krb-crew__tag">
                        <DecorativeElement src={krbAssets.decorative.tapes.straight} className="krb-decor--stretch krb-crew__tag-tape" />
                        <span className="krb-crew__tag-text">The Crew</span>
                    </p>
                    <h2 id="krb-crew-title" className="krb-display-heading krb-crew__title">
                        <span>Para “El”</span> <span>di Balik Cerita.</span>
                    </h2>
                    <p className="krb-crew__text">{crewIntro}</p>
                    <Scribble tone="yellow" className="krb-crew__scribble" />
                </div>

                <ul ref={listRef} className="krb-crew__list">
                    {crewMembers.map((member) => (
                        <li key={member.id} className="krb-member">
                            <div className="krb-member__photo">
                                {member.photo ? (
                                    <img
                                        src={member.photo.src}
                                        alt={`Foto ${member.nickname}`}
                                        width={member.photo.size.width}
                                        height={member.photo.size.height}
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : (
                                    <span className="krb-member__placeholder">
                                        <svg viewBox="0 0 100 110" aria-hidden="true">
                                            <circle cx="50" cy="40" r="21" />
                                            <path d="M10 110c3-27 19-42 40-42s37 15 40 42z" />
                                        </svg>
                                        <span>Foto segera</span>
                                    </span>
                                )}
                            </div>
                            <p className="krb-member__name">{member.nickname}</p>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    className="krb-crew__next"
                    onClick={scrollToNext}
                    disabled={!canScrollMore}
                    aria-label="Lihat anggota berikutnya"
                >
                    <ArrowRight aria-hidden="true" strokeWidth={2.6} />
                </button>

                <DecorativeElement src={krbAssets.icons.crown} className="krb-crew__crown" />
                <AccentMarks className="krb-crew__accent" />
            </div>
        </section>
    );
}
