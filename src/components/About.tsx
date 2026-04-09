import { CheckCircle2 } from "lucide-react";
import { BUSINESS_INFO } from "@/src/constants";
import { motion } from "motion/react";

export default function About() {
  const benefits = [
    "Locally Owned & Operated",
    "30+ Years of Experience",
    "Perfect Google Rating",
    "Custom Seamless Solutions",
    "Price Leader in Puget Sound",
    "Reliable & Expert Craftsmanship",
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <img
                src="/gutters5.jpg"
                alt="Seamless Gutters 4 Less company truck"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-primary text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <span className="block text-5xl font-bold mb-1">30+</span>
                <span className="block text-sm font-semibold uppercase tracking-widest opacity-80">
                  Years of Expert Service
                </span>
              </div>
            </motion.div>
            {/* Background decoration */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Why Choose Us</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8">
                The Seamless Gutters 4 Less Difference
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {BUSINESS_INFO.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary" size={24} />
                    <span className="font-semibold text-slate-800">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 border-l-4 border-primary p-6 rounded-r-2xl">
                <p className="italic text-slate-700 text-lg">
                  "As the price leader in the area, we offer great prices without cutting corners. 
                  Count on us for reliable service, excellent craftsmanship, and a smooth experience."
                </p>
                <div className="mt-4 font-bold text-primary">— The Seamless Gutters 4 Less Team</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
