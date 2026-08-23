import Image from "next/image";

export default function About() {
  return (
    <section
      className="py-section-padding-mobile md:py-section-padding-desktop px-6 bg-surface-container"
      id="about"
    >
      <div className="max-w-container-max-width mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        <div className="w-full md:w-1/2 order-2 md:order-1 relative">
          <div className="aspect-[4/5] rounded-t-full overflow-hidden gold-border p-2">
            <Image
              src="/images/about-salon.jpg"
              alt="A serene, minimalist salon interior with soft cream walls, warm ambient lighting, and elegant, modern seating. A pristine manicure station is in focus, reflecting a luxurious and tranquil atmosphere."
              width={512}
              height={286}
              className="w-full h-full object-cover rounded-t-full"
            />
          </div>
          {/* Decorative subtle accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-container/20 rounded-full blur-xl" />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 space-y-6">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            The Shalala Philosophy
          </h2>
          <div className="w-12 h-0.5 bg-primary-container" />
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
            We believe that nail care is more than a routine; it is a ritual
            of self-care. At Shalala Nail Bar, we blend meticulous technique
            with premium, nourishing products in an environment designed for
            absolute serenity.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed font-light">
            Every detail, from the warmth of our welcome to the precision of
            our artistry, is curated to leave you feeling polished, relaxed,
            and renewed.
          </p>
          <a
            href="#services"
            className="inline-block mt-4 border-b border-primary text-primary font-label-sm text-label-sm uppercase pb-1 hover:text-primary-container transition-colors"
          >
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
