/**
 * Capital Diagnostic - cobusnel.com/capital-diagnostic
 * Design: Institutional Gravity — extended with HALO asset visual anchoring
 * Meta-compliant: no specific return projections, diagnostic framing only
 * Outpositions: Tigris x Discovery, 4AM Wealth Calculator
 */
import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, TrendingUp, Landmark, Droplets, CheckCircle2, ChevronDown } from "lucide-react";

// Public CDN asset URLs (Vercel-compatible)
const HERO_FARMLAND = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/bfaNdLfVofVBXCpU.jpg";
const WATER_INFRA = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/bMXIzQNZjDZBnAvH.jpg";
const CATTLE_LAND = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/cqaFsOFGmFXnRMRK.jpg";
const HALO_TEXTURE = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/TwYjgcaZfhCEyWzQ.jpg";

// Logo assets
const LOGO_KYKNET = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/WWKlZfcTfPTrnvWl.png";
const LOGO_ONTBYT = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/UyOVDuntQbidIfCZ.png";
const LOGO_PRETORIA_FM = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/WUnIpufjtRKprHES.png";
const LOGO_EY = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/peICczlbTSWeWKgX.png";

// SA bank prime rate context (public knowledge, not advice)
const BANK_SAVINGS_RATE = 0.085; // ~8.5% gross savings
const INFLATION_RATE = 0.055;    // ~5.5% CPI
const BANK_SPREAD = 0.065;       // ~6.5% spread banks earn
const DIV_TAX = 0.20;            // 20% dividends withholding tax

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); observer.disconnect(); } },
      { threshold: 0.06 }
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

// Animated counter hook
function useCountUp(target: number, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) { setValue(0); return; }
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, active]);
  return value;
}

// Format rand
function formatRand(n: number): string {
  if (n >= 1_000_000) return `R${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `R${(n / 1_000).toFixed(0)}k`;
  return `R${n.toFixed(0)}`;
}

// Capital structure options
const STRUCTURES = [
  { value: "bank", label: "Bank savings / fixed deposit", grossRate: 0.085 },
  { value: "ra", label: "Retirement annuity", grossRate: 0.09 },
  { value: "unit-trust", label: "Unit trust / mutual fund", grossRate: 0.10 },
  { value: "property", label: "Property", grossRate: 0.07 },
  { value: "business", label: "Business / company", grossRate: 0.12 },
  { value: "other", label: "Other / not sure", grossRate: 0.075 },
];

// Capital slider steps
const CAPITAL_STEPS = [
  { value: 1_000_000, label: "R1M" },
  { value: 2_500_000, label: "R2.5M" },
  { value: 5_000_000, label: "R5M" },
  { value: 10_000_000, label: "R10M" },
  { value: 20_000_000, label: "R20M+" },
];

// HALO pillars
const HALO_PILLARS = [
  {
    letter: "H",
    title: "Hard to Fake",
    body: "Physical land and agricultural infrastructure. You can stand on it. You can touch it. It exists in the real world, not on a spreadsheet.",
    icon: <Shield size={22} color="var(--cn-gold)" />,
    image: CATTLE_LAND,
  },
  {
    letter: "A",
    title: "Anchored to Real Value",
    body: "Eridanus acquires assets at below-market value. Your capital is backed by assets worth more than the entry price from day one.",
    icon: <Landmark size={22} color="var(--cn-gold)" />,
    image: HERO_FARMLAND,
  },
  {
    letter: "L",
    title: "Low Obsolescence",
    body: "Agricultural land does not become technologically stranded. It does not depreciate like a car or a server. It produces, season after season.",
    icon: <TrendingUp size={22} color="var(--cn-gold)" />,
    image: WATER_INFRA,
  },
  {
    letter: "O",
    title: "Operator-Grounded",
    body: "Cobus Nel has farmed, traded commodities, and navigated business rescues. The person managing your capital has operated in the real world.",
    icon: <Droplets size={22} color="var(--cn-gold)" />,
    image: HALO_TEXTURE,
  },
];

// Case study placeholders
const CASE_STUDIES = [
  {
    profile: "Commercial Farmer, Limpopo",
    capital: "R100M+ in assets",
    challenge: "Wealth entirely concentrated in land and farming operations. No structured capital allocation outside the primary business.",
    outcome: "Restructured through Eridanus. Capital now working across secured agricultural assets independent of the primary farming cycle.",
    status: "live",
  },
  {
    profile: "Corporate Executive, Pretoria",
    capital: "R2.5M to R5M",
    challenge: "30 years of corporate income. Pension fund underperforming inflation. Capital sitting in bank deposits above the R200,000 protection threshold.",
    outcome: "Discovery Session completed. Capital restructured into a secured, asset-backed vehicle. Returns structured and agreed before deployment.",
    status: "live",
  },
  {
    profile: "Family Office, Gauteng",
    capital: "R10M+",
    challenge: "Seeking a secured, physical-asset-backed structure that operates independently of equity markets and currency volatility.",
    outcome: "Bespoke Eridanus structure. Capital secured against agricultural assets. Deal terms agreed before any capital was deployed.",
    status: "live",
  },
];

export default function CapitalDiagnostic() {
  const [capitalIndex, setCapitalIndex] = useState(1); // default R2.5M
  const [structure, setStructure] = useState("bank");
  const [showResult, setShowResult] = useState(false);
  const [resultActive, setResultActive] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Capital Diagnostic | Eridanus | Cobus Nel";
  }, []);

  const capital = CAPITAL_STEPS[capitalIndex].value;
  const selectedStructure = STRUCTURES.find(s => s.value === structure) || STRUCTURES[0];

  // Diagnostic calculations
  const grossReturn = capital * selectedStructure.grossRate;
  const inflationLoss = capital * INFLATION_RATE;
  const bankSpreadLoss = structure === "bank" ? capital * BANK_SPREAD : 0;
  const taxDrag = grossReturn * DIV_TAX;
  const netReturn = grossReturn - taxDrag;
  const totalLeakage = inflationLoss + (bankSpreadLoss * 0.3) + taxDrag;
  const efficiencyScore = Math.max(1, Math.min(10, Math.round(10 - (totalLeakage / capital) * 80)));

  // Animated values
  const animatedNet = useCountUp(Math.round(netReturn), 1000, resultActive);
  const animatedLeakage = useCountUp(Math.round(totalLeakage), 1000, resultActive);
  const animatedScore = useCountUp(efficiencyScore, 800, resultActive);

  const handleCalculate = useCallback(() => {
    setShowResult(true);
    setResultActive(false);
    setTimeout(() => {
      setResultActive(true);
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }, []);

  // Reset animation when inputs change
  useEffect(() => {
    if (showResult) {
      setResultActive(false);
      setTimeout(() => setResultActive(true), 100);
    }
  }, [capitalIndex, structure]);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background farmland image with parallax feel */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={HERO_FARMLAND}
            alt="South African agricultural land"
            style={{ width: "100%", height: "110%", objectFit: "cover", objectPosition: "center 40%", transform: "translateY(-5%)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.75) 50%, rgba(10,10,10,0.6) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 40%)" }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "140px", paddingBottom: "100px" }}>
          <div style={{ maxWidth: "680px" }}>
            <FadeIn>
              <p className="cn-eyebrow" style={{ marginBottom: "1.5rem" }}>Eridanus Capital Diagnostic</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h1 className="cn-headline" style={{ fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1.0, marginBottom: "2rem" }}>
                Your capital is working.<br />
                The question is:<br />
                <span style={{ color: "var(--cn-gold)" }}>for whom?</span>
              </h1>
            </FadeIn>
            <FadeIn delay={200}>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "520px", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                Most South African investors with R1 million or more are unknowingly leaving capital on the table. The diagnostic below shows you where. The Discovery Session shows you what to do about it.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#diagnostic" style={{ textDecoration: "none" }}>
                  <span className="cn-btn-primary">
                    Run My Diagnostic <ArrowRight size={14} />
                  </span>
                </a>
                <Link href="/for-investors">
                  <span className="cn-btn-ghost">
                    What is Eridanus?
                  </span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", gap: "2.5rem", flexWrap: "wrap" }}>
                {[
                  { figure: "FSP 48947", label: "FSCA Authorised" },
                  { figure: "CA(SA)", label: "Qualified Management" },
                  { figure: "2018", label: "Operating Since" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="cn-figure" style={{ fontSize: "18px" }}>{item.figure}</p>
                    <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.08em", marginTop: "4px" }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 2, animation: "bounce 2s infinite" }}>
          <ChevronDown size={24} color="rgba(212,165,116,0.6)" />
        </div>
        <style>{`
          @keyframes bounce {
            0%, 100% { transform: translateX(-50%) translateY(0); }
            50% { transform: translateX(-50%) translateY(8px); }
          }
        `}</style>
      </section>

      {/* ── AS SEEN ON ────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: "var(--cn-bg-secondary)", borderTop: "1px solid var(--cn-border)", borderBottom: "1px solid var(--cn-border)", padding: "36px 0" }}>
        <div className="container">
          <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cn-text-faint)", textAlign: "center", marginBottom: "28px" }}>As Seen On</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(2rem, 5vw, 4.5rem)", flexWrap: "wrap" }}>
            {[
              { src: LOGO_KYKNET, alt: "kykNET", h: "36px" },
              { src: LOGO_ONTBYT, alt: "Ontbyt Sake", h: "38px" },
              { src: LOGO_PRETORIA_FM, alt: "Pretoria FM", h: "40px" },
              { src: LOGO_EY, alt: "Ernst & Young", h: "34px" },
            ].map((logo) => (
              <div key={logo.alt}
                style={{ opacity: 0.5, transition: "opacity 250ms ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}>
                <img src={logo.src} alt={logo.alt} style={{ height: logo.h, width: "auto", maxWidth: "140px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE DIAGNOSTIC TOOL ───────────────────────────────────────────────── */}
      <section id="diagnostic" className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p className="cn-eyebrow">The Diagnostic</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1rem" }}>
                One slider. Your capital gap.
              </h2>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.75 }}>
                Move the slider to your capital position. Select how it is currently held. See your capital efficiency score instantly.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", padding: "clamp(1.5rem, 4vw, 3rem)" }}>

              {/* Capital slider */}
              <div style={{ marginBottom: "2.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.25rem" }}>
                  <label style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--cn-text-faint)" }}>
                    Capital available to work
                  </label>
                  <span className="cn-figure" style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "var(--cn-gold)", lineHeight: 1 }}>
                    {CAPITAL_STEPS[capitalIndex].label}
                  </span>
                </div>
                <div style={{ position: "relative", paddingBottom: "1.5rem" }}>
                  <input
                    type="range"
                    min={0}
                    max={CAPITAL_STEPS.length - 1}
                    value={capitalIndex}
                    onChange={(e) => setCapitalIndex(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--cn-gold)", cursor: "pointer", height: "4px" }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                    {CAPITAL_STEPS.map((step, i) => (
                      <span key={step.label} style={{ fontSize: "10px", color: i === capitalIndex ? "var(--cn-gold)" : "var(--cn-text-faint)", letterSpacing: "0.06em", fontWeight: i === capitalIndex ? 600 : 400, transition: "color 200ms ease" }}>
                        {step.label}
                      </span>
                    ))}
                  </div>
                </div>
                {capital < 1_000_000 && (
                  <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "0.5rem" }}>
                    The Discovery Session capital floor is R1 million.
                  </p>
                )}
              </div>

              {/* Structure dropdown */}
              <div style={{ marginBottom: "2.5rem" }}>
                <label style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--cn-text-faint)", display: "block", marginBottom: "0.875rem" }}>
                  How is it currently held?
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    className="cn-select"
                    value={structure}
                    onChange={(e) => setStructure(e.target.value)}
                    style={{ width: "100%", fontSize: "15px" }}
                  >
                    {STRUCTURES.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  <div style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--cn-text-faint)" }}>
                    <ChevronDown size={16} />
                  </div>
                </div>
              </div>

              {/* Calculate button */}
              <button
                onClick={handleCalculate}
                style={{
                  width: "100%",
                  padding: "18px",
                  backgroundColor: "var(--cn-gold)",
                  color: "#0a0a0a",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "0.04em",
                  transition: "transform 150ms ease, opacity 150ms ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.98)")}
                onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                Show Me My Capital Gap <ArrowRight size={18} />
              </button>

              {/* Result card */}
              {showResult && (
                <div ref={resultRef} style={{ marginTop: "2rem", borderTop: "1px solid var(--cn-border)", paddingTop: "2rem" }}>
                  <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem", textAlign: "center" }}>
                    Your Capital Diagnostic
                  </p>

                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)", marginBottom: "1.5rem" }}>
                    {/* Estimated net return */}
                    <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.5rem", textAlign: "center" }}>
                      <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Est. Net Return p.a.</p>
                      <p className="cn-figure" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "var(--cn-text-primary)", lineHeight: 1 }}>
                        {formatRand(animatedNet)}
                      </p>
                      <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", marginTop: "6px" }}>After dividends tax</p>
                    </div>
                    {/* Capital leakage */}
                    <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.5rem", textAlign: "center" }}>
                      <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Est. Annual Leakage</p>
                      <p className="cn-figure" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#c0392b", lineHeight: 1 }}>
                        {formatRand(animatedLeakage)}
                      </p>
                      <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", marginTop: "6px" }}>Inflation + tax drag</p>
                    </div>
                    {/* Efficiency score */}
                    <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.5rem", textAlign: "center", position: "relative" }}>
                      <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Capital Efficiency</p>
                      <p className="cn-figure" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: animatedScore >= 7 ? "var(--cn-gold)" : animatedScore >= 4 ? "#e67e22" : "#c0392b", lineHeight: 1 }}>
                        {animatedScore}<span style={{ fontSize: "16px", color: "var(--cn-text-faint)" }}>/10</span>
                      </p>
                      <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", marginTop: "6px" }}>
                        {animatedScore >= 7 ? "Working well" : animatedScore >= 4 ? "Room to improve" : "Significant gap"}
                      </p>
                    </div>
                  </div>

                  {/* Disclaimer */}
                  <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", lineHeight: 1.6, marginBottom: "1.5rem", textAlign: "center" }}>
                    Estimates based on publicly available South African interest rates and tax rates. This is not financial advice. Individual circumstances vary. Returns are not guaranteed.
                  </p>

                  {/* Gated CTA */}
                  <div style={{ backgroundColor: "rgba(212,165,116,0.06)", border: "1px solid rgba(212,165,116,0.2)", padding: "1.5rem 2rem", textAlign: "center" }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "20px", color: "var(--cn-text-primary)", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                      To see what your capital could look like inside a HALO asset structure, apply for a Discovery Session.
                    </p>
                    <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", marginBottom: "1.5rem", lineHeight: 1.65 }}>
                      The diagnostic above shows the gap. The Discovery Session shows you the structure. One session. Seven touchpoints. No obligation.
                    </p>
                    <Link href="/apply">
                      <span className="cn-btn-primary" style={{ fontSize: "14px", padding: "14px 32px" }}>
                        Apply for a Discovery Session <ArrowRight size={14} />
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── THE HALO FRAMEWORK ────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="cn-eyebrow">The Framework</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1rem" }}>
                The HALO Asset Framework.
              </h2>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75 }}>
                Four principles that define what Eridanus acquires, and why physical South African agricultural assets are the foundation of the structure.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)" }} className="cn-halo-grid">
            {HALO_PILLARS.map((pillar, i) => (
              <FadeIn key={pillar.letter} delay={i * 100}>
                <div style={{ backgroundColor: "var(--cn-bg-primary)", position: "relative", overflow: "hidden", minHeight: "320px", display: "flex", flexDirection: "column" }}>
                  {/* Background image */}
                  <div style={{ position: "absolute", inset: 0 }}>
                    <img src={pillar.image} alt={pillar.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.9) 100%)" }} />
                  </div>
                  {/* Content */}
                  <div style={{ position: "relative", zIndex: 2, padding: "2.5rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                    <div style={{ marginBottom: "1rem" }}>
                      <span className="cn-figure" style={{ fontSize: "56px", color: "var(--cn-gold)", lineHeight: 1, opacity: 0.3, position: "absolute", top: "1.5rem", right: "2rem" }}>
                        {pillar.letter}
                      </span>
                      <div style={{ marginBottom: "0.875rem" }}>{pillar.icon}</div>
                    </div>
                    <h3 className="cn-headline" style={{ fontSize: "24px", marginBottom: "0.75rem" }}>{pillar.title}</h3>
                    <p style={{ color: "var(--cn-text-secondary)", fontSize: "14px", lineHeight: 1.75 }}>{pillar.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/apply">
                <span className="cn-btn-primary">
                  Apply for a Discovery Session <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .cn-halo-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="cn-eyebrow">Investors Who Have Seen the Number</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1rem" }}>
                Who Eridanus is built for.
              </h2>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
                Representative profiles based on the investors Cobus works with. Names and identifying details are withheld by design.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)" }} className="cn-case-grid">
            {CASE_STUDIES.map((cs, i) => (
              <FadeIn key={cs.profile} delay={i * 100}>
                <div style={{ backgroundColor: "var(--cn-bg-secondary)", padding: "2.5rem", height: "100%", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  <div>
                    <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Investor Profile</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "20px", color: "var(--cn-text-primary)", lineHeight: 1.2 }}>{cs.profile}</p>
                    <p className="cn-figure" style={{ fontSize: "16px", color: "var(--cn-gold)", marginTop: "4px" }}>{cs.capital}</p>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>The Challenge</p>
                    <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.7 }}>{cs.challenge}</p>
                  </div>
                  <div style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--cn-border)" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                      <CheckCircle2 size={15} color="var(--cn-gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <p style={{ fontSize: "13px", color: "var(--cn-text-primary)", lineHeight: 1.65 }}>{cs.outcome}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/apply">
                <span className="cn-btn-primary">
                  Apply for a Discovery Session <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .cn-case-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── ABOUT COBUS ───────────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }} className="cn-about-split">
              <div>
                <p className="cn-eyebrow">The Operator</p>
                <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
                  Cobus Nel.<br />CA(SA). Operator. CIO.
                </h2>
                <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  Cobus Nel trained at Ernst and Young in Pretoria and Bermuda, passed all CA(SA) board exams first time, and traded commodities at Export Trading Group. He has hands-on farming experience and has navigated business rescues and liquidations.
                </p>
                <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                  He co-founded Eridanus with Martin van Vuuren in 2018. The firm is an FSCA-authorised Financial Services Provider (FSP 48947) acquiring real South African agricultural assets at below-market value.
                </p>
                <Link href="/about">
                  <span className="cn-btn-ghost">
                    Full biography <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--cn-border)" }}>
                {[
                  { badge: "CA(SA)", title: "Chartered Accountant", detail: "EY Pretoria and EY Bermuda. All board exams passed first time." },
                  { badge: "FSP 48947", title: "FSCA Authorised", detail: "Licensed and regulated by the Financial Sector Conduct Authority of South Africa." },
                  { badge: "VCC Active", title: "Venture Capital Company", detail: "SARS-approved VCC status. Active and registered with SARS." },
                  { badge: "2018", title: "Eridanus Founded", detail: "Operating since 2018. Acquiring South African agricultural assets at below-market value." },
                ].map((item) => (
                  <div key={item.badge} style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <span className="cn-figure" style={{ fontSize: "13px", color: "var(--cn-gold)", minWidth: "60px", paddingTop: "2px" }}>{item.badge}</span>
                    <div>
                      <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--cn-text-primary)", marginBottom: "3px" }}>{item.title}</p>
                      <p style={{ fontSize: "12px", color: "var(--cn-text-secondary)", lineHeight: 1.6 }}>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .cn-about-split { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────────── */}
      <section style={{ position: "relative", padding: "100px 0", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src={CATTLE_LAND} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
          <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(10,10,10,0.88)" }} />
        </div>
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <FadeIn>
            <div className="cn-gold-line" style={{ margin: "0 auto 1.5rem" }} />
            <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
              Your capital deserves a real conversation.
            </h2>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              The diagnostic shows the gap. The Discovery Session shows you the structure. Apply to qualify. Capital floor: R1 million.
            </p>
            {/* Trust logos at CTA */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {[
                { src: LOGO_KYKNET, alt: "kykNET", h: "24px" },
                { src: LOGO_ONTBYT, alt: "Ontbyt Sake", h: "26px" },
                { src: LOGO_PRETORIA_FM, alt: "Pretoria FM", h: "28px" },
                { src: LOGO_EY, alt: "EY", h: "22px" },
              ].map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: logo.h, width: "auto", objectFit: "contain", opacity: 0.35, filter: "brightness(0) invert(1)" }} />
              ))}
            </div>
            <Link href="/apply">
              <span className="cn-btn-primary" style={{ fontSize: "14px", padding: "18px 40px" }}>
                Apply for a Discovery Session <ArrowRight size={15} />
              </span>
            </Link>
            <p className="cn-disclaimer" style={{ marginTop: "2rem" }}>
              Eridanus is an authorised Financial Services Provider (FSP 48947). Returns are not guaranteed. All investments carry risk. This is not financial advice.
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
