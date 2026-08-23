import Image from "next/image";
import { ADDRESS, CONTACT_EMAIL, SOCIAL } from "@/lib/business";

const FOOTER_LINKS = ["Services", "Gallery", "About", "Contact"];
const CONTACT_ADDRESS = `${ADDRESS.street}, ${ADDRESS.city}, ${ADDRESS.region}`;

const SOCIAL_LINKS = [
  {
    name: "Facebook",
    href: SOCIAL.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.49-1.46H16.5V4.36C16.24 4.32 15.36 4.25 14.33 4.25c-2.15 0-3.63 1.31-3.63 3.72V10.5H8.19v3h2.51V21h2.8Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: SOCIAL.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-container dark:bg-inverse-surface">
      <div className="max-w-container-max-width mx-auto px-6 py-section-padding-mobile md:py-section-padding-desktop">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4 md:max-w-xs">
            <Image
              src="/images/logo-full.png"
              alt="Shalala Nail Bar"
              width={857}
              height={1053}
              className="h-32 w-auto object-contain"
            />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xs font-light">
              Elevated nail care in a serene sanctuary.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {FOOTER_LINKS.map((label) => (
              <a
                key={label}
                href="#"
                className="font-label-sm text-label-sm text-on-surface dark:text-inverse-on-surface hover:text-primary underline decoration-primary/30 underline-offset-4 transition-all"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-body-md text-body-md text-on-surface dark:text-inverse-on-surface hover:text-primary transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
            <p className="font-body-md text-body-md text-on-surface-variant font-light">
              {CONTACT_ADDRESS}
            </p>
            <div className="flex gap-4 mt-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="text-on-surface-variant hover:text-primary transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/30">
          <p className="font-body-md text-body-md text-on-surface dark:text-inverse-on-surface font-light text-sm">
            © {year} Shalala Nail Bar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
