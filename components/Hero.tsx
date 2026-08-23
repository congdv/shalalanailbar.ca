import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 py-section-padding-mobile md:py-section-padding-desktop overflow-hidden max-w-container-max-width mx-auto gap-12">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-surface to-surface-container-low -z-10" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary-container/20 rounded-full blur-3xl -z-10" />

      <div className="w-full md:w-1/2 space-y-8 z-10 flex flex-col items-start text-left">
        <div className="w-32 h-32 md:hidden mb-8 rounded-full shadow-[0_0_40px_rgba(212,175,55,0.15)] flex items-center justify-center bg-white p-4 mx-auto">
          <Image
            alt="Shalala Nail Bar Logo"
            src="/images/logo-mark.png"
            width={700}
            height={700}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
        <div className="space-y-4">
          <h1 className="font-display-lg text-display-lg md:text-[80px] md:leading-[88px] text-primary tracking-tight">
            Exquisite Nails,
            <br />
            Elevated Service
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl font-light">
            Experience the ultimate in nail care and relaxation. A curated
            sanctuary where beauty meets precision.
          </p>
        </div>
        <div className="pt-8">
          <a
            href="#book"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            Book Appointment
          </a>
        </div>
      </div>

      <div className="w-full md:w-1/2 hidden md:block">
        <div className="aspect-[4/5] rounded-full overflow-hidden gold-border p-2 shadow-2xl relative">
          <Image
            src="/images/hero-manicure.jpg"
            alt="Close up of a perfect, minimalist almond-shaped manicure with a glossy nude finish and a single delicate gold flake accent on one nail. Soft, high-key lighting."
            width={1376}
            height={752}
            className="w-full h-full object-cover rounded-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full mix-blend-overlay" />
        </div>
      </div>
    </section>
  );
}
