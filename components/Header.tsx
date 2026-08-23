export default function Header() {
  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 flex justify-between items-center w-full px-6 py-4 max-w-container-max-width mx-auto">
      <div className="h-10 w-auto flex items-center font-display-lg text-primary text-2xl tracking-widest">
        SHALALA
      </div>
      <nav className="hidden md:flex space-x-8">
        <a
          className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors"
          href="#services"
        >
          Services
        </a>
        <a
          className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors"
          href="#about"
        >
          About
        </a>
        <a
          className="font-label-sm text-label-sm text-on-surface hover:text-primary transition-colors"
          href="#gallery"
        >
          Gallery
        </a>
      </nav>
      <a
        href="#book"
        className="font-label-sm text-label-sm text-primary dark:text-primary-fixed font-bold border-b border-primary hover:text-primary transition-colors duration-300"
      >
        BOOK NOW
      </a>
    </header>
  );
}
