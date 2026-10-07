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
              South Africa's Capital Architect. CA(SA). Chief Investment Officer, involved in running Eridanus, an FSCA-authorised Financial Services Provider (FSP 48947).
            </p>
            <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", marginTop: "1rem" }}>
              Involved in running Eridanus (FSP 48947)
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

          {/* Legal */}
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)", marginBottom: "1.25rem" }}>Legal</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Link href="/privacy-policy">
                <span style={{ fontSize: "14px", color: "var(--cn-text-secondary)", transition: "color 200ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cn-text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cn-text-secondary)")}
                >
                  Privacy Policy
                </span>
              </Link>
              <Link href="/terms">
                <span style={{ fontSize: "14px", color: "var(--cn-text-secondary)", transition: "color 200ms ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cn-text-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cn-text-secondary)")}
                >
                  Terms of Service
                </span>
              </Link>
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
            This website is for informational purposes only and does not constitute financial advice. Cobus Nel and Eridanus provide access to a diagnostic process, not regulated financial advice. All investment decisions should be made in consultation with a qualified financial advisor.
          </p>
          <p className="cn-disclaimer">
            Eridanus is an authorised Financial Services Provider, FSP No. 48947, registered with the Financial Sector Conduct Authority (FSCA) of South Africa. Cobus Nel is involved in running Eridanus. Returns are not guaranteed. Past performance is not indicative of future performance. All investments carry risk of loss, including risk of capital loss. Returns quoted are indicative figures after dividends withholding tax and are subject to individual circumstances and SARS assessment. Consult a qualified financial and tax practitioner before investing.
          </p>
          <p className="cn-disclaimer" style={{ fontStyle: "italic" }}>
            This website is a placeholder pending legal review of all compliance language. Privacy Policy and Terms of Service require review by a qualified legal practitioner before any paid advertising campaign goes live.
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
