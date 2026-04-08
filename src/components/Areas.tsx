import { MapPin, RotateCcw } from "lucide-react";
import { SERVICE_AREAS } from "@/src/constants";
import { motion } from "motion/react";
import ServiceMap from "./ServiceMap";
import { useState } from "react";

const DEFAULT_VIEW: { center: [number, number]; zoom: number } = {
  center: [47.4829, -122.2170],
  zoom: 8
};

export default function Areas() {
  const [mapView, setMapView] = useState(DEFAULT_VIEW);

  return (
    <section id="areas" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Reach</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-8">
                Serving the Entire <br />
                <span className="text-secondary">Puget Sound Area</span>
              </h3>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Click on a city below to see our service area on the map. We cover the entire Puget Sound region.
              </p>
              
              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-8">
                {SERVICE_AREAS.map((area) => (
                  <button 
                    key={area.name} 
                    onClick={() => setMapView({ center: area.coords, zoom: 12 })}
                    className="flex items-center gap-3 group text-left transition-all hover:translate-x-1"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                      <MapPin size={16} className="text-secondary group-hover:text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-secondary transition-colors">{area.name}</span>
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setMapView(DEFAULT_VIEW)}
                className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider"
              >
                <RotateCcw size={16} />
                Reset Map View
              </button>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <ServiceMap view={mapView} />
              
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-full shadow-lg z-[1000] flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" />
                <span className="text-sm font-bold uppercase tracking-wider">Service Radius</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

