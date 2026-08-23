// Single source of truth for business details used across the site
// (footer, the Visit section, and SEO metadata/structured data).
//
// TODO: replace every placeholder below with the real business details.

export const SITE_URL = "https://shalalanailbar.ca";
export const BUSINESS_NAME = "Shalala Nail Bar";
export const TAGLINE = "Exquisite Nails, Elevated Service";
export const DESCRIPTION =
  "Experience the ultimate in nail care and relaxation at Shalala Nail Bar — a curated sanctuary where beauty meets precision.";

export const CONTACT_EMAIL = "hello@shalalanailbar.ca";
export const PHONE_DISPLAY = "(416) 555-0142";
export const PHONE_HREF = "tel:+14165550142";

export const ADDRESS = {
  street: "123 Main Street",
  unit: "Unit 4",
  city: "Toronto",
  region: "ON",
  postalCode: "M5V 2T6",
  country: "CA",
};
export const ADDRESS_ONE_LINE = `${ADDRESS.street}, ${ADDRESS.unit}, ${ADDRESS.city}, ${ADDRESS.region} ${ADDRESS.postalCode}`;
export const MAPS_HREF = "https://maps.google.com/?q=" + encodeURIComponent(ADDRESS_ONE_LINE);

export const SOCIAL = {
  facebook: "https://facebook.com/shalalanailbar",
  instagram: "https://instagram.com/shalalanailbar",
};

export type DaySchedule = {
  label: string;
  display: string;
  // minutes from midnight; null = closed all day
  open: number | null;
  close: number | null;
};

// Index matches Date#getDay(): 0 = Sunday ... 6 = Saturday
export const SCHEDULE: DaySchedule[] = [
  { label: "Sunday", display: "10:00 — 4:00", open: 10 * 60, close: 16 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Mon – Fri", display: "9:30 — 7:00", open: 9 * 60 + 30, close: 19 * 60 },
  { label: "Saturday", display: "9:30 — 6:00", open: 9 * 60 + 30, close: 18 * 60 },
];

export const HOURS_ROWS = [
  { label: "Mon – Fri", display: "9:30 — 7:00" },
  { label: "Saturday", display: "9:30 — 6:00" },
  { label: "Sunday", display: "10:00 — 4:00" },
];

function minutesToTime(minutes: number) {
  const h = Math.floor(minutes / 60).toString().padStart(2, "0");
  const m = (minutes % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}

// schema.org day names, index matches Date#getDay() (same as SCHEDULE above).
const DAY_NAMES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Grouped for schema.org's OpeningHoursSpecification: consecutive days that
// share the same open/close time collapse into one entry with a dayOfWeek
// array, so this stays derived from SCHEDULE instead of hand-duplicated.
export const OPENING_HOURS_SPEC = (() => {
  const groups: { days: string[]; open: number; close: number }[] = [];
  SCHEDULE.forEach((day, i) => {
    if (day.open === null || day.close === null) return;
    const last = groups[groups.length - 1];
    if (last && last.open === day.open && last.close === day.close) {
      last.days.push(DAY_NAMES[i]);
    } else {
      groups.push({ days: [DAY_NAMES[i]], open: day.open, close: day.close });
    }
  });
  return groups.map((g) => ({
    "@type": "OpeningHoursSpecification" as const,
    dayOfWeek: g.days.length === 1 ? g.days[0] : g.days,
    opens: minutesToTime(g.open),
    closes: minutesToTime(g.close),
  }));
})();
