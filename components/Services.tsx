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
    title: "Nail Services",
    items: [
      { name: "Fill Bio Gel", price: "$55", duration: "60 min" },
      { name: "Full Set Bio Gel", price: "$65", duration: "60 min" },
      { name: "Set Solar", price: "$60", duration: "60 min" },
      { name: "Fill Solar", price: "$50", duration: "45 min" },
      { name: "Manicure Regular", price: "$30", duration: "30 min" },
      { name: "Pedicure Regular", price: "$40", duration: "30 min" },
      { name: "Manicure Shellac", price: "$40", duration: "30 min" },
      { name: "Pedicure Shellac", price: "$50", duration: "60 min" },
      { name: "Manicure & Pedicure Shellac", price: "$85", duration: "60 min" },
      { name: "Manicure & Pedicure Regular", price: "$65", duration: "60 min" },
    ],
  },
  {
    title: "Kid Services (Under 9 Years Old)",
    items: [
      { name: "Manicure Kid", price: "$20", duration: "30 min" },
      { name: "Pedicure Kid", price: "$30", duration: "30 min" },
      { name: "Manicure & Pedicure Kid", price: "$45", duration: "60 min" },
    ],
  },
  {
    title: "Nail Add-Ons & Changes",
    items: [
      { name: "Shellac Polish Change (Toe)", price: "$30", duration: "30 min" },
      { name: "Shellac Polish Change (Hand)", price: "$25", duration: "30 min" },
      { name: "Toe Polish Change", price: "$15", duration: "15 min" },
      { name: "Hand Polish Change", price: "$15", duration: "15 min" },
      { name: "Nail Art", price: "$15+", duration: "15 min" },
      { name: "Take Off Shellac", price: "$10", duration: "15 min" },
      { name: "Take Off Extension Nail", price: "$20", duration: "15 min" },
      { name: "Length", price: "$5+", duration: "15 min" },
      { name: "Shape Change", price: "$5", duration: "15 min" },
      { name: "French", price: "$10+", duration: "15 min" },
    ],
  },
  {
    title: "Waxing Services",
    items: [
      { name: "Brazilian Wax", price: "$50", duration: "45 min" },
      { name: "Full Leg Wax", price: "$55", duration: "45 min" },
      { name: "Half Leg Wax", price: "$30", duration: "30 min" },
      { name: "Full Arm Wax", price: "$40", duration: "30 min" },
      { name: "Half Arm Wax", price: "$25", duration: "15 min" },
      { name: "Full Face Wax", price: "$40", duration: "30 min" },
      { name: "Under Arm Wax", price: "$20", duration: "15 min" },
      { name: "Bikini Wax", price: "$25", duration: "30 min" },
      { name: "Back Wax", price: "$50", duration: "45 min" },
      { name: "Eyebrow Wax", price: "$15", duration: "15 min" },
      { name: "Eyebrow + Tinting", price: "$35", duration: "30 min" },
      { name: "Tinting Eyebrows", price: "$20", duration: "15 min" },
      { name: "Tinting Eyelash", price: "$40", duration: "30 min" },
      { name: "Lip Wax", price: "$10", duration: "15 min" },
      { name: "Chin Wax", price: "$10", duration: "15 min" },
      { name: "Parafin (Hand or Feet)", price: "$15", duration: "15 min" },
      { name: "Nose/Ears/Side Burn Wax", price: "$10", duration: "15 min" },
      { name: "Stomach Wax", price: "$25+", duration: "30 min" },
      { name: "Chest Wax", price: "$25+", duration: "30 min" },
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
