/**
 * Apply - cobusnel.com
 * Design: Institutional Gravity. Qualification form with routing logic.
 * R1M-R2.5M → Capital Architect. R2.5M+ → Cobus direct. R5M+ → Priority.
 */
import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";

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

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  capitalRange: string;
  currentStructure: string;
  primaryGoal: string;
  timeframe: string;
  source: string;
  consent: boolean;
  disclaimer: boolean;
};

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  capitalRange: "",
  currentStructure: "",
  primaryGoal: "",
  timeframe: "",
  source: "",
  consent: false,
  disclaimer: false,
};

export default function Apply() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  useEffect(() => {
    document.title = "Apply for a Discovery Session | Cobus Nel | South Africa's Capital Architect";
  }, []);

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    if (!form.capitalRange) e.capitalRange = "Required";
    if (!form.primaryGoal.trim()) e.primaryGoal = "Required";
    if (!form.consent) e.consent = "You must agree to be contacted";
    if (!form.disclaimer) e.disclaimer = "You must acknowledge the disclaimer";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
  };

  const set = (field: keyof FormState, value: string | boolean) =>
    setForm((f) => ({ ...f, [field]: value }));

  const getRoutingMessage = () => {
    if (!form.capitalRange) return null;
    if (form.capitalRange === "below-1m") return { type: "info", msg: "Applications below R1 million are not currently qualifying for a Discovery Session. We will send you a resource that provides value and a clear path forward." };
    if (form.capitalRange === "1m-2.5m") return { type: "standard", msg: "Your application will be reviewed by a Capital Architect and you will be contacted to schedule your Discovery Session." };
    if (form.capitalRange === "2.5m-5m") return { type: "elevated", msg: "Applications at this tier are reviewed by Cobus directly. You will be contacted within 48 hours." };
    if (form.capitalRange === "5m-plus") return { type: "priority", msg: "Priority routing. Applications at this tier receive direct attention from Cobus Nel. You will be contacted within 24 hours." };
    return null;
  };

  const routing = getRoutingMessage();

  if (submitted) {
    return (
      <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
        <Navigation />
        <section style={{ paddingTop: "160px", paddingBottom: "120px" }}>
          <div className="container" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <div style={{ marginBottom: "2rem" }}>
              <CheckCircle size={48} color="var(--cn-gold)" style={{ margin: "0 auto" }} />
            </div>
            <h1 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
              Application received.
            </h1>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Thank you, {form.firstName}. Your application for a Discovery Session has been received and will be reviewed.
            </p>
            {routing && routing.type !== "info" && (
              <div style={{ backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", padding: "1.5rem", marginBottom: "2rem" }}>
                <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)", lineHeight: 1.7 }}>{routing.msg}</p>
              </div>
            )}
            <p className="cn-disclaimer">
              This is not a confirmation of investment. The Discovery Session is a diagnostic conversation. No obligation. Eridanus is a registered FSP (FSP 48947). All investments carry risk.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: "160px", paddingBottom: "64px", borderBottom: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem" }}>
              Apply
            </p>
            <h1 className="cn-headline" style={{ fontSize: "var(--type-hero)", maxWidth: "700px", marginBottom: "1.5rem" }}>
              Apply for a Discovery Session.
            </h1>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "560px", lineHeight: 1.75 }}>
              One session. A complete diagnostic of your capital position. The honest net-return discussion. No obligation. Capital floor: R1 million.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container">
          <div className="cn-about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
            {/* Left sidebar */}
            <FadeIn>
              <div style={{ position: "sticky", top: "100px" }}>
                <div className="cn-section-title" style={{ marginBottom: "2rem" }}>
                  <h2 className="cn-headline" style={{ fontSize: "var(--type-h3)" }}>What happens next.</h2>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { step: "01", title: "Application reviewed", desc: "Your application is reviewed within 24 to 48 hours. R5M+ applications receive priority routing." },
                    { step: "02", title: "Qualification call", desc: "A brief call to confirm your capital position and ensure the Discovery Session is the right next step." },
                    { step: "03", title: "Discovery Session scheduled", desc: "A structured, seven-touchpoint diagnostic. One session. No obligation." },
                  ].map((item) => (
                    <div key={item.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <span className="cn-step-number" style={{ minWidth: "28px" }}>{item.step}</span>
                      <div>
                        <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "17px", color: "var(--cn-text-primary)", marginBottom: "4px" }}>{item.title}</p>
                        <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.65 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Trust badges in sidebar */}
                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cn-border)" }}>
                  <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1rem" }}>As Seen On</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {[
                      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/WWKlZfcTfPTrnvWl.png", alt: "kykNET", label: "Television" },
                      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/UyOVDuntQbidIfCZ.png", alt: "Ontbyt Sake", label: "Business TV" },
                      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/NxNdeVnuNYsteQPY.png", alt: "Pretoria FM", label: "Radio" },
                      { src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663766167215/peICczlbTSWeWKgX.png", alt: "Ernst & Young", label: "CA(SA) Credential" },
                    ].map((logo) => (
                      <div key={logo.alt} style={{ display: "flex", alignItems: "center", gap: "0.875rem", padding: "0.625rem 0.875rem", backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)" }}>
                        <img src={logo.src} alt={logo.alt} style={{ height: "22px", width: "auto", maxWidth: "70px", objectFit: "contain", opacity: 0.65 }} />
                        <span style={{ fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.06em" }}>{logo.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cn-border)" }}>
                  <p className="cn-disclaimer">
                    This is not a commitment to invest. The Discovery Session is a diagnostic conversation. No obligation. Eridanus is a registered FSP (FSP 48947). All investments carry risk.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={150}>
              <form onSubmit={handleSubmit} noValidate>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  {/* Name row */}
                  <div className="cn-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="cn-label" htmlFor="firstName">First name</label>
                      <input
                        id="firstName"
                        className="cn-input"
                        type="text"
                        placeholder="Pieter"
                        value={form.firstName}
                        onChange={(e) => set("firstName", e.target.value)}
                      />
                      {errors.firstName && <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "4px" }}>{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="cn-label" htmlFor="lastName">Last name</label>
                      <input
                        id="lastName"
                        className="cn-input"
                        type="text"
                        placeholder="van der Merwe"
                        value={form.lastName}
                        onChange={(e) => set("lastName", e.target.value)}
                      />
                      {errors.lastName && <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "4px" }}>{errors.lastName}</p>}
                    </div>
                  </div>

                  {/* Contact row */}
                  <div className="cn-form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label className="cn-label" htmlFor="email">Email address</label>
                      <input
                        id="email"
                        className="cn-input"
                        type="email"
                        placeholder="pieter@example.co.za"
                        value={form.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                      {errors.email && <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "4px" }}>{errors.email}</p>}
                    </div>
                    <div>
                      <label className="cn-label" htmlFor="phone">Phone number</label>
                      <input
                        id="phone"
                        className="cn-input"
                        type="tel"
                        placeholder="+27 82 000 0000"
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                      {errors.phone && <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "4px" }}>{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Capital range */}
                  <div>
                    <label className="cn-label" htmlFor="capitalRange">Available capital to deploy</label>
                    <div style={{ position: "relative" }}>
                      <select
                        id="capitalRange"
                        className="cn-select"
                        value={form.capitalRange}
                        onChange={(e) => set("capitalRange", e.target.value)}
                      >
                        <option value="">Select a range</option>
                        <option value="below-1m">Below R1 million</option>
                        <option value="1m-2.5m">R1 million to R2.5 million</option>
                        <option value="2.5m-5m">R2.5 million to R5 million</option>
                        <option value="5m-plus">R5 million and above</option>
                      </select>
                      <div style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--cn-text-faint)" }}>
                        ↓
                      </div>
                    </div>
                    {errors.capitalRange && <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "4px" }}>{errors.capitalRange}</p>}
                    {routing && (
                      <div style={{
                        marginTop: "0.75rem",
                        padding: "0.875rem 1rem",
                        backgroundColor: routing.type === "info" ? "rgba(192, 57, 43, 0.08)" : "var(--cn-gold-subtle)",
                        border: `1px solid ${routing.type === "info" ? "rgba(192, 57, 43, 0.2)" : "rgba(196, 163, 90, 0.2)"}`,
                      }}>
                        <p style={{ fontSize: "13px", color: routing.type === "info" ? "var(--cn-error)" : "var(--cn-gold)", lineHeight: 1.6 }}>
                          {routing.msg}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Current structure */}
                  <div>
                    <label className="cn-label" htmlFor="currentStructure">How is your capital currently held?</label>
                    <select
                      id="currentStructure"
                      className="cn-select"
                      value={form.currentStructure}
                      onChange={(e) => set("currentStructure", e.target.value)}
                    >
                      <option value="">Select an option</option>
                      <option value="bank-savings">Bank savings account</option>
                      <option value="fixed-deposit">Fixed deposit</option>
                      <option value="unit-trust">Unit trust / mutual fund</option>
                      <option value="retirement-annuity">Retirement annuity</option>
                      <option value="direct-shares">Direct shares / equities</option>
                      <option value="property">Property</option>
                      <option value="trust">Trust</option>
                      <option value="company">Company / business</option>
                      <option value="combination">Combination of the above</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Primary goal */}
                  <div>
                    <label className="cn-label" htmlFor="primaryGoal">What is your primary goal for this capital?</label>
                    <textarea
                      id="primaryGoal"
                      className="cn-input"
                      placeholder="e.g. Preserve and grow capital with predictable net returns. Reduce tax exposure. Diversify away from bank deposits."
                      rows={3}
                      value={form.primaryGoal}
                      onChange={(e) => set("primaryGoal", e.target.value)}
                      style={{ resize: "vertical", fontFamily: "'Inter', sans-serif" }}
                    />
                    {errors.primaryGoal && <p style={{ fontSize: "12px", color: "var(--cn-error)", marginTop: "4px" }}>{errors.primaryGoal}</p>}
                  </div>

                  {/* Timeframe */}
                  <div>
                    <label className="cn-label" htmlFor="timeframe">Investment timeframe</label>
                    <select
                      id="timeframe"
                      className="cn-select"
                      value={form.timeframe}
                      onChange={(e) => set("timeframe", e.target.value)}
                    >
                      <option value="">Select a timeframe</option>
                      <option value="immediate">Immediate (within 30 days)</option>
                      <option value="short">Short term (1 to 3 months)</option>
                      <option value="medium">Medium term (3 to 6 months)</option>
                      <option value="exploring">Exploring options, no fixed timeframe</option>
                    </select>
                  </div>

                  {/* Source */}
                  <div>
                    <label className="cn-label" htmlFor="source">How did you hear about Cobus Nel?</label>
                    <select
                      id="source"
                      className="cn-select"
                      value={form.source}
                      onChange={(e) => set("source", e.target.value)}
                    >
                      <option value="">Select an option</option>
                      <option value="referral">Personal referral</option>
                      <option value="social-media">Social media</option>
                      <option value="tv">Television</option>
                      <option value="podcast">Podcast</option>
                      <option value="search">Search engine</option>
                      <option value="article">Article or publication</option>
                      <option value="event">Event or conference</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Consent */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    <label className="cn-checkbox-label">
                      <input
                        type="checkbox"
                        className="cn-checkbox"
                        checked={form.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                      />
                      <span>I consent to being contacted by Cobus Nel and the Eridanus team regarding my application and the Discovery Session process.</span>
                    </label>
                    {errors.consent && <p style={{ fontSize: "12px", color: "var(--cn-error)" }}>{errors.consent}</p>}

                    <label className="cn-checkbox-label">
                      <input
                        type="checkbox"
                        className="cn-checkbox"
                        checked={form.disclaimer}
                        onChange={(e) => set("disclaimer", e.target.checked)}
                      />
                      <span>I acknowledge that this application is not a commitment to invest, that the Discovery Session is a diagnostic conversation with no obligation, and that Eridanus is a registered FSP (FSP 48947) and all investments carry risk. This is not financial advice.</span>
                    </label>
                    {errors.disclaimer && <p style={{ fontSize: "12px", color: "var(--cn-error)" }}>{errors.disclaimer}</p>}
                  </div>

                  {/* Submit */}
                  <div>
                    <button
                      type="submit"
                      className="cn-btn-primary"
                      disabled={submitting}
                      style={{ opacity: submitting ? 0.7 : 1, width: "100%", justifyContent: "center", fontSize: "14px", padding: "16px 32px" }}
                    >
                      {submitting ? "Submitting..." : <>Submit Application <ArrowRight size={14} /></>}
                    </button>
                    <p className="cn-disclaimer" style={{ marginTop: "1rem" }}>
                      Your information is held in confidence and will not be shared with third parties without your consent. Eridanus is a registered FSP (FSP 48947). All investments carry risk.
                    </p>
                  </div>
                </div>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
