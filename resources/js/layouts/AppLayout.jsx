/**
 * Base layout for all public KRB pages.
 *
 * Navbar and Footer slots are intentionally empty for now — they are
 * implemented in their own stages and will be mounted here.
 */
export default function AppLayout({ children }) {
    return (
        <div className="relative flex min-h-dvh flex-col overflow-x-clip">
            <a href="#main-content" className="krb-skip-link">
                Langsung ke konten
            </a>

            {/* <Navbar /> — Tahap 2 */}

            <main id="main-content" className="flex-1">
                {children}
            </main>

            {/* <Footer /> */}
        </div>
    );
}
