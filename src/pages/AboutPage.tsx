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
          image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
        />
        <About />
      </main>
      <Footer />
    </div>
  );
}
