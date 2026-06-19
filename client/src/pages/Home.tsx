/**
 * Home - cobusnel.com
 * Design: Institutional Gravity
 * Trust Architecture: Multi-layer credibility system
 * Sections: Hero, Credibility bar, Featured Media (YouTube + Radio), The Problem,
 *           The Architect, The Structure (Eridanus), Return Tiers,
 *           Client Archetypes (Case Studies), Discovery Session CTA, Final CTA
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, TrendingUp, Landmark, Play, Volume2, CheckCircle2, Quote, Pause, Radio } from "lucide-react";

// Asset URLs
const HERO_PORTRAIT = "/manus-storage/cobus-nel-portrait_3318fdaa.jpg";
// Logo assets — CSS filter: brightness(0) invert(1) forces any logo to pure white
const LOGO_KYKNET = "/manus-storage/logo-kyknet-t_642a2cc4.png";
const LOGO_ONTBYT = "/manus-storage/logo-ontbyt-sake-t_39350ed0.png";
const LOGO_PRETORIA_FM = "/manus-storage/logo-pretoria-fm-original_70d6d151.png"; // original coloured logo
const LOGO_EY = "/manus-storage/logo-ey-t_ba28f461.png";
// Audio assets — Pretoria FM interviews
const AUDIO_1 = "/manus-storage/ht-250822-Eridanus_c5a2508d.mp3"; // Aug 2022
const AUDIO_2 = "/manus-storage/HT-260311-ERIDANUS_ba7f8ddb.mp3"; // Mar 2026
// YouTube Video IDs
const ONTBYT_SAKE_VIDEO_1 = "ROxZpJNAazM"; // https://youtu.be/ROxZpJNAazM
const ONTBYT_SAKE_VIDEO_2 = "pKEN61_0fMc"; // https://youtu.be/pKEN61_0fMc

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

// Lazy-load YouTube embed with thumbnail + play button
function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  const [active, setActive] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (active) {
    return (
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", backgroundColor: "#000" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setActive(true)}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16/9",
        cursor: "pointer",
        overflow: "hidden",
        backgroundColor: "#080c0a",
      }}
    >
      <img
        src={thumbnailUrl}
        alt={title}
        loading="lazy"
        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 400ms ease", display: "block" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
        onError={(e) => {
          // Fallback to hq thumbnail if maxres not available
          (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)" }} />
      {/* Play button */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        backgroundColor: "rgba(212, 165, 116, 0.92)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 200ms ease, background-color 200ms ease",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1.1)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(212, 165, 116, 1)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "translate(-50%, -50%) scale(1)"; (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(212, 165, 116, 0.92)"; }}
      >
        <Play size={24} fill="#0d1210" color="#0d1210" style={{ marginLeft: "3px" }} />
      </div>
      {/* YouTube badge */}
      <div style={{ position: "absolute", bottom: "12px", right: "12px", backgroundColor: "rgba(0,0,0,0.75)", padding: "3px 8px", display: "flex", alignItems: "center", gap: "5px" }}>
        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
          <path d="M13.72 1.56A1.76 1.76 0 0 0 12.48.3C11.38 0 7 0 7 0S2.62 0 1.52.3A1.76 1.76 0 0 0 .28 1.56C0 2.67 0 5 0 5s0 2.33.28 3.44A1.76 1.76 0 0 0 1.52 9.7C2.62 10 7 10 7 10s4.38 0 5.48-.3a1.76 1.76 0 0 0 1.24-1.26C14 7.33 14 5 14 5s0-2.33-.28-3.44z" fill="#FF0000"/>
          <path d="M5.6 7.14L9.23 5 5.6 2.86v4.28z" fill="white"/>
        </svg>
        <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: "0.08em" }}>YOUTUBE</span>
      </div>
    </div>
  );
}

// Pretoria FM inline audio player component
function PretoriaFMPlayer({ src, title, date }: { src: string; title: string; date: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) { a.pause(); setPlaying(false); }
    else { a.play(); setPlaying(true); }
  };

  const fmt = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (!a) return;
    setCurrentTime(a.currentTime);
    setProgress(a.duration ? (a.currentTime / a.duration) * 100 : 0);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const a = audioRef.current;
    if (!a || !a.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    a.currentTime = pct * a.duration;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={() => { setPlaying(false); setProgress(0); setCurrentTime(0); }}
      />
      <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
        {/* Play/Pause button */}
        <button
          onClick={toggle}
          style={{
            width: "40px", height: "40px", borderRadius: "50%",
            backgroundColor: "var(--cn-gold)", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, transition: "transform 150ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing
            ? <Pause size={16} fill="#0d1210" color="#0d1210" />
            : <Play size={16} fill="#0d1210" color="#0d1210" style={{ marginLeft: "2px" }} />}
        </button>
        {/* Track info + progress */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
            <span style={{ fontSize: "12px", color: "var(--cn-text-primary)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "70%" }}>{title}</span>
            <span style={{ fontSize: "11px", color: "var(--cn-text-faint)", flexShrink: 0 }}>{fmt(currentTime)} / {duration ? fmt(duration) : "--:--"}</span>
          </div>
          {/* Progress bar */}
          <div
            onClick={handleSeek}
            style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px", cursor: "pointer", position: "relative" }}
          >
            <div style={{ height: "100%", width: `${progress}%`, backgroundColor: "var(--cn-gold)", borderRadius: "2px", transition: "width 0.1s linear" }} />
          </div>
        </div>
      </div>
      <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.06em" }}>{date}</p>
    </div>
  );
}

// ICP Case Study data — anonymized archetypes based on Eridanus ICP research
const CASE_STUDIES = [
  {
    archetype: "The Late-Career Professional",
    profile: "Corporate Executive, Pretoria",
    capitalRange: "R2.5M – R5M",
    challenge: "30 years of corporate income, a pension fund performing below inflation, and a tax bill that consumed 40% of annual earnings. His capital was working for the bank, not for him.",
    structure: "Cobus restructured his capital allocation into a Section 12J vehicle, reducing his taxable income in the year of investment and securing a fixed net return against physical agricultural assets.",
    outcome: "~11.5% net per annum",
    quote: "For the first time, I understood exactly what my money was doing and why. Not a projection. A structure.",
    icon: <Landmark size={20} color="var(--cn-gold)" />,
  },
  {
    archetype: "The Entrepreneur Diversifying",
    profile: "Managing Director, Family Business",
    capitalRange: "R5M+",
    challenge: "His entire net worth was tied to a single business cycle. If the business had a bad year, everything had a bad year. He needed capital that operated independently of his trading environment.",
    structure: "Eridanus provided a secured, hard-asset allocation that decouples his investment returns from his business cycle. The agricultural assets are not correlated to his industry.",
    outcome: "~12.5% net per annum",
    quote: "I finally have capital that doesn't care what happens in my sector. It just works.",
    icon: <TrendingUp size={20} color="var(--cn-gold)" />,
  },
  {
    archetype: "The Security-Driven Allocator",
    profile: "Former Entrepreneur, Family Office",
    capitalRange: "R10M+",
    challenge: "He had seen too many 'guaranteed returns' schemes collapse. His primary concern was not yield — it was security. He wanted to understand exactly what his capital was secured against before he would consider any conversation.",
    structure: "The Eridanus structure secured his capital against physical agricultural assets valued above the entry price from day one. Fixed net returns. Agreed before deployment. No ambiguity.",
    outcome: "Bespoke structure",
    quote: "Cobus was the first person who showed me the asset before asking for the capital.",
    icon: <Shield size={20} color="var(--cn-gold)" />,
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Cobus Nel | South Africa's Capital Architect";
  }, []);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "stretch",
        position: "relative",
      }}>
        {/* Left: copy */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "140px 4rem 80px 4rem",
          position: "relative",
          zIndex: 2,
        }}>
          <FadeIn>
            <p className="cn-eyebrow">South Africa's Capital Architect</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="cn-headline" style={{ fontSize: "var(--type-hero)", marginBottom: "1.75rem", lineHeight: 1.02 }}>
              Your capital<br />
              should work<br />
              <span style={{ color: "var(--cn-gold)" }}>harder.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "480px", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Cobus Nel is a CA(SA) and the Chief Investment Officer of Eridanus — a registered Section 12J venture capital company acquiring real South African agricultural assets at below-market value. Fixed net returns. Secured by physical assets.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/apply">
                <span className="cn-btn-primary">
                  Apply for a Discovery Session <ArrowRight size={14} />
                </span>
              </Link>
              <Link href="/for-investors">
                <span className="cn-btn-ghost">
                  How it works
                </span>
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={400}>
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--cn-border)", display: "flex", gap: "2.5rem" }}>
              {[
                { figure: "2018", label: "Founded" },
                { figure: "FSP 48947", label: "Registered FSP" },
                { figure: "Sec. 12J", label: "VCC Status" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="cn-figure" style={{ fontSize: "18px" }}>{item.figure}</p>
                  <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.08em", marginTop: "4px" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: portrait */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={HERO_PORTRAIT}
            alt="Cobus Nel - South Africa's Capital Architect"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, var(--cn-bg-primary) 0%, transparent 20%, transparent 80%, var(--cn-bg-primary) 100%)",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "200px",
            background: "linear-gradient(to top, var(--cn-bg-primary), transparent)",
          }} />
        </div>

        {/* Bottom gradient */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
          background: "linear-gradient(to top, var(--cn-bg-primary), transparent)",
          zIndex: 3,
        }} />

        <style>{`
          @media (max-width: 900px) {
            section:first-of-type { grid-template-columns: 1fr !important; }
            section:first-of-type > div:last-child { display: none !important; }
            section:first-of-type > div:first-child { padding: 120px 1.5rem 64px !important; }
          }
        `}</style>
      </section>

      {/* ── AS SEEN ON / CREDIBILITY LOGO STRIP ────────────────────────────── */}
      <section style={{ backgroundColor: "var(--cn-bg-secondary)", borderTop: "1px solid var(--cn-border)", borderBottom: "1px solid var(--cn-border)", padding: "44px 0" }}>
        <div className="container">
          <p style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--cn-text-faint)", textAlign: "center", marginBottom: "32px" }}>As Seen On</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(2rem, 5vw, 4.5rem)", flexWrap: "wrap", rowGap: "2rem" }}>
            {[
              { src: LOGO_KYKNET, alt: "kykNET", h: "42px", white: true },
              { src: LOGO_ONTBYT, alt: "Ontbyt Sake", h: "44px", white: true },
              { src: LOGO_PRETORIA_FM, alt: "Pretoria FM", h: "48px", white: true },
              { src: LOGO_EY, alt: "Ernst & Young", h: "40px", white: true },
            ].map((logo) => (
              <div key={logo.alt}
                style={{ opacity: 0.55, transition: "opacity 250ms ease", cursor: "default", display: "flex", alignItems: "center", justifyContent: "center", height: "56px" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.55")}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    height: logo.h,
                    width: "auto",
                    maxWidth: "150px",
                    objectFit: "contain",
                    // Force white rendering for logos that already have white/transparent treatment
                    filter: logo.white ? "brightness(0) invert(1)" : "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED APPEARANCES — YOUTUBE EMBEDS ──────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)", borderBottom: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p className="cn-eyebrow">Featured Conversations</p>
                <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>Cobus on capital. On air.</h2>
              </div>
              <p style={{ fontSize: "13px", color: "var(--cn-text-faint)", maxWidth: "320px", lineHeight: 1.65, textAlign: "right" }}>
                Television and radio appearances on South African capital markets, agricultural investment, and tax-effective structures.
              </p>
            </div>
          </FadeIn>

          {/* Two YouTube videos side by side */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "var(--cn-border)", marginBottom: "1px" }}>
            <FadeIn delay={0}>
              <div style={{ backgroundColor: "var(--cn-bg-secondary)", display: "flex", flexDirection: "column", height: "100%" }}>
                <YouTubeEmbed videoId={ONTBYT_SAKE_VIDEO_1} title="Cobus Nel on Ontbyt Sake — Capital Structures" />
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="/manus-storage/logo-ontbyt-sake-t_39350ed0.png" alt="Ontbyt Sake" style={{ height: "22px", width: "auto", objectFit: "contain", opacity: 0.8 }} />
                    <span style={{ fontSize: "9px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase" }}>kykNET</span>
                    <span style={{ marginLeft: "auto", backgroundColor: "var(--cn-gold)", padding: "2px 8px", fontSize: "9px", fontWeight: 700, color: "#0d1210", letterSpacing: "0.12em", textTransform: "uppercase" }}>TV</span>
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "18px", color: "var(--cn-text-primary)", lineHeight: 1.3 }}>
                    Capital structures and agricultural investment in South Africa
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.65, flex: 1 }}>
                    Cobus Nel explains how Eridanus acquires physical agricultural assets at below-market value and why the Section 12J structure creates a compelling net-return case for serious investors.
                  </p>
                  <a href={`https://www.youtube.com/watch?v=${ONTBYT_SAKE_VIDEO_1}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "12px", color: "var(--cn-gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", marginTop: "auto", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div style={{ backgroundColor: "var(--cn-bg-secondary)", display: "flex", flexDirection: "column", height: "100%" }}>
                <YouTubeEmbed videoId={ONTBYT_SAKE_VIDEO_2} title="Cobus Nel on Ontbyt Sake — Investment Architecture" />
                <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src="/manus-storage/logo-ontbyt-sake-t_39350ed0.png" alt="Ontbyt Sake" style={{ height: "22px", width: "auto", objectFit: "contain", opacity: 0.8 }} />
                    <span style={{ fontSize: "9px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase" }}>kykNET</span>
                    <span style={{ marginLeft: "auto", backgroundColor: "var(--cn-gold)", padding: "2px 8px", fontSize: "9px", fontWeight: 700, color: "#0d1210", letterSpacing: "0.12em", textTransform: "uppercase" }}>TV</span>
                  </div>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "18px", color: "var(--cn-text-primary)", lineHeight: 1.3 }}>
                    Investment architecture for the South African investor
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.65, flex: 1 }}>
                    A second conversation on Ontbyt Sake covering the mechanics of tax-effective capital structures, the Eridanus investment vehicle, and what separates a secured return from a speculative one.
                  </p>
                  <a href={`https://www.youtube.com/watch?v=${ONTBYT_SAKE_VIDEO_2}`} target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "12px", color: "var(--cn-gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", marginTop: "auto", letterSpacing: "0.05em" }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                    Watch on YouTube →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Pretoria FM Radio Card — full width with inline audio players */}
          <FadeIn delay={200}>
            <div style={{ backgroundColor: "var(--cn-bg-secondary)", display: "grid", gridTemplateColumns: "280px 1fr", gap: "0", borderTop: "none" }} className="cn-radio-card">
              {/* Radio visual panel */}
              <div style={{
                backgroundColor: "#0a0a0c",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "2.5rem 2rem",
                borderRight: "1px solid var(--cn-border)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* Subtle radial glow */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 50% 40%, rgba(212,165,116,0.08) 0%, transparent 65%)" }} />
                {/* Pretoria FM logo — original coloured version looks great on dark */}
                <img
                  src={LOGO_PRETORIA_FM}
                  alt="Pretoria FM"
                  style={{ width: "120px", height: "auto", objectFit: "contain", position: "relative", borderRadius: "4px" }}
                />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", position: "relative" }}>
                  <Radio size={18} color="var(--cn-gold)" style={{ opacity: 0.8 }} />
                  <div style={{ backgroundColor: "rgba(212,165,116,0.12)", border: "1px solid rgba(212,165,116,0.25)", padding: "3px 12px" }}>
                    <span style={{ fontSize: "9px", fontWeight: 700, color: "var(--cn-gold)", letterSpacing: "0.16em", textTransform: "uppercase" }}>RADIO INTERVIEW</span>
                  </div>
                </div>
              </div>
              {/* Radio content with audio players */}
              <div style={{ padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Pretoria FM — Live Interviews</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "22px", color: "var(--cn-text-primary)", lineHeight: 1.3, marginBottom: "0.75rem" }}>
                    Cobus Nel on capital structures and the South African investor
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.7, maxWidth: "680px" }}>
                    Two live radio interviews on Pretoria FM. Cobus unpacks the mechanics of tax-effective capital structures, why most investors are unknowingly exposed above the R200,000 deposit guarantee, and what a secured, fixed-return alternative looks like.
                  </p>
                </div>
                {/* Audio players */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--cn-border)" }}>
                  <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.25rem 1.5rem" }}>
                    <PretoriaFMPlayer
                      src={AUDIO_1}
                      title="Eridanus — Capital Structures Interview"
                      date="Pretoria FM · August 2022"
                    />
                  </div>
                  <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.25rem 1.5rem" }}>
                    <PretoriaFMPlayer
                      src={AUDIO_2}
                      title="Eridanus — Investment Architecture Interview"
                      date="Pretoria FM · March 2026"
                    />
                  </div>
                </div>
                <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", lineHeight: 1.6 }}>
                  Interviews broadcast on Pretoria FM — Onafhanklike, Afrikaanse inhoud.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* EY Credential card — full width */}
          <FadeIn delay={250}>
            <div style={{ backgroundColor: "var(--cn-bg-secondary)", display: "grid", gridTemplateColumns: "auto 1fr", gap: "0", borderTop: "1px solid var(--cn-border)", marginTop: "1px" }}>
              <div style={{
                width: "280px",
                minHeight: "120px",
                backgroundColor: "#0c0c0c",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                padding: "2rem",
                borderRight: "1px solid var(--cn-border)",
                position: "relative",
                overflow: "hidden",
              }}>
                <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%)", backgroundSize: "60px 60px" }} />
                <img src="/manus-storage/logo-ey-t_ba28f461.png" alt="Ernst & Young" style={{ height: "44px", width: "auto", maxWidth: "120px", objectFit: "contain", position: "relative" }} />
                <div style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "3px 10px", position: "relative" }}>
                  <span style={{ fontSize: "9px", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em", textTransform: "uppercase" }}>CREDENTIAL</span>
                </div>
              </div>
              <div style={{ padding: "2rem 2.5rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.75rem" }}>
                <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Ernst & Young — Pretoria & Bermuda</p>
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "22px", color: "var(--cn-text-primary)", lineHeight: 1.3 }}>
                  CA(SA) — All board exams passed first time
                </p>
                <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.7, maxWidth: "680px" }}>
                  Cobus Nel completed his CA(SA) articles at EY Pretoria, passed all board exams first time, and was seconded to EY Bermuda for international financial structures work. The standard behind every number he quotes.
                </p>
                <a href="/about"
                  style={{ fontSize: "12px", color: "var(--cn-gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", marginTop: "0.25rem", letterSpacing: "0.05em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                  Read the full biography →
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <a href="/insights" style={{ fontSize: "12px", color: "var(--cn-text-faint)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cn-text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cn-text-faint)")}>
                View all appearances & insights →
              </a>
            </div>
          </FadeIn>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .cn-media-two-col { grid-template-columns: 1fr !important; }
            .cn-radio-card { grid-template-columns: 1fr !important; }
            .cn-radio-card > div:first-child { width: 100% !important; border-right: none !important; border-bottom: 1px solid var(--cn-border); min-height: 120px !important; }
          }
        `}</style>
      </section>

      {/* ── THE PROBLEM ──────────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="cn-problem-grid">
            <FadeIn>
              <p className="cn-eyebrow">The Problem</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
                Three things your bank will never tell you.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { num: "01", title: "The spread.", body: "Your bank borrows your money at 8% and lends it at 21%. The spread is theirs. Not yours." },
                  { num: "02", title: "The guarantee.", body: "The government guarantees R200,000 of your deposit. Everything above that is unsecured exposure to the bank." },
                  { num: "03", title: "The net figure.", body: "An advertised 13% gross private return is closer to 10.4% net after dividends withholding tax. Eridanus quotes the net number." },
                ].map((item) => (
                  <div key={item.num} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <span className="cn-step-number" style={{ minWidth: "28px", paddingTop: "2px" }}>{item.num}</span>
                    <div>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "20px", color: "var(--cn-text-primary)", marginBottom: "4px" }}>{item.title}</p>
                      <p style={{ color: "var(--cn-text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "2.5rem" }}>
                <Link href="/for-investors">
                  <span className="cn-btn-ghost">
                    Read the full breakdown <ArrowRight size={13} />
                  </span>
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              {/* Trust mandate card — replaces AI image */}
              <div style={{ backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", padding: "3rem" }}>
                <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2rem" }}>Eridanus Investment Mandate</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {[
                    { label: "Capital Security", value: "Secured against physical agricultural assets valued above entry price from day one." },
                    { label: "Return Basis", value: "Fixed net returns. Agreed before capital is deployed. Not projected. Agreed." },
                    { label: "Tax Structure", value: "Section 12J deductible in year of investment. Net figures quoted after dividends withholding tax." },
                    { label: "Regulatory Status", value: "Registered FSP 48947. Section 12J VCC. CA(SA) qualified management." },
                  ].map((item) => (
                    <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <CheckCircle2 size={16} color="var(--cn-gold)" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--cn-text-primary)", letterSpacing: "0.06em", marginBottom: "3px" }}>{item.label}</p>
                        <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.6 }}>{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cn-border)" }}>
                  <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", lineHeight: 1.6 }}>
                    All investments carry risk. This is not financial advice. Consult a qualified advisor.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .cn-problem-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── THE ARCHITECT ────────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }} className="cn-architect-grid">
            <FadeIn>
              {/* Credentials card — replaces AI office consultation image */}
              <div style={{ backgroundColor: "var(--cn-bg-primary)", border: "1px solid var(--cn-border)", padding: "3rem" }}>
                <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "2rem" }}>Verified Credentials</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  {[
                    {
                      logo: "/manus-storage/logo-ey-t_ba28f461.png",
                      title: "CA(SA) — Ernst & Young",
                      detail: "Articles at EY Pretoria. All board exams passed first time. Seconded to EY Bermuda for international financial structures.",
                    },
                    {
                      logo: null,
                      badge: "FSP 48947",
                      title: "Registered Financial Services Provider",
                      detail: "Licensed and regulated by the Financial Sector Conduct Authority (FSCA) of South Africa.",
                    },
                    {
                      logo: null,
                      badge: "Sec. 12J",
                      title: "Section 12J Venture Capital Company",
                      detail: "SARS-approved VCC status. Investment deductible from taxable income in the year of investment.",
                    },
                    {
                      logo: null,
                      badge: "2018",
                      title: "Eridanus — Co-founded with Martin van Vuuren",
                      detail: "Operating since 2018. Acquiring South African agricultural assets at below-market value.",
                    },
                  ].map((item) => (
                    <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", paddingBottom: "1.75rem", borderBottom: "1px solid var(--cn-border)" }}>
                      <div style={{ minWidth: "52px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        {item.logo ? (
                          <img src={item.logo} alt="" style={{ height: "28px", width: "auto", objectFit: "contain", opacity: 0.7 }} />
                        ) : (
                          <span className="cn-figure" style={{ fontSize: "14px", color: "var(--cn-gold)" }}>{item.badge}</span>
                        )}
                      </div>
                      <div>
                        <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--cn-text-primary)", marginBottom: "4px" }}>{item.title}</p>
                        <p style={{ fontSize: "12px", color: "var(--cn-text-secondary)", lineHeight: 1.6 }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="cn-eyebrow">The Architect</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
                Cobus Nel.<br />CA(SA). Operator. CIO.
              </h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Cobus Nel trained at Ernst & Young in Pretoria, passed all CA(SA) board exams first time, and was seconded to EY Bermuda for international financial structures work. He traded commodities at Export Trading Group, has hands-on farming experience, and has navigated business rescues and liquidations.
              </p>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                He co-founded Eridanus with Martin van Vuuren in 2018. The firm has been operating as a registered FSP (FSP 48947) and Section 12J venture capital company since inception.
              </p>
              <div style={{ display: "flex", gap: "2rem", paddingTop: "1.5rem", borderTop: "1px solid var(--cn-border)", marginBottom: "2rem" }}>
                {[
                  { label: "CA(SA)", sub: "First attempt" },
                  { label: "EY", sub: "Pretoria & Bermuda" },
                  { label: "2018", sub: "Eridanus Founded" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="cn-figure" style={{ fontSize: "22px" }}>{item.label}</p>
                    <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", marginTop: "4px" }}>{item.sub}</p>
                  </div>
                ))}
              </div>
              <Link href="/about">
                <span className="cn-btn-ghost">
                  Full biography <ArrowRight size={13} />
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .cn-architect-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* ── THE STRUCTURE ────────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,165,116,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212,165,116,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="cn-eyebrow">The Structure</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1rem" }}>
                Eridanus.
              </h2>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "580px", margin: "0 auto", lineHeight: 1.75 }}>
                A registered Section 12J venture capital company acquiring real South African agricultural assets at below-market value. The investor's capital is secured against physical assets worth more than the entry price from day one.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)" }}>
            {[
              {
                icon: <Shield size={24} color="var(--cn-gold)" />,
                title: "HALO Assets",
                body: "Heavy Assets with Low Obsolescence. Physical agricultural land and infrastructure. Hard to fake. Hard to evaporate. Not technologically stranded.",
              },
              {
                icon: <TrendingUp size={24} color="var(--cn-gold)" />,
                title: "Below-Market Entry",
                body: "Eridanus acquires assets at below-market value. The investor's capital is secured against assets worth more than the entry price from day one.",
              },
              {
                icon: <Landmark size={24} color="var(--cn-gold)" />,
                title: "Section 12J Tax Benefit",
                body: "Investments in qualifying Section 12J companies are deductible from taxable income in the year of investment. The specific benefit depends on individual tax position.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 100}>
                <div style={{ backgroundColor: "var(--cn-bg-secondary)", padding: "2.5rem", height: "100%" }}>
                  <div style={{ marginBottom: "1.25rem" }}>{item.icon}</div>
                  <h3 className="cn-headline" style={{ fontSize: "24px", marginBottom: "0.875rem" }}>{item.title}</h3>
                  <p style={{ color: "var(--cn-text-secondary)", fontSize: "14px", lineHeight: 1.75 }}>{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="/discovery-session">
                <span className="cn-btn-primary">
                  Explore the Discovery Session <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── RETURN TIERS ─────────────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)" }}>
        <div className="container">
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p className="cn-eyebrow">Net Returns</p>
                <h2 className="cn-headline" style={{ fontSize: "var(--type-h2)" }}>
                  The number you actually keep.
                </h2>
              </div>
              <p style={{ fontSize: "13px", color: "var(--cn-text-faint)", maxWidth: "320px", lineHeight: 1.65, textAlign: "right" }}>
                Net figures after dividends withholding tax. Not gross. Not before tax.
              </p>
            </div>
          </FadeIn>

          <div className="cn-stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "var(--cn-border)" }}>
            {[
              { tier: "R1M – R2.5M", rate: "~11%", note: "Net per annum", sub: "Capital Architect routing" },
              { tier: "R2.5M – R5M", rate: "~11.5%", note: "Net per annum", sub: "Direct Cobus Nel routing" },
              { tier: "R5M+", rate: "~12.5%", note: "Net per annum", sub: "Priority routing — 24hr response" },
            ].map((row, i) => (
              <FadeIn key={row.tier} delay={i * 80}>
                <div style={{ backgroundColor: "var(--cn-bg-primary)", padding: "2.5rem", position: "relative" }}>
                  {i === 2 && (
                    <div style={{ position: "absolute", top: "1rem", right: "1rem", backgroundColor: "var(--cn-gold)", padding: "3px 8px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 600, color: "#0d1210", letterSpacing: "0.1em", textTransform: "uppercase" }}>Priority</span>
                    </div>
                  )}
                  <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", letterSpacing: "0.08em", marginBottom: "1rem" }}>{row.tier}</p>
                  <p className="cn-figure" style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1 }}>{row.rate}</p>
                  <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", marginTop: "8px" }}>{row.note}</p>
                  <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid var(--cn-border)" }}>{row.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={250}>
            <p className="cn-disclaimer" style={{ marginTop: "1.5rem" }}>
              Returns are indicative net figures after dividends withholding tax. Subject to individual circumstances and SARS assessment. Past performance is not indicative of future results. This is not financial advice. Consult a qualified financial and tax advisor before investing. Eridanus is a registered FSP (FSP 48947). All investments carry risk.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── CLIENT ARCHETYPES (CASE STUDIES) ─────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-primary)", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container">
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <p className="cn-eyebrow">Client Archetypes</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1rem" }}>
                Who Eridanus is built for.
              </h2>
              <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.75 }}>
                The following profiles are representative archetypes based on the investors Cobus works with. Names and identifying details are withheld by design.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--cn-border)" }}>
            {CASE_STUDIES.map((cs, i) => (
              <FadeIn key={cs.archetype} delay={i * 100}>
                <div style={{ backgroundColor: "var(--cn-bg-secondary)", display: "grid", gridTemplateColumns: "280px 1fr", gap: "0" }} className="cn-case-study-card">
                  {/* Left panel */}
                  <div style={{
                    padding: "2.5rem 2rem",
                    borderRight: "1px solid var(--cn-border)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    backgroundColor: "var(--cn-bg-primary)",
                  }}>
                    <div style={{ marginBottom: "0.5rem" }}>{cs.icon}</div>
                    <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "20px", color: "var(--cn-text-primary)", lineHeight: 1.2 }}>{cs.archetype}</p>
                    <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", letterSpacing: "0.06em" }}>{cs.profile}</p>
                    <div style={{ marginTop: "auto", paddingTop: "1.5rem", borderTop: "1px solid var(--cn-border)" }}>
                      <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Capital Range</p>
                      <p className="cn-figure" style={{ fontSize: "18px", color: "var(--cn-gold)" }}>{cs.capitalRange}</p>
                    </div>
                  </div>
                  {/* Right panel */}
                  <div style={{ padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <div>
                      <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>The Challenge</p>
                      <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)", lineHeight: 1.75 }}>{cs.challenge}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "8px" }}>The Structure</p>
                      <p style={{ fontSize: "14px", color: "var(--cn-text-secondary)", lineHeight: 1.75 }}>{cs.structure}</p>
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center", paddingTop: "1.25rem", borderTop: "1px solid var(--cn-border)" }}>
                      <div>
                        <p style={{ fontSize: "10px", color: "var(--cn-text-faint)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "4px" }}>Outcome</p>
                        <p className="cn-figure" style={{ fontSize: "20px", color: "var(--cn-gold)" }}>{cs.outcome}</p>
                      </div>
                      <div style={{ flex: 1, borderLeft: "1px solid var(--cn-border)", paddingLeft: "1.5rem" }}>
                        <Quote size={14} color="var(--cn-gold)" style={{ opacity: 0.6, marginBottom: "6px" }} />
                        <p style={{ fontSize: "13px", color: "var(--cn-text-primary)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", lineHeight: 1.6 }}>
                          {cs.quote}
                        </p>
                      </div>
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
            .cn-case-study-card { grid-template-columns: 1fr !important; }
            .cn-case-study-card > div:first-child { border-right: none !important; border-bottom: 1px solid var(--cn-border); }
          }
        `}</style>
      </section>

      {/* ── DISCOVERY SESSION CTA ────────────────────────────────────────────── */}
      <section className="cn-section" style={{ backgroundColor: "var(--cn-bg-secondary)", borderTop: "1px solid var(--cn-border)" }}>
        <div className="container">
          <div className="cn-discovery-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center" }}>
            <FadeIn>
              <p className="cn-eyebrow">The Discovery Session</p>
              <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
                One session.<br />Seven touchpoints.
              </h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
                The Discovery Session is a structured, seven-touchpoint diagnostic conversation. It covers position diagnostics, tax-effective structures, life insurance audit, estate planning, trust review, an operator-grounded investment explanation, and the calibrated net-return conversation.
              </p>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, marginBottom: "2.5rem" }}>
                It is not a sales pitch. It is a diagnostic. One session. No obligation. The value is in the diagnosis itself.
              </p>
              <Link href="/apply">
                <span className="cn-btn-primary">
                  Apply to qualify <ArrowRight size={14} />
                </span>
              </Link>
            </FadeIn>
            <FadeIn delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", backgroundColor: "var(--cn-border)" }}>
                {[
                  { num: "01", title: "Position Diagnostics", desc: "Where your capital is. How it is structured. What it is actually earning net." },
                  { num: "02", title: "Tax-Effective Structures", desc: "Legal structures that reduce your tax exposure. Not avoidance. Architecture." },
                  { num: "03", title: "Life Insurance Audit", desc: "Most policies are over-priced and under-performing. The audit reveals the gap." },
                  { num: "04", title: "Estate Planning", desc: "What happens to your capital when you are not here. The honest conversation." },
                  { num: "05", title: "Trust Review", desc: "If you have a trust, is it structured correctly? Is it working for you?" },
                  { num: "06", title: "Investment Explanation", desc: "How Eridanus works. The assets. The structure. The net return. Operator-grounded." },
                  { num: "07", title: "Net-Return Conversation", desc: "The calibrated, honest discussion of what your capital will earn. Net. Not gross." },
                ].map((item) => (
                  <div key={item.num} style={{ backgroundColor: "var(--cn-bg-primary)", padding: "1.25rem 1.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                    <span className="cn-step-number" style={{ minWidth: "24px", paddingTop: "2px" }}>{item.num}</span>
                    <div>
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 700, fontSize: "17px", color: "var(--cn-text-primary)", marginBottom: "2px" }}>{item.title}</p>
                      <p style={{ fontSize: "13px", color: "var(--cn-text-secondary)", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <section style={{
        backgroundColor: "var(--cn-bg-primary)",
        padding: "100px 0",
        borderTop: "1px solid var(--cn-border)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(212,165,116,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212,165,116,0.04) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
          <FadeIn>
            <div className="cn-gold-line" style={{ margin: "0 auto 1.5rem" }} />
            <h2 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1.5rem" }}>
              Your capital deserves a real conversation.
            </h2>
            <p style={{ fontSize: "var(--type-body-lg)", color: "var(--cn-text-secondary)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              The Discovery Session is where the real conversation happens. Apply to qualify. Capital floor: R1 million.
            </p>
            {/* Trust badges at CTA */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginBottom: "2.5rem", flexWrap: "wrap" }}>
              {[
                { src: "/manus-storage/logo-kyknet-t_642a2cc4.png", alt: "kykNET", h: "28px" },
                { src: "/manus-storage/logo-ontbyt-sake-t_39350ed0.png", alt: "Ontbyt Sake", h: "30px" },
                { src: "/manus-storage/logo-pretoria-fm-t_0963c907.png", alt: "Pretoria FM", h: "32px" },
                { src: "/manus-storage/logo-ey-t_ba28f461.png", alt: "EY", h: "26px" },
              ].map((logo) => (
                <img key={logo.alt} src={logo.src} alt={logo.alt} style={{ height: logo.h, width: "auto", objectFit: "contain", opacity: 0.35 }} />
              ))}
            </div>
            <Link href="/apply">
              <span className="cn-btn-primary" style={{ fontSize: "13px", padding: "16px 36px" }}>
                Apply for a Discovery Session <ArrowRight size={15} />
              </span>
            </Link>
            <p className="cn-disclaimer" style={{ marginTop: "2rem" }}>
              Eridanus is a registered FSP (FSP 48947) and Section 12J VCC. All investments carry risk. This is not financial advice.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── STICKY MOBILE CTA BAR ─────────────────────────────────────────── */}
      <div className="cn-mobile-cta-bar">
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", color: "var(--cn-text-faint)", letterSpacing: "0.08em", marginBottom: "2px" }}>Capital floor: R1M+</p>
          <p style={{ fontSize: "13px", color: "var(--cn-text-primary)", fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>Cobus Nel — Capital Architect</p>
        </div>
        <Link href="/apply">
          <span className="cn-btn-primary" style={{ fontSize: "12px", padding: "12px 20px", whiteSpace: "nowrap" }}>
            Apply <ArrowRight size={12} />
          </span>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
