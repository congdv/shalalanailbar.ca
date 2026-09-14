import PromoBanner from "@/components/PromoBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <PromoBanner />
        <Header />
      </div>
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
