import Navbar from "@/src/components/Navbar";
import Contact from "@/src/components/Contact";
import ServiceHero from "@/src/components/ServiceHero";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero 
          title="Contact Us" 
          description="Ready for a free estimate? Get in touch with our expert team today." 
          image="/contact%20new.jpg" 
        />
        <Contact />
      </main>
    </div>
  );
}
