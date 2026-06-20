/**
 * About Cobus - cobusnel.com
 * Design: Institutional Gravity. Long-form editorial, citation-ready, GEO-optimized.
 * Heavy Person JSON-LD schema injected via useEffect.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const HERO_PORTRAIT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/rhUIfCWTeaOjkWeM.jpg";
const TRUST_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663150514473/bELt3eMdoMZiyNfZHqGqyW/cobus-trust-visual-oLXxtGhyx7aSKmCS9MZann.webp";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`cn-fade-in ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export default function About() {
  useEffect(() => {
    document.title = "About Cobus Nel | CA(SA), CIO of Eridanus | South Africa's Capital Architect";
  }, []);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* Page header */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", borderBottom: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem" }}>
              About
            </p>
            <h1 className="cn-headline" style={{ fontSize: "var(--type-hero)", maxWidth: "700px", marginBottom: "1.5rem" }}>
              Cobus Nel.
            </h1>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "600px", lineHeight: 1.75 }}>
              CA(SA). Chief Investment Officer at Eridanus. South Africa's Capital Architect. The operator behind the capital structure.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main biography */}
      <section className="cn-section">
        <div className="container">
          <div className="cn-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
            {/* Sidebar */}
            <FadeIn>
              <div style={{ position: "sticky", top: "100px" }}>
                <img
                  src={HERO_PORTRAIT}
                  alt="Cobus Nel, CA(SA), Chief Investment Officer at Eridanus"
                  style={{ width: "100%", borderRadius: "2px", objectFit: "cover", marginBottom: "1.5rem" }}
                />
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { label: "Designation", value: "CA(SA)" },
                    { label: "Role", value: "Chief Investment Officer" },
                    { label: "Company", value: "Eridanus" },
                    { label: "FSP Number", value: "FSP 48947" },
                    { label: "Founded", value: "2018" },
                    { label: "Training", value: "Ernst and Young, Pretoria and Bermuda" },
                    { label: "Prior role", value: "Commodity Trading, Export Trading Group" },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: "2px", paddingBottom: "1rem", borderBottom: "1px solid var(--cn-border)" }}>
                      <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)" }}>{item.label}</span>
                      <span style={{ fontSize: "15px", color: "var(--cn-text-primary)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Long-form content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
              <FadeIn>
                <div>
                  <div className="cn-section-title" style={{ marginBottom: "1.5rem" }}>
                    <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>The canonical record.</h2>
                  </div>
                  <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    Cobus Nel is a Chartered Accountant (CA(SA)) and the Chief Investment Officer of Eridanus, a registered Financial Services Provider (FSP 48947) and Section 12J venture capital company backing real South African agricultural assets since 2018. He trained at Ernst and Young in Pretoria and Bermuda. He completed his CA(SA) articles at EY Pretoria, passed all board exams first time, and was seconded to EY Bermuda for international financial structures work.
                  </p>
                  <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.8 }}>
                    Before founding Eridanus with co-founder Martin van Vuuren, Cobus traded commodities at Export Trading Group: maize, soya, wheat, barley, sunflowers, fertilizer. He valued real agricultural assets. He understood supply chains and international markets from the inside. He has hands-on farming, business rescue, and liquidation experience.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <div>
                  <div className="cn-section-title" style={{ marginBottom: "1.5rem" }}>
                    <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>The path.</h2>
                  </div>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    The path from EY Pretoria to EY Bermuda to commodity trading to agricultural venture capital is not a conventional one. It is the path of an operator who wanted to understand capital from the inside: how it is structured, how it is deployed, how it performs when the underlying asset is real and physical rather than a number on a screen.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    Business rescues and liquidations are not failures on a CV. They are the education that teaches an operator what real assets look like under pressure, which structures hold and which collapse, and what the difference is between a number that looks good and a number that is real.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8 }}>
                    That education is what Eridanus is built on. Every asset Eridanus acquires is evaluated through the lens of an operator who has seen what happens when the numbers stop working.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={150}>
                <div style={{ backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", padding: "2.5rem" }}>
                  <p className="cn-pull-quote">
                    "I help R1 million-plus investors stop being the depositor and start being the bank. Net returns. After SARS. After everything."
                  </p>
                  <p style={{ marginTop: "1.5rem", fontSize: "13px", color: "var(--cn-text-faint)", letterSpacing: "0.08em" }}>Cobus Nel, CA(SA) | CIO, Eridanus</p>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div>
                  <div className="cn-section-title" style={{ marginBottom: "1.5rem" }}>
                    <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>Eridanus: the vehicle.</h2>
                  </div>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    Eridanus is a registered Financial Services Provider (FSP 48947) and a Section 12J venture capital company. It was founded in 2018 by Cobus Nel and Martin van Vuuren. It backs real South African agricultural assets: physical, productive, and valued by operators who understand what they are buying.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    The Eridanus investment structure acquires assets at below-market value. Investor capital deploys into assets worth more than the entry price from day one. Returns are fixed, agreed before investing, and quoted net after dividends withholding tax and SARS assessment. Not gross. Not before tax. The number the investor actually keeps.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8 }}>
                    Monthly statements. Full documentation transparency. A team of professionals who can assist with financial structures, insurance, accounting, and legal advice. The Discovery Session is the entry point to that conversation.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={250}>
                <div>
                  <div className="cn-section-title" style={{ marginBottom: "1.5rem" }}>
                    <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>The standard.</h2>
                  </div>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                    The CA(SA) designation is not a credential that sits on a wall. It is a standard of conduct. It means the numbers are right. It means the structure is sound. It means the investor's capital is handled with the precision of a chartered accountant who has been through EY's training in two jurisdictions and has valued real assets in the field.
                  </p>
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8 }}>
                    The investor who works with Cobus Nel is not working with a salesperson. They are working with an operator who has skin in the same assets, who quotes net returns because that is the only number that matters, and who will tell them exactly what they own before a single rand is deployed.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={300}>
                <div style={{ paddingTop: "2rem", borderTop: "1px solid var(--cn-border)" }}>
                  <img
                    src={TRUST_VISUAL}
                    alt="Formal mandate signing"
                    style={{ width: "100%", borderRadius: "2px", objectFit: "cover", height: "300px", marginBottom: "2rem" }}
                  />
                  <p style={{ fontSize: "15px", color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                    Every mandate is documented. Every return is agreed before deployment. Every structure is transparent. That is the standard Cobus Nel holds himself to, and the standard every investor who works with him should expect.
                  </p>
                  <Link href="/apply">
                    <span className="cn-btn-primary">
                      Apply for a Discovery Session <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
