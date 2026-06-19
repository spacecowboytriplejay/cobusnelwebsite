/**
 * Navigation - cobusnel.com
 * Design: Institutional Gravity. Dark surface, signature wordmark, hairline underline nav links.
 * Sticky on scroll with a subtle backdrop blur.
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/discovery-session", label: "Discovery Session" },
  { href: "/insights", label: "Insights" },
  { href: "/for-investors", label: "For Investors" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: scrolled ? "rgba(14, 18, 9, 0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background-color 300ms ease, border-color 300ms ease, backdrop-filter 300ms ease",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Wordmark */}
          <Link href="/">
            <span className="cn-wordmark" style={{ fontSize: "22px" }}>
              Cobus Nel
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span className={`cn-nav-link ${location === link.href ? "active" : ""}`}>
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden-mobile">
            <Link href="/apply">
              <span className="cn-btn-primary" style={{ fontSize: "12px", padding: "10px 24px" }}>
                Apply Now
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-only"
            style={{ background: "none", border: "none", color: "var(--cn-text-primary)", padding: "8px" }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "var(--cn-bg-primary)",
          zIndex: 99,
          display: "flex",
          flexDirection: "column",
          padding: "96px 2rem 2rem",
          gap: "2rem",
          transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontWeight: 700,
                fontSize: "clamp(28px, 6vw, 40px)",
                color: location === link.href ? "var(--cn-gold)" : "var(--cn-text-primary)",
                display: "block",
              }}
            >
              {link.label}
            </span>
          </Link>
        ))}
        <div style={{ marginTop: "1rem" }}>
          <Link href="/apply">
            <span className="cn-btn-primary">Apply for a Discovery Session</span>
          </Link>
        </div>
      </div>

      <style>{`
        .hidden-mobile { display: flex; }
        .mobile-only { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
        }
      `}</style>
    </>
  );
}
