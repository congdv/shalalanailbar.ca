import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/images/manicure-salon.jpg",
    alt: "Nail technician shaping a client's nude almond nails at a salon table.",
    width: 1800,
    height: 1200,
    offset: false,
  },
  {
    src: "/images/manicure-polish.jpg",
    alt: "Technician applying clear polish over a natural French manicure.",
    width: 1013,
    height: 1800,
    offset: true,
  },
  {
    src: "/images/nails-nude.jpg",
    alt: "Hand with glossy nude square nails resting on soft white fur.",
    width: 1128,
    height: 1800,
    offset: false,
  },
  {
    src: "/images/manicure-teal.jpg",
    alt: "Close up of soft pink polish being brushed onto a client's nail.",
    width: 1800,
    height: 1197,
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
                width={img.width}
                height={img.height}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
