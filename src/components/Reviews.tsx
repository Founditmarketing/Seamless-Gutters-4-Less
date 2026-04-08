import { REVIEWS } from "@/src/constants";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % (REVIEWS.length - itemsPerPage + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + (REVIEWS.length - itemsPerPage + 1)) % (REVIEWS.length - itemsPerPage + 1));
  };

  const visibleReviews = REVIEWS.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section id="reviews" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">Reviews</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              What Our <span className="text-primary">Customers Say</span>
            </h3>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {visibleReviews.map((review, idx) => (
                <motion.div
                  key={`${review.name}-${currentIndex}-${idx}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <Card className="h-full border-none shadow-lg bg-slate-50 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 text-primary/5 group-hover:text-primary/10 transition-colors">
                      <Quote size={48} fill="currentColor" />
                    </div>
                    
                    <CardContent className="pt-8 pb-6 px-6 relative z-10">
                      <div className="flex text-secondary mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                      
                      <p className="text-slate-700 text-base italic mb-6 leading-relaxed">
                        "{review.text}"
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                          <p className="text-xs text-slate-500 font-medium">{review.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-full">
            <div className="flex text-secondary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="text-slate-700 font-bold text-xs uppercase tracking-wider">
              4.9/5 Average Based on 200+ Google Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
