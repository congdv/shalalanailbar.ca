export default function BookingCTA() {
  return (
    <section
      className="py-section-padding-mobile md:py-section-padding-desktop px-6 relative overflow-hidden"
      id="book"
    >
      <div className="absolute inset-0 bg-surface-dim opacity-50 -z-10" />
      <div className="max-w-3xl mx-auto text-center space-y-8 glass-card p-12 md:p-16 rounded-2xl">
        <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
          Reserve Your Time
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant font-light max-w-lg mx-auto">
          Secure your appointment online. For special requests or group
          bookings, please contact us directly.
        </p>
        {/* Minimalist Booking Stepper Visual */}
        <div className="flex items-center justify-center max-w-md mx-auto py-6">
          <div className="w-3 h-3 rounded-full bg-primary-container ring-4 ring-primary-container/20" />
          <div className="h-[1px] w-16 bg-outline-variant" />
          <div className="w-2 h-2 rounded-full bg-outline-variant" />
          <div className="h-[1px] w-16 bg-outline-variant" />
          <div className="w-2 h-2 rounded-full bg-outline-variant" />
        </div>
        <div className="pt-4">
          <button className="btn-primary w-full md:w-auto px-12 py-4 rounded-full font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity shadow-lg shadow-primary-container/20">
            Begin Booking
          </button>
        </div>
      </div>
    </section>
  );
}
