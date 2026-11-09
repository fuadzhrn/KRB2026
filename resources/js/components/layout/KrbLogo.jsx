/**
 * KRB wordmark: heavy italic "KRB" + yellow dot. Rendered as text so it
 * stays sharp and can change colour (dark on paper, white on the footer).
 */
export default function KrbLogo({ className = '' }) {
    return (
        <span className={`krb-logo ${className}`}>
            KRB
            <span className="krb-logo__dot" aria-hidden="true" />
        </span>
    );
}
