/**
 * For Investors - cobusnel.com
 * Design: Institutional Gravity. Plain-English FAQ, AEO-optimized.
 * FAQPage JSON-LD injected for AI-search quotation.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Plus, Minus } from "lucide-react";

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

const faqs = [
  {
    q: "What is the minimum investment amount?",
    a: "The minimum capital floor is R1 million. This is not a soft guideline. It is the threshold at which the Eridanus structure delivers meaningful net returns and at which the Discovery Session diagnostic conversation is worth the investor's time. Investors below R1 million are directed to a resource that provides value and a clear path forward.",
  },
  {
    q: "What returns can I expect?",
    a: "Indicative net returns after dividends withholding tax and SARS assessment are approximately 11% per annum for R1 million to R2.5 million, approximately 11.5% for R2.5 million to R5 million, and approximately 12.5% for R5 million and above. These are net figures. Not gross. Not before tax. The number the investor actually keeps. Returns are fixed and agreed before any capital is deployed.",
  },
  {
    q: "What does Eridanus actually invest in?",
    a: "Eridanus acquires real South African agricultural assets at below-market value. Physical, productive assets: land, equipment, and agricultural infrastructure. The investor's capital deploys into assets worth more than the entry price from day one. The return is secured against real physical assets, not a paper instrument.",
  },
  {
    q: "Is Eridanus a registered financial services provider?",
    a: "Yes. Eridanus is a registered Financial Services Provider (FSP 48947) and a Section 12J venture capital company. It has been operating since 2018. The FSP registration is publicly verifiable through the FSCA. Cobus Nel is the Chief Investment Officer.",
  },
  {
    q: "What is Section 12J and how does it benefit me?",
    a: "Section 12J of the Income Tax Act provides a tax incentive for investments in approved venture capital companies. An investment in a qualifying Section 12J company is deductible from taxable income in the year of investment. The specific benefit depends on the investor's individual tax position. Consult a qualified tax practitioner before investing.",
  },
  {
    q: "What is a Discovery Session?",
    a: "The Discovery Session is a structured, seven-touchpoint diagnostic conversation. It covers position diagnostics, tax-effective structures, life insurance audit, estate planning, trust review, an operator-grounded investment explanation, and the calibrated net-return conversation. It is not a sales pitch. It is a diagnostic. One session. No obligation. The value is in the diagnosis itself.",
  },
  {
    q: "Is this financial advice?",
    a: "No. This website provides information and access to a diagnostic process. It does not constitute financial advice. Cobus Nel and Eridanus provide access to a structured conversation, not regulated financial advice. All investment decisions should be made in consultation with a qualified financial advisor. The Discovery Session includes access to a team of professionals who can assist with financial structures, insurance, accounting, and legal advice.",
  },
  {
    q: "What is the R200,000 guarantee and why does it matter?",
    a: "The South African government guarantees R200,000 of qualifying bank deposits per depositor per institution. Everything above R200,000 in a bank deposit is effectively unsecured exposure to the bank. This is not widely communicated. Most investors with R1 million or more in a bank account are carrying significant uninsured exposure without knowing it.",
  },
  {
    q: "How is the return structured?",
    a: "Returns are fixed and agreed before any capital is deployed. The investor knows the exact net return they will receive before signing the mandate. Monthly statements. Full documentation transparency. The return is secured against real agricultural assets. Not a promise. A documented, structured obligation.",
  },
  {
    q: "What is the difference between gross and net returns?",
    a: "A gross return is the advertised figure before tax. A net return is what the investor actually keeps after dividends withholding tax and SARS assessment. An advertised 13% gross private return is closer to 10.4% net after dividends withholding tax. Eridanus quotes the net figure because that is the only number that matters to the investor.",
  },
  {
    q: "Who is Cobus Nel?",
    a: "Cobus Nel is a Chartered Accountant (CA(SA)) and the Chief Investment Officer of Eridanus. He trained at Ernst and Young in Pretoria and Bermuda, completed his CA(SA) articles at EY Pretoria, passed all board exams first time, and was seconded to EY Bermuda for international financial structures work. He traded commodities at Export Trading Group and has hands-on farming, business rescue, and liquidation experience. He co-founded Eridanus with Martin van Vuuren in 2018.",
  },
  {
    q: "How do I apply for a Discovery Session?",
    a: "Apply through the application form on this website. The form captures enough information to qualify and route the application appropriately. R1 million to R2.5 million applications are qualified by a Capital Architect. R2.5 million and above are routed to Cobus directly. R5 million and above receive priority routing.",
  },
];

function FAQItem({ q, a, delay }: { q: string; a: string; delay: number }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="cn-fade-in" style={{ transitionDelay: `${delay}ms`, borderBottom: "1px solid var(--cn-border)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "1.5rem",
          padding: "1.75rem 0",
          background: "none",
          border: "none",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <h3 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: 700,
          fontSize: "clamp(18px, 2vw, 22px)",
          color: open ? "var(--cn-gold)" : "var(--cn-text-primary)",
          lineHeight: 1.3,
          transition: "color 200ms ease",
        }}>
          {q}
        </h3>
        <div style={{ minWidth: "20px", color: "var(--cn-gold)", marginTop: "4px" }}>
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      <div style={{
        maxHeight: open ? "500px" : "0",
        overflow: "hidden",
        transition: "max-height 350ms cubic-bezier(0.23, 1, 0.32, 1)",
      }}>
        <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", paddingBottom: "1.75rem", maxWidth: "680px" }}>
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ForInvestors() {
  useEffect(() => {
    document.title = "For Investors | Cobus Nel | South Africa's Capital Architect";

    // Inject FAQPage JSON-LD
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", borderBottom: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem" }}>
              For Investors
            </p>
            <h1 className="cn-headline" style={{ fontSize: "var(--type-hero)", maxWidth: "700px", marginBottom: "1.5rem" }}>
              The questions that matter.
            </h1>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "560px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Plain answers to the questions a serious investor asks before committing to a conversation. No marketing language. No evasion. The direct answer.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <span style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.16em", textTransform: "uppercase", whiteSpace: "nowrap" }}>As seen on</span>
              <div style={{ width: "1px", height: "20px", backgroundColor: "var(--cn-border)" }} />
              {[
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/WWKlZfcTfPTrnvWl.png", alt: "kykNET", h: "26px" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/UyOVDuntQbidIfCZ.png", alt: "Ontbyt Sake", h: "28px" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/NxNdeVnuNYsteQPY.png", alt: "Pretoria FM", h: "30px" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/peICczlbTSWeWKgX.png", alt: "Ernst & Young", h: "24px" },
              ].map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: logo.h, width: "auto", objectFit: "contain", opacity: 0.4 }} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ borderTop: "1px solid var(--cn-border)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} delay={i * 50} />
            ))}
          </div>
        </div>
      </section>

      {/* Return tiers reference */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)" }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <FadeIn>
            <div className="cn-section-title" style={{ marginBottom: "2rem" }}>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>Return tiers at a glance.</h2>
            </div>
            <div className="cn-tiers-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)", marginBottom: "1.5rem" }}>
              {[
                { tier: "R1M to R2.5M", rate: "~11%", note: "Net p.a." },
                { tier: "R2.5M to R5M", rate: "~11.5%", note: "Net p.a." },
                { tier: "R5M+", rate: "~12.5%", note: "Net p.a." },
              ].map((row) => (
                <div key={row.tier} style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.75rem" }}>
                  <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", marginBottom: "0.75rem" }}>{row.tier}</p>
                  <p className="cn-figure" style={{ fontSize: "36px", lineHeight: 1 }}>{row.rate}</p>
                  <p style={{ fontSize: "11px", color: "var(--cn-text-secondary)", marginTop: "6px" }}>{row.note}</p>
                </div>
              ))}
            </div>
            <p className="cn-disclaimer">
              Returns are indicative net figures after dividends withholding tax. Subject to individual circumstances and SARS assessment. Past performance is not indicative of future results. This is not financial advice. Consult a qualified financial and tax advisor before investing. Eridanus is a registered FSP (FSP 48947). All investments carry risk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--cn-bg-primary)", padding: "80px 0", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <FadeIn>
            <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)", marginBottom: "1.25rem" }}>
              Still have questions?
            </h2>
            <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
              The Discovery Session is where the real conversation happens. Apply to qualify and get the answers specific to your capital position.
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {[
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/WWKlZfcTfPTrnvWl.png", alt: "kykNET", h: "24px" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/UyOVDuntQbidIfCZ.png", alt: "Ontbyt Sake", h: "26px" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/NxNdeVnuNYsteQPY.png", alt: "Pretoria FM", h: "28px" },
                { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/peICczlbTSWeWKgX.png", alt: "EY", h: "22px" },
              ].map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: logo.h, width: "auto", objectFit: "contain", opacity: 0.35 }} />
              ))}
            </div>
            <Link href="/apply">
              <span className="cn-btn-primary">
                Apply for a Discovery Session <ArrowRight size={14} />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
