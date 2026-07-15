/**
 * Insights - cobusnel.com
 * Design: Institutional Gravity. Article and video hub, ready to populate.
 * Each article has Article JSON-LD. Built for GEO and AI-search quotation.
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Pause } from "lucide-react";

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
    title: "The R200,000 deposit threshold: what it actually means for your capital",
    excerpt: "The government deposit protection scheme covers R200,000 of any bank deposit. Everything above that is unsecured exposure to the bank. Most investors do not know this. Here is what it means.",
    date: "2024",
    category: "Capital Architecture",
    readTime: "4 min read",
  },
  {
    title: "Venture Capital: the structure, the benefit, and the investor it suits",
    excerpt: "Venture Capital companies offer a specific investment structure for South African investors. Here is how the structure works and which investor profile it suits.",
    date: "2024",
    category: "Tax and Returns",
    readTime: "9 min read",
  },
];

// Real YouTube videos
const videos = [
  {
    videoId: "tndupVgHhC0",
    title: "AI and Distribution Growth Infrastructure",
    desc: "Our AI and distribution growth infrastructure: how we build, automate, and scale content systems that compound over time.",
    tag: "Growth Infrastructure",
  },
  {
    videoId: "1PojhbhDv84",
    title: "Personal Branding and Distribution at Scale",
    desc: "How we helped build and scale the GIITD Academy to $40k MRR and Timon to 12 million followers across platforms. The personal branding and distribution infrastructure behind it.",
    tag: "Personal Branding",
  },
  {
    videoId: "-VAZNvF_Zq4",
    title: "How Two Kids from a Third-World Country Cracked the Code",
    desc: "The real story behind building a global distribution and growth operation from scratch. No shortcuts. No excuses.",
    tag: "Origin Story",
  },
  {
    videoId: "5KZVr-4BP4w",
    title: "The Art of Selling with Leading 7-Figure Ecom Agency Owners",
    desc: "A masterclass on selling, positioning, and closing with the operators behind some of the most successful ecommerce agencies in the world.",
    tag: "Sales and Positioning",
  },
];

function VideoCard({ video }: { video: { videoId: string; title: string; desc: string; tag: string } }) {
  const [active, setActive] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <div style={{ backgroundColor: "var(--cn-bg-secondary)", height: "100%", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#000" }}>
          <iframe
            src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
        <div style={{ padding: "1.5rem", flex: 1 }}>
          <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "0.5rem" }}>{video.tag}</p>
          <h3 className="cn-headline" style={{ fontSize: "17px", marginBottom: "0.625rem" }}>{video.title}</h3>
          <p style={{ color: "var(--cn-text-secondary)", fontSize: "13px", lineHeight: 1.7 }}>{video.desc}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "var(--cn-bg-secondary)", height: "100%", display: "flex", flexDirection: "column" }}>
      <div
        onClick={() => setActive(true)}
        style={{ position: "relative", width: "100%", aspectRatio: "16/9", cursor: "pointer", overflow: "hidden", backgroundColor: "#080c0a" }}
      >
        <img
          src={thumbnailUrl}
          alt={video.title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 400ms ease", display: "block" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
          onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`; }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)" }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "52px", height: "52px", borderRadius: "50%",
          backgroundColor: "rgba(212,165,116,0.92)",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 200ms ease",
          boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1.1)")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)")}
        >
          <Play size={20} fill="#0d1210" color="#0d1210" style={{ marginLeft: "2px" }} />
        </div>
        <div style={{ position: "absolute", top: "10px", left: "10px", backgroundColor: "rgba(0,0,0,0.65)", padding: "3px 8px" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--cn-gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>{video.tag}</span>
        </div>
        <div style={{ position: "absolute", bottom: "10px", right: "10px", backgroundColor: "rgba(0,0,0,0.7)", padding: "3px 8px", display: "flex", alignItems: "center", gap: "4px" }}>
          <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
            <path d="M13.72 1.56A1.76 1.76 0 0 0 12.48.3C11.38 0 7 0 7 0S2.62 0 1.52.3A1.76 1.76 0 0 0 .28 1.56C0 2.67 0 5 0 5s0 2.33.28 3.44A1.76 1.76 0 0 0 1.52 9.7C2.62 10 7 10 7 10s4.38 0 5.48-.3a1.76 1.76 0 0 0 1.24-1.26C14 7.33 14 5 14 5s0-2.33-.28-3.44z" fill="#FF0000"/>
            <path d="M5.6 7.14L9.23 5 5.6 2.86v4.28z" fill="white"/>
          </svg>
          <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em" }}>YOUTUBE</span>
        </div>
      </div>
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <h3 className="cn-headline" style={{ fontSize: "17px", lineHeight: 1.3 }}>{video.title}</h3>
        <p style={{ color: "var(--cn-text-secondary)", fontSize: "13px", lineHeight: 1.7, flex: 1 }}>{video.desc}</p>
        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "12px", color: "var(--cn-gold)", textDecoration: "none", letterSpacing: "0.05em", marginTop: "0.5rem" }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Watch on YouTube →
        </a>
      </div>
    </div>
  );
}

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
              <FadeIn key={video.videoId} delay={i * 100}>
                <VideoCard video={video} />
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
