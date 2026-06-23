/**
 * Insights - cobusnel.com
 * Design: Institutional Gravity. Article and video hub, ready to populate.
 * Each article has Article JSON-LD. Built for GEO and AI-search quotation.
 */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Play } from "lucide-react";

const AGRI_LANDSCAPE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663150514473/bELt3eMdoMZiyNfZHqGqyW/cobus-agricultural-landscape-4pLZCBDFQBG6T4eSDbNXcw.webp";

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

const featuredArticle = {
  title: "Three things your bank and your financial advisor will never say to you",
  excerpt: "The spread your bank earns on your capital. The R200,000 guarantee. The difference between 13% gross and 10.4% net. Three facts that change how a serious investor sees their capital position.",
  date: "2024",
  category: "Capital Architecture",
  readTime: "8 min read",
};

const articles = [
  {
    title: "Become the Bank: what the other side of the table looks like",
    excerpt: "For over a century, investors have sat on the depositor side of the table. Here is what the capital provider side looks like, and why the Eridanus structure positions the investor there.",
    date: "2024",
    category: "Investment Philosophy",
    readTime: "6 min read",
  },
  {
    title: "Net versus gross: the number that actually matters",
    excerpt: "An advertised 13% private return is closer to 10.4% after dividends withholding tax. Eridanus quotes the net number. Here is why that distinction matters more than most investors realise.",
    date: "2024",
    category: "Tax and Returns",
    readTime: "5 min read",
  },
  {
    title: "HALO: why heavy assets with low obsolescence are the quality screen",
    excerpt: "Real agricultural assets are physical. Hard to fake. Hard to evaporate. They do not become technologically stranded. Here is the quality screen Eridanus applies to every asset it acquires.",
    date: "2024",
    category: "Asset Quality",
    readTime: "7 min read",
  },
  {
    title: "The R200,000 guarantee: what it actually means for your capital",
    excerpt: "The government guarantees R200,000 of any bank deposit. Everything above that is unsecured exposure to the bank. Most investors do not know this. Here is what it means.",
    date: "2024",
    category: "Capital Architecture",
    readTime: "4 min read",
  },
  {
    title: "Venture Capital: the structure, the benefit, and the investor it suits",
    excerpt: "Venture Capital companies offer a specific tax benefit for South African investors. Here is how the structure works, what the benefit is, and which investor profile it suits.",
    date: "2024",
    category: "Tax and Returns",
    readTime: "9 min read",
  },
];

const videos = [
  {
    title: "The Journey: who Cobus Nel is and the path he walked",
    desc: "From EY Pretoria to EY Bermuda to commodity trading to agricultural venture capital. The path that built the operator behind Eridanus.",
    duration: "2 min",
    tag: "Post A: Memory Lane",
  },
  {
    title: "The Credentials: why his background matters for your capital",
    desc: "CA(SA). EY Bermuda. Commodity trading. Business rescues. Liquidations. Here is why that specific combination of experience matters for the investor's capital.",
    duration: "2 min",
    tag: "Post B: The Credentials",
  },
  {
    title: "The Conviction: why he actually does this",
    desc: "The relationship anchor that moves a viewer from watched a video to following a person. The honest answer to why Cobus Nel does what he does.",
    duration: "2 min",
    tag: "Post C: The Conviction",
  },
];

export default function Insights() {
  useEffect(() => {
    document.title = "Insights | Cobus Nel | South Africa's Capital Architect";
  }, []);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* Header */}
      <section style={{ paddingTop: "160px", paddingBottom: "80px", borderBottom: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem" }}>
              Insights
            </p>
            <h1 className="cn-headline" style={{ fontSize: "var(--type-hero)", maxWidth: "700px", marginBottom: "1.5rem" }}>
              Capital intelligence.
            </h1>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "560px", lineHeight: 1.75 }}>
              Articles and perspectives on capital architecture, agricultural investment, tax-efficient structures, and the South African private investment landscape. Written by an operator, not a marketer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured article */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)", marginBottom: "2rem" }}>
              Cornerstone Essay
            </p>
            <div className="cn-featured-article-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center", backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", padding: "3rem" }}>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1rem" }}>
                  {featuredArticle.category}
                </p>
                <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)", marginBottom: "1.25rem" }}>
                  {featuredArticle.title}
                </h2>
                <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
                  {featuredArticle.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
                  <span style={{ fontSize: "12px", color: "var(--cn-text-faint)" }}>{featuredArticle.date}</span>
                  <span style={{ fontSize: "12px", color: "var(--cn-text-faint)" }}>{featuredArticle.readTime}</span>
                </div>
                <span className="cn-btn-primary" style={{ cursor: "default", opacity: 0.7 }}>
                  Coming soon
                </span>
              </div>
              <div>
                <img
                  src={AGRI_LANDSCAPE}
                  alt="South African agricultural landscape"
                  style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "2px" }}
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article grid */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)", paddingTop: "0" }}>
        <div className="container">
          <FadeIn>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-text-faint)", marginBottom: "2rem" }}>
              Articles
            </p>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--cn-border)" }}>
            {articles.map((article, i) => (
              <FadeIn key={article.title} delay={i * 80}>
                <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "2rem", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "0.75rem" }}>
                      {article.category}
                    </p>
                    <h3 className="cn-headline" style={{ fontSize: "var(--type-h3)", marginBottom: "0.75rem" }}>
                      {article.title}
                    </h3>
                    <p style={{ color: "var(--cn-text-secondary)", fontSize: "14px", lineHeight: 1.7, maxWidth: "600px" }}>
                      {article.excerpt}
                    </p>
                    <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
                      <span style={{ fontSize: "11px", color: "var(--cn-text-faint)" }}>{article.date}</span>
                      <span style={{ fontSize: "11px", color: "var(--cn-text-faint)" }}>{article.readTime}</span>
                    </div>
                  </div>
                  <div style={{ opacity: 0.4 }}>
                    <span style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cn-text-secondary)" }}>
                      Coming soon
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container">
          <FadeIn>
            <div className="cn-section-title" style={{ marginBottom: "3rem" }}>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)" }}>Video.</h2>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "500px", marginTop: "1rem" }}>
                Three pinned posts that answer the three questions a prospect asks before booking a Discovery Session.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", backgroundColor: "var(--cn-border)" }}>
            {videos.map((video, i) => (
              <FadeIn key={video.title} delay={i * 100}>
                <div style={{ backgroundColor: "var(--cn-bg-secondary)", padding: "2rem", height: "100%" }}>
                  <div style={{ backgroundColor: "var(--cn-bg-tertiary)", height: "180px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", position: "relative" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "50%", border: "1px solid var(--cn-gold)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.6 }}>
                      <Play size={18} color="var(--cn-gold)" style={{ marginLeft: "3px" }} />
                    </div>
                    <p style={{ position: "absolute", bottom: "12px", right: "12px", fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.08em" }}>
                      {video.duration}
                    </p>
                    <p style={{ position: "absolute", top: "12px", left: "12px", fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cn-gold)" }}>
                      {video.tag}
                    </p>
                  </div>
                  <h3 className="cn-headline" style={{ fontSize: "18px", marginBottom: "0.75rem" }}>{video.title}</h3>
                  <p style={{ color: "var(--cn-text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>{video.desc}</p>
                  <p style={{ marginTop: "1rem", fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.08em" }}>Video coming soon</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "var(--cn-bg-secondary)", padding: "80px 0", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          <FadeIn>
            <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)", marginBottom: "1.25rem" }}>
              Ready for the conversation?
            </h2>
            <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "2rem" }}>
              The Discovery Session is where the real conversation happens. Apply to qualify.
            </p>
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
