"use client";

import { useState } from "react";

type ServiceItem = {
  name: string;
  price: string;
  duration: string;
};

type ServiceGroup = {
  title: string;
  items: ServiceItem[];
};

const SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Nail Extension",
    items: [
      { name: "Full Set Solar", price: "From $50", duration: "60 min" },
      { name: "Fill Solar", price: "From $40", duration: "45 min" },
      { name: "Full Set Bio Gel", price: "From $50", duration: "60 min" },
      { name: "Full Set UV Gel", price: "From $45", duration: "45 min" },
      { name: "Fill UV Gel", price: "From $35", duration: "30 min" },
      { name: "Full Set Acrylic", price: "From $35", duration: "30 min" },
      { name: "Fill Acrylic", price: "From $30", duration: "30 min" },
      { name: "Fill Bio Gel", price: "$40", duration: "45 min" },
    ],
  },
  {
    title: "Manicure & Pedicure",
    items: [
      { name: "Manicure Regular", price: "$25", duration: "30 min" },
      { name: "Pedicure Regular", price: "$35", duration: "30 min" },
      { name: "Manicure Shellac", price: "$35", duration: "30 min" },
      { name: "Pedicure Shellac", price: "$45", duration: "45 min" },
      { name: "Manicure & Pedicure Regular", price: "$55", duration: "60 min" },
      { name: "Manicure Shellac & Pedicure Shellac", price: "$75", duration: "60 min" },
      { name: "Pedicure Shellac & Manicure Regular", price: "$65", duration: "60 min" },
      { name: "Shellac Polish Change (Toe)", price: "$30", duration: "30 min" },
      { name: "Shellac Polish Change (Hand)", price: "$25", duration: "30 min" },
    ],
  },
  {
    title: "Additional Services",
    items: [
      { name: "Toe Polish Change", price: "$15", duration: "15 min" },
      { name: "Hand Polish Change", price: "$10", duration: "15 min" },
      { name: "Nail Art", price: "From $5", duration: "15 min" },
      { name: "Take Off Only", price: "$15", duration: "15 min" },
    ],
  },
  {
    title: "Waxing",
    items: [
      { name: "Brazilian Wax", price: "From $40", duration: "45 min" },
      { name: "Full Leg Wax", price: "From $45", duration: "45 min" },
      { name: "Half Leg Wax", price: "$25", duration: "30 min" },
      { name: "Full Arm Wax", price: "$30", duration: "30 min" },
      { name: "Half Arm Wax", price: "$20", duration: "15 min" },
      { name: "Full Face Wax", price: "$30", duration: "30 min" },
      { name: "Under Arm Wax", price: "$15", duration: "15 min" },
      { name: "Bikini Wax", price: "$25", duration: "30 min" },
      { name: "Back Wax", price: "$40", duration: "45 min" },
      { name: "Eyebrow Wax", price: "$10", duration: "15 min" },
      { name: "Eyebrow + Tinting", price: "$25", duration: "30 min" },
      { name: "Lip or Chin Wax", price: "$5", duration: "15 min" },
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
              <div className="flex flex-col">
                <span className="font-body-lg text-on-surface group-hover:text-primary transition-colors">
                  {item.name}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant/70">
                  {item.duration}
                </span>
              </div>
              <div className="flex-grow mx-4 border-b border-dotted border-outline-variant/50" />
              <span className="font-headline-md text-primary whitespace-nowrap">{item.price}</span>
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
