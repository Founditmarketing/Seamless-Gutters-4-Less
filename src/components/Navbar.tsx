import { useState, useEffect } from "react";
import { Phone, Facebook, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO, SERVICES } from "@/src/constants";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Reviews", href: "/#reviews" },
    { name: "Service Areas", href: "/#areas" },
    { name: "Contact", href: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className={`font-heading font-extrabold text-xl md:text-2xl leading-none ${isScrolled || !isHomePage ? "text-primary" : "text-white"}`}>
            SEAMLESS GUTTERS
          </span>
          <span className={`font-heading font-bold text-lg md:text-xl leading-none ${isScrolled || !isHomePage ? "text-secondary" : "text-secondary"}`}>
            4 LESS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          <Link
            to="/"
            className={`font-medium transition-colors hover:text-secondary whitespace-nowrap ${
              isScrolled || !isHomePage ? "text-slate-700" : "text-white"
            }`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`font-medium transition-colors hover:text-secondary whitespace-nowrap ${
              isScrolled || !isHomePage ? "text-slate-700" : "text-white"
            }`}
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium transition-colors hover:text-secondary whitespace-nowrap ${
                isScrolled || !isHomePage ? "text-slate-700" : "text-white"
              }`}
            >
              Services
              <ChevronDown size={16} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden py-2"
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.title}
                      to={`/services/${service.slug}`}
                      className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/#reviews"
            className={`font-medium transition-colors hover:text-secondary whitespace-nowrap ${
              isScrolled || !isHomePage ? "text-slate-700" : "text-white"
            }`}
          >
            Reviews
          </Link>

          <Link
            to="/#areas"
            className={`font-medium transition-colors hover:text-secondary whitespace-nowrap ${
              isScrolled || !isHomePage ? "text-slate-700" : "text-white"
            }`}
          >
            Service Areas
          </Link>

          <Link
            to="/contact"
            className={`font-medium transition-colors hover:text-secondary whitespace-nowrap ${
              isScrolled || !isHomePage ? "text-slate-700" : "text-white"
            }`}
          >
            Contact
          </Link>

          <div className="flex items-center gap-4 lg:gap-6">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-secondary shrink-0 ${
                isScrolled || !isHomePage ? "text-slate-700" : "text-white"
              }`}
            >
              <Facebook size={20} />
            </a>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-4 lg:px-6 h-11 whitespace-nowrap shrink-0">
              <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center justify-center">
                <Phone size={18} className="mr-2" />
                {BUSINESS_INFO.phone}
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 rounded-md transition-colors ${isScrolled || !isHomePage ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <Link
                to="/"
                className="text-xl font-bold text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-xl font-bold text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div className="flex flex-col gap-4">
                <button 
                  className="flex items-center justify-between text-xl font-bold text-slate-800"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown size={24} className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden flex flex-col gap-3 pl-4 border-l-2 border-slate-100"
                    >
                      {SERVICES.map((service) => (
                        <Link
                          key={service.title}
                          to={`/services/${service.slug}`}
                          className="text-lg font-medium text-slate-600 hover:text-primary"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/#reviews"
                className="text-xl font-bold text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </Link>

              <Link
                to="/#areas"
                className="text-xl font-bold text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Service Areas
              </Link>

              <Link
                to="/contact"
                className="text-xl font-bold text-slate-800 hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
                <Button asChild className="w-full bg-primary text-white font-bold h-14 text-xl shadow-lg shadow-primary/20 whitespace-nowrap">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center justify-center">
                    <Phone size={24} className="mr-3" />
                    Call Now
                  </a>
                </Button>
                <a
                  href={BUSINESS_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-slate-600 font-medium"
                >
                  <Facebook size={20} />
                  Follow us on Facebook
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
