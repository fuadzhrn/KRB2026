import { useRef } from 'react';
import ScrapPhoto from '@/components/scrapbook/ScrapPhoto';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import { heroCopy, heroDecor, heroPhotos } from '@/data/homeHero';
import { useHeroEntrance } from '@/hooks/useHeroEntrance';

/**
 * Home Hero — scrapbook collage.
 *
 * Every element is absolutely placed on a fixed-ratio "stage" (see
 * resources/css/components/home-hero.css). Sizes use container units so the
 * composition scales as one piece; phones get their own arrangement.
 */
export default function HomeHero() {
    const heroRef = useRef(null);

    useHeroEntrance(heroRef);

    return (
        <section ref={heroRef} className="home-hero" aria-labelledby="home-hero-title">
            <div className="home-hero__inner">
                <div className="home-hero__stage">
                    {/* Back layer: patterns behind the photos */}
                    <DecorativeElement src={heroDecor.halftone} className="hero-halftone hero-halftone--top" />
                    <DecorativeElement src={heroDecor.checker} className="hero-checker" />
                    <DecorativeElement src={heroDecor.halftone} className="hero-halftone hero-halftone--mid" />
                    <DecorativeElement src={heroDecor.halftone} className="hero-halftone hero-halftone--band" />
                    <DecorativeElement src={heroDecor.halftone} className="hero-halftone hero-halftone--corner" />
                    <span className="hero-stripes" aria-hidden="true" />

                    {/* Badge: EST. SMA */}
                    <DecorativeElement src={heroDecor.brushPurple} className="krb-decor--stretch hero-badge-brush" />
                    <DecorativeElement src={heroDecor.crown} className="krb-decor--ink hero-crown" />
                    <p className="hero-badge">{heroCopy.badge}</p>
                    <DecorativeElement src={heroDecor.scribble} className="krb-decor--scribble krb-decor--white hero-badge-scribble" />

                    {/* Title: KRB. */}
                    <h1 id="home-hero-title" className="hero-title">
                        {heroCopy.title}
                        <span className="hero-title__dot" aria-hidden="true" />
                    </h1>

                    {/* Status: STILL GOING. */}
                    <DecorativeElement src={heroDecor.brushYellow} className="krb-decor--stretch hero-status-brush" />
                    <p className="hero-status">{heroCopy.status}</p>
                    <DecorativeElement src={heroDecor.scribble} className="krb-decor--scribble hero-status-scribble" />
                    <DecorativeElement src={heroDecor.accentLines} className="hero-accent" />

                    {/* Tagline */}
                    <p className="hero-tagline">
                        <span className="hero-tagline__line">{heroCopy.tagline[0]}</span>{' '}
                        <span className="hero-tagline__line hero-tagline__line--indent">{heroCopy.tagline[1]}</span>
                    </p>
                    <DecorativeElement src={heroDecor.scribble} className="krb-decor--scribble hero-tagline-scribble" />
                    <DecorativeElement src={heroDecor.arrow} className="hero-arrow" />

                    {/* Collage */}
                    {heroPhotos.map((item) => (
                        <ScrapPhoto
                            key={item.id}
                            photo={item.photo}
                            shape={item.shape}
                            priority={item.priority}
                            className={item.position}
                        />
                    ))}
                    <DecorativeElement src={heroDecor.tape} className="krb-decor--stretch hero-tape hero-tape--air-terjun" />
                    <DecorativeElement src={heroDecor.tapeAngled} className="hero-tape hero-tape--makan-bareng" />

                    {/* Note: Cerita masih berjalan. */}
                    <DecorativeElement src={heroDecor.tornLabel} className="krb-decor--stretch krb-decor--ink-paper hero-note-paper" />
                    <p className="hero-note">
                        <span className="block">{heroCopy.note[0]}</span>
                        <span className="block">{heroCopy.note[1]}</span>
                    </p>
                    <DecorativeElement src={heroDecor.scribble} className="krb-decor--scribble hero-note-scribble" />
                </div>

                <p className="hero-description">{heroCopy.description}</p>
            </div>
        </section>
    );
}
