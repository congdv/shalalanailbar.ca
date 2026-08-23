const FOOTER_LINKS = ["Services", "Gallery", "About", "Contact", "Privacy"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container dark:bg-inverse-surface py-section-padding-mobile md:py-section-padding-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter max-w-container-max-width mx-auto px-6">
      <div className="space-y-4">
        <div className="font-headline-lg text-headline-lg text-primary dark:text-primary-fixed">
          SHALALA
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs font-light">
          Elevated nail care in a serene sanctuary.
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        {FOOTER_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            className="font-label-sm text-label-sm text-on-surface dark:text-inverse-on-surface hover:text-primary underline decoration-primary/30 underline-offset-4 transition-all"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex flex-col justify-end items-start md:items-end mt-8 md:mt-0">
        <p className="font-body-md text-body-md text-on-surface dark:text-inverse-on-surface font-light text-sm">
          © {year} Shalala Nail Bar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
