import { Infinity as InfinityIcon } from 'lucide-react';
import AccentMarks from '@/components/scrapbook/AccentMarks';
import Scribble from '@/components/scrapbook/Scribble';
import TornPaper from '@/components/scrapbook/TornPaper';
import { krbNumbers } from '@/data/homeSections';

const PAPER_TEAR = [7, 0.6, 9, 0.6];

export default function HomeNumbers() {
    return (
        <section id="tentang-krb" className="krb-section krb-numbers" aria-labelledby="krb-numbers-title">
            <div className="krb-section__inner krb-numbers__inner">
                <TornPaper tear={PAPER_TEAR} seed={71} className="krb-numbers__paper" />

                <h2 id="krb-numbers-title" className="krb-numbers__title">
                    <span className="krb-numbers__title-big">KRB</span>
                    <span>in Numbers</span>
                    <Scribble tone="yellow" className="krb-numbers__scribble" />
                </h2>

                <ul className="krb-numbers__list">
                    {krbNumbers.map((item) => (
                        <li key={item.id} className="krb-numbers__item">
                            <span className="krb-numbers__value" aria-hidden={item.srValue ? 'true' : undefined}>
                                {item.value === '∞' ? <InfinityIcon strokeWidth={3.4} className="krb-numbers__infinity" /> : item.value}
                            </span>
                            {item.srValue && <span className="sr-only">{item.srValue}</span>}
                            <span className="krb-numbers__label">{item.label}</span>
                        </li>
                    ))}
                </ul>

                <AccentMarks tone="purple" className="krb-numbers__accent" />
            </div>
        </section>
    );
}
