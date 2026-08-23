"use client";

import { useSyncExternalStore } from "react";

// TODO: swap in the real address, phone number, and map link.
const ADDRESS_LINE = "123 Main Street";
const ADDRESS_UNIT = "Unit 4";
const ADDRESS_DETAIL = "Toronto, ON M5V 2T6 · Free parking out front";
const PHONE_DISPLAY = "(416) 555-0142";
const PHONE_HREF = "tel:+14165550142";
const MAPS_HREF =
  "https://maps.google.com/?q=" + encodeURIComponent(`${ADDRESS_LINE}, ${ADDRESS_DETAIL}`);

type DaySchedule = {
  label: string;
  display: string;
  // minutes from midnight; null = closed all day
  open: number | null;
  close: number | null;
};

// Index matches Date#getDay(): 0 = Sunday ... 6 = Saturday
const SCHEDULE: DaySchedule[] = [
  { label: "Sunday", display: "10:00 — 4:00", open: 10 * 60, close: 16 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Saturday", display: "9:30 — 6:00", open: 9 * 60 + 30, close: 18 * 60 },
];

const HOURS_ROWS = [
  { label: "Mon – Fri", display: "9:30 — 7:00" },
  { label: "Saturday", display: "9:30 — 6:00" },
  { label: "Sunday", display: "10:00 — 4:00" },
];

function formatClock(minutes: number) {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const period = h24 >= 12 ? "PM" : "AM";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${period}`;
}

function computeStatus(): { open: boolean; label: string } {
  const now = new Date();
  const today = SCHEDULE[now.getDay()];
  const minutesNow = now.getHours() * 60 + now.getMinutes();

  if (today.open === null || today.close === null) {
    return { open: false, label: "Closed today" };
  }
  if (minutesNow >= today.open && minutesNow < today.close) {
    return { open: true, label: `Open today · Closes ${formatClock(today.close)}` };
  }
  if (minutesNow < today.open) {
    return { open: false, label: `Opens today at ${formatClock(today.open)}` };
  }
  return { open: false, label: "Closed now" };
}

// The open/closed status depends on the visitor's clock, which can't be known
// during server rendering. useSyncExternalStore renders the null server
// snapshot on the initial (SSR-matching) pass, then swaps in the real value
// on the client — no effect, no hydration mismatch.
const noopSubscribe = () => () => {};
const getServerSnapshot = () => null;

function useOpenStatus() {
  const label = useSyncExternalStore(
    noopSubscribe,
    () => JSON.stringify(computeStatus()),
    getServerSnapshot,
  );
  return label ? (JSON.parse(label) as { open: boolean; label: string }) : null;
}

export default function Visit() {
  const status = useOpenStatus();

  return (
    <section className="relative overflow-hidden bg-inverse-surface text-inverse-on-surface py-section-padding-mobile md:py-section-padding-desktop px-6">
      {/* Decorative background blobs, matching the Hero's treatment */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-3xl -z-0" />
      <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-primary-fixed-dim/10 rounded-full blur-3xl -z-0" />

      <div className="relative max-w-container-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">
            Come See Us
          </p>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg">
            {ADDRESS_LINE},
            <br />
            <span className="font-display-lg italic text-primary-fixed-dim">
              {ADDRESS_UNIT}
            </span>
          </h2>
          <p className="font-body-md text-body-md text-inverse-on-surface/70 font-light">
            {ADDRESS_DETAIL}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#book"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Book Online <span aria-hidden="true">→</span>
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center px-6 py-3 rounded-full border border-inverse-on-surface/30 font-label-sm text-label-sm uppercase tracking-widest hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-colors"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full border border-inverse-on-surface/30 font-label-sm text-label-sm uppercase tracking-widest hover:border-primary-fixed-dim hover:text-primary-fixed-dim transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">
            Hours
          </p>
          <div className="divide-y divide-inverse-on-surface/15">
            {HOURS_ROWS.map((row) => (
              <div key={row.label} className="flex justify-between items-center py-4">
                <span className="font-body-lg text-body-lg">{row.label}</span>
                <span className="font-body-lg text-body-lg text-inverse-on-surface/80">
                  {row.display}
                </span>
              </div>
            ))}
          </div>
          <p className="font-body-md text-body-md text-inverse-on-surface/50 font-light">
            Hours may vary on holidays.
          </p>
          {status && (
            <div className="flex items-center gap-2 pt-2">
              <span
                className={`w-2 h-2 rounded-full ${status.open ? "bg-green-400" : "bg-inverse-on-surface/40"}`}
              />
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-inverse-on-surface/80">
                {status.label}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
