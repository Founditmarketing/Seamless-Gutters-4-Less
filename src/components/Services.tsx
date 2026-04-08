import { SERVICES } from "@/src/constants";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=2000"
          alt="Gutter background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Comprehensive Gutter Solutions
          </h3>
          <p className="text-lg text-slate-300">
            We handle all aspects of gutter services to keep your home safe from water damage all year round. 
            From custom installation to routine maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = (Icons as any)[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`} className="block h-full">
                  <Card className={`h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 group ${service.primary ? 'ring-2 ring-secondary' : 'hover:-translate-y-1'}`}>
                    <CardHeader className="p-8 pb-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-colors ${service.primary ? 'bg-secondary text-white' : 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white'}`}>
                        {IconComponent && <IconComponent size={28} />}
                      </div>
                      <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wider group-hover:text-secondary transition-colors">
                          Learn More
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {service.primary && (
                          <div className="inline-flex items-center text-secondary font-bold text-xs uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                            Our Specialty
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
