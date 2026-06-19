/**
 * Discovery Session - cobusnel.com
 * Design: Institutional Gravity. Seven-touchpoint diagnostic explained in full.
 * Ends in the application gate.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const OFFICE_CONSULT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663150514473/bELt3eMdoMZiyNfZHqGqyW/cobus-office-consultation-K4xoBifiXsLLwop73txtTb.webp";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="cn-fade-in" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const steps = [
  {
    num: "01",
    title: "Position Diagnostics",
    body: "The session begins with a clear-eyed picture of where the investor stands today. Current capital position. Where it is held. What it is earning. What the investor believes it is earning versus what it is actually earning net of tax and fees. This is not a judgment. It is a baseline.",
  },
  {
    num: "02",
    title: "Tax-Effective Structures",
    body: "How the capital is held matters as much as where it is invested. The session examines the current holding structures: which are working, which are costing the investor money they do not need to spend, and which structures could be optimised before any investment decision is made.",
  },
  {
    num: "03",
    title: "Life Insurance Audit",
    body: "Existing cover is reviewed against the actual estate picture. This is not a sales exercise. It is a diagnostic. The question is whether the current cover is appropriate for the investor's current position, not whether more cover can be sold.",
  },
  {
    num: "04",
    title: "Estate Planning",
    body: "The succession picture. Who receives what. When. Under what conditions. Gaps are identified and documented. The investor leaves the session with a clear view of whether their estate is structured to transfer capital efficiently or whether there are gaps that need attention.",
  },
  {
    num: "05",
    title: "Trust Review",
    body: "Existing trust structures are examined. Costs, benefits, and alignment with the investor's current objectives. Trusts are powerful structures when they are correctly calibrated. They are expensive structures when they are not. The session identifies which category the investor's trusts fall into.",
  },
  {
    num: "06",
    title: "Operator-Grounded Investment Explanation",
    body: "How the capital would actually be deployed, explained by an operator who has bought, valued, and managed real agricultural assets. Not a brochure. Not a pitch deck. A direct explanation of the mechanism: what Eridanus buys, why it buys below market value, how the return is structured, and what the investor owns when the mandate is signed.",
  },
  {
    num: "07",
    title: "Calibrated Rate Conversation",
    body: "The honest net-return discussion. Not 13% gross. Not before dividends withholding tax. The number the investor actually keeps. The return tiers are explained clearly. The investor leaves the session knowing exactly what they would earn if they chose to proceed, and exactly what the conditions of that return are.",
  },
];

export default function DiscoverySession() {
  useEffect(() => {
    document.title = "The Discovery Session | Cobus Nel | South Africa's Capital Architect";
  }, []);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", borderBottom: "1px solid var(--cn-border)" }}>
        <div className="container">
          <div className="cn-discovery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "end" }}>
            <FadeIn>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem" }}>
                  The Discovery Session
                </p>
                <h1 className="cn-headline" style={{ fontSize: "var(--type-hero)", marginBottom: "1.5rem" }}>
                  One session. A complete picture.
                </h1>
                <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
                  Not a sales pitch. A structured diagnostic. Seven touchpoints that give a serious investor a complete picture of where their capital stands and what the other side of the table looks like.
                </p>
                <Link href="/apply">
                  <span className="cn-btn-primary">
                    Apply for a Discovery Session <ArrowRight size={14} />
                  </span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <img
                src={OFFICE_CONSULT}
                alt="Discovery Session consultation"
                style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "2px" }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div className="cn-section-title" style={{ marginBottom: "2rem" }}>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)" }}>What to expect.</h2>
            </div>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The Discovery Session is a single, structured conversation. It is not a product presentation. It is not a commitment. It is a diagnostic: a professional review of the investor's current capital position across seven areas that most financial conversations never reach.
            </p>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Cobus works with a team of professionals who can assist with financial structures, insurance, accounting, and legal advice. The session is access to a competent professional bench, not a sales pitch.
            </p>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8 }}>
              The value is in the diagnosis itself. Most investors leave the session with a clearer picture of their capital position than they have had in years, regardless of whether they choose to proceed with Eridanus.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Seven steps */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container">
          <FadeIn>
            <div className="cn-section-title" style={{ marginBottom: "4rem" }}>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)" }}>The seven touchpoints.</h2>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--cn-border)" }}>
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 80}>
                <div className="cn-step-row" style={{ backgroundColor: "var(--cn-bg-primary)", padding: "2.5rem", display: "grid", gridTemplateColumns: "80px 1fr", gap: "2rem", alignItems: "start" }}>
                  <div>
                    <span className="cn-step-number" style={{ fontSize: "14px" }}>{step.num}</span>
                  </div>
                  <div>
                    <h3 className="cn-headline" style={{ fontSize: "var(--type-h3)", marginBottom: "1rem" }}>{step.title}</h3>
                    <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", maxWidth: "680px" }}>{step.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Who qualifies */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <FadeIn>
            <div className="cn-section-title" style={{ marginBottom: "2rem" }}>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)" }}>Who qualifies.</h2>
            </div>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              The Discovery Session is for investors with R1 million or more available to deploy. The capital floor is not arbitrary. It is the minimum at which the Eridanus structure delivers meaningful net returns and at which the diagnostic conversation is worth the investor's time.
            </p>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
              Investors below the R1 million floor are routed to a resource that provides value and a clear path forward for when their capital position reaches the threshold. No hard rejection. A graceful and useful exit.
            </p>
            <div className="cn-stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)", marginBottom: "2rem" }}>
              {[
                { label: "Capital floor", value: "R1M+" },
                { label: "R2.5M+ tier", value: "Cobus direct" },
                { label: "R5M+ tier", value: "Priority routing" },
              ].map((item) => (
                <div key={item.label} style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.75rem" }}>
                  <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)", marginBottom: "8px" }}>{item.label}</p>
                  <p className="cn-figure" style={{ fontSize: "22px" }}>{item.value}</p>
                </div>
              ))}
            </div>
            <Link href="/apply">
              <span className="cn-btn-primary">
                Apply for a Discovery Session <ArrowRight size={14} />
              </span>
            </Link>
            <p className="cn-disclaimer" style={{ marginTop: "1.5rem" }}>
              Discovery Sessions are subject to availability and qualification. This is not financial advice. Eridanus is a registered FSP (FSP 48947). All investments carry risk.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
