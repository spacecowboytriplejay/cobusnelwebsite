/**
 * Footer - cobusnel.com
 * Design: Institutional Gravity. Dark surface, signature wordmark, compliance disclaimer.
 */
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--cn-bg-secondary)", borderTop: "1px solid var(--cn-border)" }}>
      <div className="container" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <div className="cn-wordmark" style={{ fontSize: "26px", marginBottom: "1rem" }}>Cobus Nel</div>
            <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)", lineHeight: 1.7, maxWidth: "280px" }}>
              South Africa's Capital Architect. CA(SA). Chief Investment Officer at Eridanus, a registered FSP and registered Venture Capital Company (VCC).
            </p>
            <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", marginTop: "1rem" }}>
              FSP 48947 | Operating since 2018
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)", marginBottom: "1.25rem" }}>Navigate</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Cobus" },
                { href: "/discovery-session", label: "Discovery Session" },
                { href: "/insights", label: "Insights" },
                { href: "/for-investors", label: "For Investors" },
                { href: "/apply", label: "Apply" },
              ].map((link) => (
                <Link key={link.href} href={link.href}>
                  <span style={{ fontSize: "14px", color: "var(--cn-text-secondary)", transition: "color 200ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cn-text-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cn-text-secondary)")}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)", marginBottom: "1.25rem" }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)" }}>Eridanus</p>
              <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)" }}>Registered FSP 48947</p>
              <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)" }}>South Africa</p>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
              <Link href="/apply">
                <span className="cn-btn-primary" style={{ fontSize: "12px", padding: "10px 20px" }}>
                  Apply for a Discovery Session
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="cn-divider" style={{ marginBottom: "1.5rem" }} />

        {/* Compliance disclaimer */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <p className="cn-disclaimer">
            This website is for informational purposes only and does not constitute financial advice. Cobus Nel and Eridanus provide access to a diagnostic process, not regulated financial advice. All investment decisions should be made in consultation with a qualified financial advisor. Past performance is not indicative of future results.
          </p>
          <p className="cn-disclaimer">
            Eridanus is a registered Financial Services Provider (FSP 48947) and a registered Venture Capital Company (VCC). All investments carry risk. The R200,000 government deposit guarantee applies to qualifying bank deposits only. Returns quoted are indicative net figures after dividends withholding tax and are subject to individual circumstances and SARS assessment. Consult a qualified tax practitioner before investing.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginTop: "0.5rem" }}>
            <p className="cn-disclaimer">
              &copy; {new Date().getFullYear()} Cobus Nel. All rights reserved.
            </p>
            <p className="cn-disclaimer">cobusnel.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
