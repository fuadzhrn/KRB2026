import { Link, usePage } from '@inertiajs/react';
import KrbLogo from '@/components/layout/KrbLogo';
import SocialIcon from '@/components/layout/SocialIcon';
import DecorativeElement from '@/components/scrapbook/DecorativeElement';
import Scribble from '@/components/scrapbook/Scribble';
import TornPaper from '@/components/scrapbook/TornPaper';
import { krbAssets } from '@/data/krbAssets';
import { footerLinkGroups, krbIdentity, siteCredit, socialLinks } from '@/data/navigation';

/**
 * Builds a torn ridge: an irregular top line (x, y in %) closed at the
 * bottom. Only the top edges get torn fibres.
 */
function ridge(topLine, depth, seed) {
    return {
        vertices: [...topLine, [100, 100], [0, 100]],
        tear: [...topLine.slice(1).map(() => depth), 0, 0, 0],
        seed,
    };
}

/* Organic, asymmetric top edge: two torn layers in slightly different purples. */
const EDGE_BACK = ridge(
    [[0, 40], [5, 28], [9, 34], [14, 18], [19, 26], [23, 12], [28, 22], [33, 30], [38, 16], [43, 8], [48, 20], [53, 28], [58, 14], [63, 22], [68, 6], [73, 18], [78, 26], [83, 14], [88, 20], [93, 10], [97, 22], [100, 18]],
    3,
    307,
);

const EDGE_FRONT = ridge(
    [[0, 70], [6, 58], [11, 64], [17, 48], [23, 58], [29, 66], [35, 52], [41, 60], [47, 44], [53, 56], [59, 64], [65, 50], [71, 58], [77, 46], [83, 60], [89, 52], [95, 62], [100, 54]],
    2.5,
    331,
);

function FooterLink({ link, isAvailable }) {
    if (!isAvailable) {
        return (
            <span className="krb-footer__link krb-footer__link--pending" aria-disabled="true">
                {link.label}
                <span className="krb-footer__soon">segera</span>
            </span>
        );
    }

    return (
        <Link href={link.href} className="krb-footer__link">
            {link.label}
        </Link>
    );
}

export default function Footer() {
    const { availableRoutes = [] } = usePage().props;
    const visibleSocials = socialLinks.filter((social) => social.url);
    const currentYear = new Date().getFullYear();

    return (
        <footer className="krb-footer">
            <div className="krb-footer__edge" aria-hidden="true">
                <TornPaper vertices={EDGE_BACK.vertices} tear={EDGE_BACK.tear} seed={EDGE_BACK.seed} className="krb-footer__edge-back" />
                <TornPaper vertices={EDGE_FRONT.vertices} tear={EDGE_FRONT.tear} seed={EDGE_FRONT.seed} className="krb-footer__edge-front" />
            </div>

            <div className="krb-footer__body">
                <DecorativeElement src={krbAssets.decorative.patterns.halftone} className="krb-footer__halftone" />

                <div className="krb-footer__inner">
                    <div className="krb-footer__main">
                        <section className="krb-footer__identity" aria-label="Tentang KRB">
                            <Link href="/" className="krb-footer__logo" aria-label="KRB, ke beranda">
                                <KrbLogo />
                            </Link>
                            <p className="krb-footer__established">
                                {krbIdentity.established}
                                <span className="krb-footer__dot" aria-hidden="true">·</span>
                                {krbIdentity.origin}
                            </p>
                            <p className="krb-footer__description">{krbIdentity.description}</p>
                        </section>

                        {footerLinkGroups.map((group) => (
                            <nav key={group.id} className="krb-footer__group" aria-labelledby={`footer-${group.id}`}>
                                <h2 id={`footer-${group.id}`} className="krb-footer__heading">
                                    {group.heading}
                                </h2>
                                <ul className="krb-footer__links">
                                    {group.links.map((link) => (
                                        <li key={link.id}>
                                            <FooterLink link={link} isAvailable={availableRoutes.includes(link.route)} />
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        ))}

                        <div className="krb-footer__signoff">
                            <p className="krb-footer__tagline">
                                Still Going.
                                <Scribble tone="yellow" className="krb-footer__tagline-scribble" />
                            </p>

                            {visibleSocials.length > 0 && (
                                <ul className="krb-footer__social" aria-label="Media sosial KRB">
                                    {visibleSocials.map((social) => (
                                        <li key={social.id}>
                                            <a
                                                href={social.url}
                                                className="krb-footer__social-link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${social.label} KRB`}
                                            >
                                                <SocialIcon name={social.id} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className="krb-footer__bottom">
                        <p>
                            © {currentYear} {siteCredit.owner}. All rights reserved.
                        </p>
                        <p>
                            Designed &amp; Developed by <span className="krb-footer__credit-name">{siteCredit.developer}</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
