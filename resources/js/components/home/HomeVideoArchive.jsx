import { Captions, Maximize, Play, Volume2 } from 'lucide-react';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import Scribble from '@/components/scrapbook/Scribble';
import { krbAssets } from '@/data/krbAssets';
import { featuredVideo, videoArchiveIntro, videoList } from '@/data/homeSections';

/**
 * Video Archive. No video files exist yet, so the player shows the poster
 * with a "Segera" state instead of fake durations or view counts.
 */
export default function HomeVideoArchive() {
    const hasFeaturedVideo = Boolean(featuredVideo.videoUrl);

    return (
        <section id="video-archive" className="krb-section krb-videos" aria-labelledby="krb-videos-title">
            <div className="krb-section__inner krb-videos__inner">
                <div className="krb-videos__intro">
                    <div className="krb-videos__heading">
                        <DecorativeElement
                            src={krbAssets.decorative.brushes.purple}
                            className="krb-decor--stretch krb-videos__brush"
                        />
                        <h2 id="krb-videos-title" className="krb-display-heading krb-videos__title">
                            <span>Video</span> <span>Archive</span>
                        </h2>
                    </div>
                    <Scribble tone="yellow" className="krb-videos__scribble" />
                    <p className="krb-videos__text">{videoArchiveIntro}</p>
                </div>

                <figure className="krb-player">
                    <img
                        className="krb-player__poster"
                        src={featuredVideo.poster.src}
                        alt=""
                        width={featuredVideo.poster.size.width}
                        height={featuredVideo.poster.size.height}
                        loading="lazy"
                        decoding="async"
                        style={{ '--photo-focus': featuredVideo.poster.focus }}
                    />
                    <button
                        type="button"
                        className="krb-player__play"
                        aria-label={hasFeaturedVideo ? `Putar ${featuredVideo.title}` : 'Video segera diunggah'}
                        aria-disabled={!hasFeaturedVideo}
                        title={hasFeaturedVideo ? undefined : 'Video segera diunggah'}
                    >
                        <Play aria-hidden="true" fill="currentColor" strokeWidth={0} />
                    </button>
                    {!hasFeaturedVideo && <span className="krb-player__soon">Segera tayang</span>}
                    <div className="krb-player__controls" aria-hidden="true">
                        <Play fill="currentColor" strokeWidth={0} />
                        <span className="krb-player__time">0:00 / {featuredVideo.duration ?? '--:--'}</span>
                        <span className="krb-player__progress" />
                        <Volume2 strokeWidth={2.4} />
                        <Captions strokeWidth={2.4} />
                        <Maximize strokeWidth={2.4} />
                    </div>
                    <figcaption className="sr-only">{featuredVideo.title} (segera tayang)</figcaption>
                </figure>

                <ul className="krb-videos__list">
                    {videoList.map((video) => (
                        <li key={video.id} className="krb-video-item">
                            <span className="krb-video-item__thumb">
                                <img
                                    src={video.thumbnail.src}
                                    alt=""
                                    width={video.thumbnail.size.width}
                                    height={video.thumbnail.size.height}
                                    loading="lazy"
                                    decoding="async"
                                    style={{ '--photo-focus': video.thumbnail.focus }}
                                />
                                <span className="krb-video-item__badge">{video.duration ?? 'Segera'}</span>
                            </span>
                            <span className="krb-video-item__body">
                                <span className="krb-video-item__title">{video.title}</span>
                                <span className="krb-video-item__meta">
                                    {video.views ? `${video.views} tayangan` : 'Video segera diunggah'}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
