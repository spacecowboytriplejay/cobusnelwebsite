/**
 * Terms of Service - cobusnel.com
 * Design: Institutional Gravity.
 * PLACEHOLDER: Requires review by a qualified legal practitioner before any paid campaign goes live.
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";

export default function Terms() {
  useEffect(() => {
    setPageMeta({ title: "Terms of Service | Cobus Nel", description: "Terms of use for cobusnel.com. Eridanus is an FSCA-authorised Financial Services Provider (FSP 48947).", path: "/terms", noindex: true });
  }, []);

  return (
    <div style={{ backgroundColor: "var(--cn-bg-primary)", minHeight: "100vh" }}>
      <Navigation />

      <section style={{ paddingTop: "160px", paddingBottom: "120px" }}>
        <div className="container" style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--cn-gold)", marginBottom: "1.5rem" }}>
            Legal
          </p>
          <h1 className="cn-headline" style={{ fontSize: "var(--type-display)", marginBottom: "1rem" }}>
            Terms of Service
          </h1>
          <p style={{ fontSize: "13px", color: "var(--cn-text-faint)", marginBottom: "3rem" }}>
            Last updated: July 2026. This document is a baseline placeholder and requires review by a qualified legal practitioner before any paid advertising campaign goes live.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>1. Acceptance of terms</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                By accessing and using cobusnel.com (the "Website"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Website.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>2. Nature of this website</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                This Website is operated by Cobus Nel in connection with Eridanus, an FSCA-authorised Financial Services Provider (FSP 48947). The Website provides general information about Cobus Nel, Eridanus, and the Discovery Session diagnostic process. It does not constitute financial advice, investment advice, or a solicitation to invest.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>3. Not financial advice</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                Nothing on this Website constitutes regulated financial advice. All information is provided for general informational purposes only. You should not rely on any information on this Website as the basis for making an investment decision. Before making any investment, you should consult a qualified financial advisor, tax practitioner, and legal advisor. All investments carry risk, including risk of capital loss. Returns are not guaranteed. Past performance is not indicative of future performance.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>4. The Discovery Session</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                The Discovery Session is a structured diagnostic conversation. It is not a commitment to invest, a binding financial advice engagement, or a regulated financial planning service. Submitting an application does not guarantee a Discovery Session will be offered or that any investment opportunity will be made available to you.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>5. Intellectual property</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                All content on this Website, including text, images, logos, and design, is the property of Cobus Nel or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any content from this Website without prior written permission.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>6. Limitation of liability</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                To the fullest extent permitted by applicable law, Cobus Nel and Eridanus shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of this Website or reliance on any information contained herein. This includes, without limitation, any investment decisions made based on information found on this Website.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>7. Governing law</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                These Terms of Service are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the South African courts.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>8. Changes to these terms</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                We reserve the right to update these Terms of Service at any time. Changes will be reflected in the "Last updated" date at the top of this page. Continued use of the Website after any changes constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>9. Contact</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                For any questions about these Terms of Service, please contact us via the application form at cobusnel.com/apply.
              </p>
            </section>

            <div style={{ padding: "1.5rem", backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", marginTop: "1rem" }}>
              <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", lineHeight: 1.7, fontStyle: "italic" }}>
                These Terms of Service are a baseline placeholder. They require review and approval by a qualified legal practitioner before any paid advertising campaign goes live. They do not constitute legal advice.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
