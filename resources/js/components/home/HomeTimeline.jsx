import { useMemo } from 'react';
import AccentMarks from '@/components/scrapbook/AccentMarks';
import Scribble from '@/components/scrapbook/Scribble';
import ScrapPhoto from '@/components/scrapbook/ScrapPhoto';
import TornPaper from '@/components/scrapbook/TornPaper';
import { tornPolygon } from '@/components/scrapbook/tornPolygon';
import { timeline, timelineIntro } from '@/data/homeSections';

const BAND_TEAR = [6, 0, 6, 0];

/** Irregular cut-out outlines, one per timeline photo. */
const CUTOUT_SHAPES = [
    { vertices: [[0, 22], [24, 8], [46, 14], [72, 0], [100, 12], [98, 100], [52, 92], [2, 100]], paperTear: [3, 3, 3, 3, 2, 3, 3, 2], seed: 201 },
    { vertices: [[0, 30], [30, 12], [52, 0], [76, 10], [100, 20], [97, 100], [44, 94], [4, 100]], paperTear: [3, 3, 3, 3, 2, 3, 3, 2], seed: 211 },
    { vertices: [[2, 12], [20, 0], [50, 6], [80, 0], [100, 14], [100, 96], [50, 100], [0, 94]], paperTear: [3, 3, 3, 3, 2, 3, 3, 2], seed: 223 },
    { vertices: [[0, 16], [34, 4], [62, 12], [100, 0], [98, 92], [60, 100], [26, 94], [2, 100]], paperTear: [3, 3, 3, 2, 3, 3, 3, 2], seed: 239 },
];

const LABEL_SHAPE = [
    [0, 4],
    [100, 0],
    [98, 100],
    [2, 96],
];

export default function HomeTimeline() {
    const labelClip = useMemo(() => tornPolygon(LABEL_SHAPE, [6, 3, 6, 3], 251), []);

    return (
        <section className="krb-section krb-timeline" aria-labelledby="krb-timeline-title">
            <TornPaper tear={BAND_TEAR} seed={91} className="krb-timeline__band" />

            <div className="krb-section__inner krb-timeline__inner">
                <div className="krb-timeline__intro">
                    <h2 id="krb-timeline-title" className="krb-display-heading krb-timeline__title">
                        Timeline
                    </h2>
                    <Scribble className="krb-timeline__scribble" />
                    <p className="krb-timeline__text">{timelineIntro}</p>
                </div>

                <div className="krb-timeline__track">
                    <svg className="krb-timeline__path" viewBox="0 0 100 20" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M12 10 C 22 13, 26 6, 37 10 S 52 13, 62 8 S 78 6, 88 10" />
                    </svg>

                    <ol className="krb-timeline__list">
                        {timeline.map((item, index) => (
                            <li key={item.id} className={`krb-timeline__item krb-timeline__item--${item.id}`}>
                                <ScrapPhoto
                                    photo={item.photo}
                                    shape={CUTOUT_SHAPES[index % CUTOUT_SHAPES.length]}
                                    loading="lazy"
                                    className="krb-timeline__photo"
                                />
                                <span className="krb-timeline__label" style={{ '--label-clip': labelClip }}>
                                    {item.label}
                                </span>
                                <span className="krb-timeline__node" aria-hidden="true" />
                                <p className="krb-timeline__caption">
                                    {item.caption[0]}
                                    <br />
                                    {item.caption[1]}
                                </p>
                            </li>
                        ))}
                    </ol>

                    <AccentMarks tone="purple" className="krb-timeline__accent krb-timeline__accent--start" />
                    <AccentMarks tone="purple" className="krb-timeline__accent krb-timeline__accent--end" />
                </div>
            </div>
        </section>
    );
}
