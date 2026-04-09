import { Facebook, Phone, MapPin, Star } from "lucide-react";
import { BUSINESS_INFO } from "@/src/constants";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <img
                src="/Logo.png"
                alt="Seamless Gutters 4 Less"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your top local choice for all gutter services in the Puget Sound area. 
              Quality and value you can trust.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={BUSINESS_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={BUSINESS_INFO.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Star size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/#services" className="text-slate-400 hover:text-secondary transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/#reviews" className="text-slate-400 hover:text-secondary transition-colors">Reviews</Link></li>
              <li><Link to="/#areas" className="text-slate-400 hover:text-secondary transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-secondary transition-colors">Request Estimate</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-secondary shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-slate-400 hover:text-white transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-secondary shrink-0" />
                <span className="text-slate-400">
                  {BUSINESS_INFO.address}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Service Counties</h4>
            <ul className="grid grid-cols-2 gap-2 text-slate-400 text-sm">
              <li>King County</li>
              <li>Pierce County</li>
              <li>Thurston County</li>
              <li>Snohomish County</li>
              <li>Mason County</li>
              <li>Kitsap County</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
