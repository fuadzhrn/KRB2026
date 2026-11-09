import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight, Menu, Search, X } from 'lucide-react';
import { useEffect, useId, useRef, useState } from 'react';
import KrbLogo from '@/components/layout/KrbLogo';
import { mainNavigation, primaryCallToAction } from '@/data/navigation';
import { krbAssets } from '@/data/krbAssets';
import { useNavbarEntrance } from '@/hooks/useNavbarEntrance';

/** Real page URL once the route exists, otherwise the temporary Home section. */
function resolveNavigation(availableRoutes, currentPath) {
    return mainNavigation.map((item) => {
        const hasPage = availableRoutes.includes(item.route);
        const href = hasPage ? item.href : item.fallbackHref;

        return { ...item, href, isActive: hasPage && currentPath === item.href };
    });
}

export default function Navbar() {
    const { url, props } = usePage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuId = useId();
    const menuButtonRef = useRef(null);
    const firstMenuLinkRef = useRef(null);
    const headerRef = useRef(null);

    useNavbarEntrance(headerRef);

    const currentPath = url.split(/[?#]/)[0] || '/';
    const navigation = resolveNavigation(props.availableRoutes ?? [], currentPath);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        firstMenuLinkRef.current?.focus();

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };

        const closeOnDesktop = () => {
            if (window.matchMedia('(min-width: 900px)').matches) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', closeOnEscape);
        window.addEventListener('resize', closeOnDesktop);

        return () => {
            document.removeEventListener('keydown', closeOnEscape);
            window.removeEventListener('resize', closeOnDesktop);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header ref={headerRef} className="krb-navbar">
            <nav className="krb-navbar__bar" aria-label="Navigasi utama">
                <Link href="/" className="krb-navbar__logo" aria-label="KRB, ke beranda">
                    <KrbLogo />
                </Link>

                <ul className="krb-navbar__links">
                    {navigation.map((item) => (
                        <li key={item.id}>
                            <Link
                                href={item.href}
                                className="krb-navbar__link"
                                aria-current={item.isActive ? 'page' : undefined}
                            >
                                {item.label}
                                {item.isActive && (
                                    <span className="krb-navbar__underline" aria-hidden="true">
                                        <img src={krbAssets.icons.underlineScribble} alt="" />
                                    </span>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="krb-navbar__actions">
                    <button
                        type="button"
                        className="krb-navbar__icon-button"
                        aria-label="Cari (segera hadir)"
                        title="Pencarian segera hadir"
                        aria-disabled="true"
                    >
                        <Search aria-hidden="true" strokeWidth={2.4} />
                    </button>

                    <Link href={primaryCallToAction.href} className="krb-navbar__cta">
                        {primaryCallToAction.label}
                        <ArrowUpRight aria-hidden="true" strokeWidth={2.6} />
                    </Link>

                    <button
                        ref={menuButtonRef}
                        type="button"
                        className="krb-navbar__icon-button krb-navbar__menu-toggle"
                        aria-expanded={isMenuOpen}
                        aria-controls={menuId}
                        aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        {isMenuOpen ? <X aria-hidden="true" strokeWidth={2.6} /> : <Menu aria-hidden="true" strokeWidth={2.6} />}
                    </button>
                </div>
            </nav>

            <div id={menuId} className="krb-mobile-menu" hidden={!isMenuOpen}>
                <ul className="krb-mobile-menu__links">
                    {navigation.map((item, index) => (
                        <li key={item.id}>
                            <Link
                                ref={index === 0 ? firstMenuLinkRef : undefined}
                                href={item.href}
                                className="krb-mobile-menu__link"
                                aria-current={item.isActive ? 'page' : undefined}
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link href={primaryCallToAction.href} className="krb-navbar__cta krb-mobile-menu__cta" onClick={closeMenu}>
                    {primaryCallToAction.label}
                    <ArrowUpRight aria-hidden="true" strokeWidth={2.6} />
                </Link>
            </div>
        </header>
    );
}
