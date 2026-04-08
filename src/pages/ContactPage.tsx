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
          image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069" 
        />
        <Contact />
      </main>
    </div>
  );
}
