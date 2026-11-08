import { Head } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { krbAssets, krbAssetSizes } from '@/data/krbAssets';

/**
 * Temporary foundation check page.
 * This whole page body gets replaced by the real Home sections (Hero, etc.).
 */
const swatches = [
    { name: 'Primary Purple', token: '--krb-primary', className: 'bg-krb-primary' },
    { name: 'Highlight Yellow', token: '--krb-yellow', className: 'bg-krb-yellow' },
    { name: 'Paper White', token: '--krb-background', className: 'bg-krb-background' },
    { name: 'Ink Black', token: '--krb-ink', className: 'bg-krb-ink' },
    { name: 'Soft Lavender', token: '--krb-lavender', className: 'bg-krb-lavender' },
    { name: 'Deep Purple', token: '--krb-deep-purple', className: 'bg-krb-deep-purple' },
];

export default function Home() {
    return (
        <>
            <Head title="Home" />

            <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <p className="inline-flex items-center gap-2 rounded-full bg-krb-lavender px-3 py-1 text-sm font-semibold text-krb-deep-purple">
                    <Check aria-hidden="true" className="size-4" />
                    Foundation setup jalan
                </p>

                <h1 className="mt-6 font-display text-5xl uppercase leading-none text-krb-ink sm:text-7xl">
                    KRB
                </h1>
                <p className="mt-3 font-hand text-2xl text-krb-primary sm:text-3xl">
                    Dari SMA, lanjut terus.
                </p>
                <p className="mt-4 max-w-xl text-base text-krb-ink/80">
                    Halaman ini cuma buat ngecek React, Inertia, Tailwind, font, dan warna. Nanti
                    diganti sama section Home yang asli.
                </p>

                <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {swatches.map((swatch) => (
                        <li key={swatch.token} className="overflow-hidden rounded-lg border border-krb-ink/10 bg-white">
                            <div className={`h-16 ${swatch.className}`} />
                            <div className="px-3 py-2 text-sm">
                                <p className="font-semibold">{swatch.name}</p>
                                <code className="text-xs text-krb-ink/60">{swatch.token}</code>
                            </div>
                        </li>
                    ))}
                </ul>

                <img
                    src={krbAssets.decorative.brushes.yellow}
                    alt=""
                    width={krbAssetSizes.decorative.brushes.yellow.width}
                    height={krbAssetSizes.decorative.brushes.yellow.height}
                    loading="lazy"
                    decoding="async"
                    className="mt-10 h-auto w-64 select-none"
                />
            </section>
        </>
    );
}
