import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import HomeAbout from "@/src/components/HomeAbout";
import Areas from "@/src/components/Areas";
import Reviews from "@/src/components/Reviews";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomeAbout />
        <Services />
        <Reviews />
        <Areas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
