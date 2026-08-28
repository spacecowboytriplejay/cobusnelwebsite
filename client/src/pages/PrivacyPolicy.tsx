/**
 * Privacy Policy - cobusnel.com
 * Design: Institutional Gravity.
 * PLACEHOLDER: Requires review by a qualified legal practitioner before any paid campaign goes live.
 */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { setPageMeta } from "@/lib/pageMeta";

export default function PrivacyPolicy() {
  useEffect(() => {
    setPageMeta({ title: "Privacy Policy | Cobus Nel", description: "How cobusnel.com and Eridanus (FSP 48947) collect, use and protect personal information under POPIA.", path: "/privacy-policy", noindex: true });
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
            Privacy Policy
          </h1>
          <p style={{ fontSize: "13px", color: "var(--cn-text-faint)", marginBottom: "3rem" }}>
            Last updated: July 2026. This document is a baseline placeholder and requires review by a qualified legal practitioner before any paid advertising campaign goes live.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>1. Who we are</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                This website is operated by Cobus Nel in connection with Eridanus, an FSCA-authorised Financial Services Provider (FSP 48947), registered in South Africa. References to "we," "us," or "our" refer to Cobus Nel and Eridanus. Our Information Officer can be contacted at the address provided in Section 8 below.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>2. What information we collect</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", marginBottom: "1rem" }}>
                We collect personal information only when you voluntarily submit it through the application form on this website. This may include:
              </p>
              <ul style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", paddingLeft: "1.5rem" }}>
                <li>First name and last name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Capital range and investment timeframe (self-reported)</li>
                <li>How you heard about us</li>
                <li>Any information you choose to include in the message field</li>
              </ul>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", marginTop: "1rem" }}>
                We also collect anonymised analytics data (page views, session duration) through Umami Analytics. This data does not identify you personally and is not shared with third parties.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>3. Why we collect it</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                We collect your personal information solely to assess your application for a Discovery Session, to contact you regarding that application, and to route your inquiry to the appropriate member of our team. We do not use your information for any other purpose without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>4. How we store and protect it</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                Your information is stored securely and is accessible only to authorised members of our team. We do not sell, rent, or share your personal information with third parties, except where required by law or regulation, or where you have given explicit consent.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>5. Your rights under POPIA</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", marginBottom: "1rem" }}>
                Under the Protection of Personal Information Act (POPIA), Act 4 of 2013, you have the following rights as a data subject:
              </p>
              <ul style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px", paddingLeft: "1.5rem" }}>
                <li>The right to be notified that your personal information is being collected</li>
                <li>The right to access your personal information held by us</li>
                <li>The right to request correction of inaccurate personal information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to the processing of your personal information</li>
                <li>The right to lodge a complaint with the Information Regulator of South Africa</li>
              </ul>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>6. Cookies</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                This website uses minimal, privacy-respecting analytics (Umami). No advertising cookies, tracking pixels, or third-party behavioural tracking tools are currently active on this site. If this changes, this policy will be updated accordingly.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>7. Retention</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                We retain your personal information for as long as is necessary to fulfil the purpose for which it was collected, or as required by applicable law. If you request deletion of your information, we will action that request within a reasonable period, subject to any legal retention obligations.
              </p>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>8. Contact and Information Officer</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                To exercise any of your rights, to request access to your personal information, or to raise a privacy concern, please contact us at:
              </p>
              <div style={{ marginTop: "1rem", padding: "1.5rem", backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)" }}>
                <p style={{ color: "var(--cn-text-primary)", fontSize: "14px", lineHeight: 1.8 }}>
                  Cobus Nel | Eridanus<br />
                  Information Officer: Cobus Nel<br />
                  FSP 48947<br />
                  South Africa<br />
                  Contact via the application form at cobusnel.com/apply
                </p>
              </div>
            </section>

            <section>
              <h2 className="cn-headline" style={{ fontSize: "22px", marginBottom: "1rem" }}>9. Changes to this policy</h2>
              <p style={{ color: "var(--cn-text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                We may update this Privacy Policy from time to time. Any material changes will be reflected in the "Last updated" date at the top of this page. Continued use of this website after any changes constitutes your acceptance of the updated policy.
              </p>
            </section>

            <div style={{ padding: "1.5rem", backgroundColor: "var(--cn-bg-secondary)", border: "1px solid var(--cn-border)", marginTop: "1rem" }}>
              <p style={{ fontSize: "12px", color: "var(--cn-text-faint)", lineHeight: 1.7, fontStyle: "italic" }}>
                This Privacy Policy is a baseline placeholder. It requires review and approval by a qualified legal practitioner before any paid advertising campaign goes live. It does not constitute legal advice.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
