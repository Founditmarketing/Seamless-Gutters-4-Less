import Navbar from "@/src/components/Navbar";
import About from "@/src/components/About";
import Footer from "@/src/components/Footer";
import ServiceHero from "@/src/components/ServiceHero";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero 
          title="About Us" 
          description="Over 30 years of excellence in gutter installation and repair across the Puget Sound." 
          image="/gutters9.jpg" 
        />
        <About />
      </main>
      <Footer />
    </div>
  );
}
