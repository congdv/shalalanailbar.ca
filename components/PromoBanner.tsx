import { BOOKING_URL } from "@/lib/business";

export default function PromoBanner() {
  return (
    <div className="bg-primary text-on-primary text-center px-6 py-4">
      <p className="text-sm sm:text-base font-semibold uppercase tracking-widest">
        Soft Opening Special — 20% Off All Services · Oct 2 – Oct 31{" "}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Book Now
        </a>
      </p>
    </div>
  );
}
