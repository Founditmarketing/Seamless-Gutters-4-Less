import { useParams, Link, Navigate } from "react-router-dom";
import { SERVICES, BUSINESS_INFO } from "@/src/constants";
import * as Icons from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import ServiceHero from "@/src/components/ServiceHero";
import { CheckCircle2, Phone } from "lucide-react";

export default function ServicePage() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const IconComponent = (Icons as any)[service.icon];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <ServiceHero 
          title={service.title} 
          description={service.description} 
          image={service.image || "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2069"} 
        />

        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Content Side */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    {IconComponent && <IconComponent size={32} />}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
                    Service Overview
                  </h2>
                </div>

                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                  {service.detailedDescription}
                </p>

                <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Features & Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {service.features?.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
                      <span className="font-medium text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-4">Ready to protect your home?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-xl">
                      Get a free, no-obligation estimate for your {service.title.toLowerCase()} project today. 
                      Our experts are standing by.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold h-14 px-8 text-lg">
                        <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center justify-center">
                          <Phone size={20} className="mr-2" />
                          Call {BUSINESS_INFO.phone}
                        </a>
                      </Button>
                      <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold h-14 px-8 text-lg">
                        <Link to="/contact">Request Online Quote</Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                {/* Other Services */}
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Other Services</h3>
                  <div className="space-y-4">
                    {SERVICES.filter(s => s.slug !== slug).map((s) => {
                      const SIcon = (Icons as any)[s.icon];
                      return (
                        <Link 
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-md transition-all group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors">
                            {SIcon && <SIcon size={20} />}
                          </div>
                          <span className="font-semibold text-slate-700 group-hover:text-primary transition-colors">
                            {s.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="bg-secondary/10 rounded-3xl p-8 border border-secondary/20 text-center">
                  <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-secondary/20">
                    <Icons.ShieldCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Licensed & Insured</h3>
                  <p className="text-slate-600 text-sm">
                    Rest easy knowing your property is protected by a fully licensed and insured professional team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
