import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <section className="relative h-[40vh] md:h-[50vh] flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center text-secondary font-bold mb-6 hover:text-white transition-colors group"
            >
              <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/4 h-1/2 bg-primary/10 blur-[100px] rounded-full -mr-10 -mb-10 pointer-events-none" />
    </section>
  );
}
