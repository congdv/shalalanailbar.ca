"use client";

import { useState } from "react";

type ServiceItem = {
  name: string;
  price: string;
};

type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Nail Care",
    items: [
      { name: "Signature Manicure", price: "$45" },
      { name: "Luxury Pedicure", price: "$75" },
    ],
  },
  {
    title: "Treatments",
    items: [
      { name: "Gel Polish Application", price: "$25" },
      { name: "Paraffin Wax Treatment", price: "$30" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { name: "Artisan Nail Art", price: "From $15" },
      { name: "French Finish", price: "$10" },
    ],
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ServiceAccordion({ group, defaultOpen }: { group: ServiceGroup; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border border-outline-variant/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="w-full flex justify-between items-center p-6 bg-surface-container hover:bg-surface-container-high transition-colors group"
      >
        <span className="font-headline-md text-headline-md text-primary">
          {group.title}
        </span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <div className="p-6 space-y-4 bg-surface">
          {group.items.map((item) => (
            <div key={item.name} className="flex justify-between items-center group">
              <span className="font-body-lg text-on-surface group-hover:text-primary transition-colors">
                {item.name}
              </span>
              <div className="flex-grow mx-4 border-b border-dotted border-outline-variant/50" />
              <span className="font-headline-md text-primary">{item.price}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section
      className="py-section-padding-mobile md:py-section-padding-desktop px-6"
      id="services"
    >
      <div className="max-w-container-max-width mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Curated Services
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant font-light">
            Indulgent treatments tailored for you.
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {SERVICE_GROUPS.map((group, i) => (
            <ServiceAccordion key={group.title} group={group} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
