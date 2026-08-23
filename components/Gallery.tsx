import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/hero-manicure.jpg",
    alt: "Close up of a perfect, minimalist almond-shaped manicure with a glossy nude finish and a single delicate gold flake accent on one nail. Soft, high-key lighting.",
    offset: false,
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Aesthetically pleasing overhead shot of perfectly manicured hands resting softly on a plush, cream-colored silk fabric. The nails feature a sophisticated French tip design in soft blush.",
    offset: true,
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Detailed view of luxury pedicure setting: clean, pedicured feet with a timeless red polish resting near a marble basin filled with warm water, rose petals, and a soft glow.",
    offset: false,
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Close up of elegant, elongated stiletto nails featuring a matte dusty rose finish with intricate, ultra-thin metallic gold line art. Minimalist and chic aesthetic.",
    offset: true,
  },
];

export default function Gallery() {
  return (
    <section
      className="py-section-padding-mobile md:py-section-padding-desktop bg-surface-container-high px-6"
      id="gallery"
    >
      <div className="max-w-container-max-width mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Gallery
          </h2>
          <a
            href="#"
            className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest hover:text-primary transition-colors hidden md:block"
          >
            Follow on IG
          </a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.src + img.alt}
              className={`aspect-square rounded-lg overflow-hidden group${img.offset ? " md:mt-8" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1408}
                height={768}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
