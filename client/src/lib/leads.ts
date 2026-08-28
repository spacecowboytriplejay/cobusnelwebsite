/**
 * Lead pipe for cobusnel.com. Mirrors the wiring on the calculator
 * (calculator.cobusnel.com, repo eridanus-diagnostic, main.js) so both
 * entry points land in the SAME Google Sheet via the SAME Apps Script web
 * app, distinguished by the `source` field on each row.
 *
 * Apps Script is called with mode 'no-cors', so the response is opaque: a
 * non-2xx is indistinguishable from success here. Verify delivery in the
 * sheet, never in the promise.
 */

export const SHEET_ENDPOINT_URL =
  "https://script.google.com/macros/s/AKfycbwzQqlrKSr-ULvmZCuS2_AEvabK_PhchIBjGXphR7ARPO_P4vca289Q-iKpRAGc66oJKg/exec";

/** Ad attribution captured from the landing URL so each row shows which ad produced it. */
export function leadAttribution(): Record<string, string> {
  try {
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_content: p.get("utm_content") || "",
      utm_term: p.get("utm_term") || "",
      fbclid: p.get("fbclid") || "",
      landing_url: window.location.href,
      referrer: document.referrer || "",
    };
  } catch {
    return { landing_url: "" };
  }
}

/** Fire the Meta Lead event if the pixel is present; retries while fbevents.js is still loading. */
export function fireMetaLead(contentName: string) {
  const w = window as unknown as { fbq?: (...args: unknown[]) => void };
  (function attempt(n: number) {
    if (typeof w.fbq === "function") {
      w.fbq("track", "Lead", { content_name: contentName });
    } else if (n < 10) {
      setTimeout(() => attempt(n + 1), 300);
    }
  })(0);
}

export type LeadPayload = Record<string, string | number | boolean>;

/**
 * POST a lead to the sheet. Throws if the endpoint is unset or the network
 * call fails. Never resolves "success" for a lead that had nowhere to go.
 */
export async function postLead(payload: LeadPayload): Promise<void> {
  if (!SHEET_ENDPOINT_URL || SHEET_ENDPOINT_URL.includes("PASTE_")) {
    console.error("[LEAD FORM NOT WIRED] SHEET_ENDPOINT_URL is unset. Lead discarded:", payload);
    throw new Error("lead endpoint not configured");
  }
  await fetch(SHEET_ENDPOINT_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(payload),
  });
}
