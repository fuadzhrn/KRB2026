import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

/** Base layout for all public KRB pages. */
export default function AppLayout({ children }) {
    return (
        <div className="relative flex min-h-dvh flex-col overflow-x-clip">
            <a href="#main-content" className="krb-skip-link">
                Langsung ke konten
            </a>

            <Navbar />

            <main id="main-content" className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
}
