import { Phone, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/src/constants";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"
          alt="Modern home with clean gutters"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 px-4 py-2 rounded-full mb-6">
              <div className="flex text-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-white text-sm font-bold tracking-wide uppercase">
                Top Rated on Google
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-[1.1]">
              Quality Gutters. <br />
              <span className="text-secondary">Unbeatable Value.</span>
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl">
              Protect your home from water damage with the Puget Sound's price leader. 
              Over 30 years of expert installation, maintenance, and repair.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-7 text-lg shadow-lg shadow-secondary/20 whitespace-nowrap">
                <Link to="/contact" className="flex items-center justify-center">
                  <ArrowRight size={20} className="mr-2" />
                  Get a Free Estimate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-7 text-lg whitespace-nowrap transition-all duration-300">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center justify-center">
                  <Phone size={20} className="mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/80">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">30+</span>
                <span className="text-sm uppercase tracking-wider font-semibold">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">100%</span>
                <span className="text-sm uppercase tracking-wider font-semibold">Satisfaction</span>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white">Local</span>
                <span className="text-sm uppercase tracking-wider font-semibold">Owned & Operated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -mr-20 -mb-20 pointer-events-none" />
    </section>
  );
}
