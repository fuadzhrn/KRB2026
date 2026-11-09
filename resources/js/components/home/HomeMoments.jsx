import { ArrowRight, MapPin } from 'lucide-react';
import AccentMarks from '@/components/scrapbook/AccentMarks';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import Scribble from '@/components/scrapbook/Scribble';
import { krbAssets } from '@/data/krbAssets';
import { favoriteMoments, favoriteMomentsIntro } from '@/data/homeSections';

export default function HomeMoments() {
    return (
        <section id="momen-favorit" className="krb-section krb-moments" aria-labelledby="krb-moments-title">
            <div className="krb-section__inner krb-moments__inner">
                <div className="krb-moments__intro">
                    <DecorativeElement src={krbAssets.icons.crown} className="krb-moments__crown" />
                    <div className="krb-moments__heading">
                        <DecorativeElement
                            src={krbAssets.decorative.brushes.yellow}
                            className="krb-decor--stretch krb-moments__brush"
                        />
                        <h2 id="krb-moments-title" className="krb-display-heading krb-moments__title">
                            <span>Momen</span> <span>Favorit.</span>
                        </h2>
                    </div>
                    <p className="krb-moments__text">{favoriteMomentsIntro}</p>
                    <a href="#momen-favorit" className="krb-pill-link" aria-disabled="true" title="Halaman Archive segera hadir">
                        Lihat Semua
                        <ArrowRight aria-hidden="true" strokeWidth={2.6} />
                    </a>
                </div>

                <ul className="krb-moments__cards">
                    {favoriteMoments.map((moment) => (
                        <li key={moment.id} className="krb-polaroid">
                            {moment.tape && (
                                <DecorativeElement
                                    src={krbAssets.decorative.tapes.straight}
                                    className="krb-decor--stretch krb-polaroid__tape"
                                />
                            )}
                            <div className="krb-polaroid__photo">
                                <img
                                    src={moment.photo.src}
                                    alt={moment.photo.alt}
                                    width={moment.photo.size.width}
                                    height={moment.photo.size.height}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ '--photo-focus': moment.photo.focus }}
                                />
                            </div>
                            <h3 className="krb-polaroid__title">{moment.title}</h3>
                            <p className="krb-polaroid__meta">
                                <MapPin aria-hidden="true" strokeWidth={2.6} />
                                <span className="sr-only">Lokasi: </span>
                                {moment.location}
                            </p>
                        </li>
                    ))}
                </ul>

                <AccentMarks className="krb-moments__accent" />
                <DecorativeElement src={krbAssets.icons.crown} className="krb-moments__crown-right" />
                <Scribble tone="yellow" className="krb-moments__squiggle krb-moments__squiggle--one" />
                <Scribble tone="yellow" className="krb-moments__squiggle krb-moments__squiggle--two" />
            </div>
        </section>
    );
}
