import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { BUSINESS_INFO } from "@/src/constants";
import { Phone, ArrowRight, Wrench, Home, Award, Users, ThumbsUp, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "30+ Years of Mastery",
    description:
      "Our craft has been refined over three decades of hands-on work across every roof style and climate the Pacific Northwest can throw at us.",
  },
  {
    icon: Users,
    title: "Locally Owned & Operated",
    description:
      "We're your neighbors — not a national franchise. Every job is personal to us because this is our community too.",
  },
  {
    icon: ThumbsUp,
    title: "Honest, Upfront Pricing",
    description:
      "No hidden fees, no surprises. We give you a clear, itemized quote before any work begins — and we stick to it.",
  },
  {
    icon: Clock,
    title: "On Time, Every Time",
    description:
      "We respect your schedule. Our crews show up when they say they will and clean up completely when the job is done.",
  },
];

const process = [
  {
    step: "01",
    title: "Free On-Site Estimate",
    description:
      "We come to you. Our estimator walks the entire roofline, checks the fascia boards, and measures every run — completely free, no pressure.",
  },
  {
    step: "02",
    title: "Custom Fabrication",
    description:
      "Your gutters are roll-formed on-site to the exact length of each run. No seams, no weak points — just one continuous piece of heavy-gauge aluminum.",
  },
  {
    step: "03",
    title: "Expert Installation",
    description:
      "Our experienced crews install using hidden hangers spaced for maximum strength, pitched correctly so water always flows toward your downspouts.",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description:
      "Before we leave, we walk the property with you, flush every downspout, and make sure you're 100% satisfied with the finished result.",
  },
];

export default function About() {
  return (
    <div className="overflow-hidden">

      {/* ── Our Story ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/gutters9.jpg"
                  alt="Gutter installation crew at work"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
                <img
                  src="/gutters1.JPG"
                  alt="Seamless gutters on brick home"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover mt-10"
                />
                <img
                  src="/gutters18.jpg"
                  alt="Modern black gutters"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover"
                />
                <img
                  src="/gutters11.jpg"
                  alt="Clean white gutters on brick home"
                  className="rounded-2xl shadow-xl w-full h-48 object-cover mt-6"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-secondary text-white px-6 py-4 rounded-2xl shadow-xl hidden md:block">
                <span className="block text-4xl font-extrabold leading-none">30+</span>
                <span className="block text-xs font-bold uppercase tracking-widest opacity-90 mt-1">Years Serving<br />Puget Sound</span>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Our Story</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Built on Trust,<br />
                <span className="text-primary">One Gutter at a Time</span>
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Seamless Gutters 4 Less was founded with one straightforward goal: deliver the highest-quality gutter systems in the Puget Sound area at a price that every homeowner can feel good about. We're a locally owned, family-run operation — and that means every job we take on carries our personal reputation.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                From humble beginnings doing residential repairs in Pierce County, we've grown to serve homeowners and property managers from Marysville in the north all the way to Shelton in the south — including Seattle, Tacoma, Bellevue, Everett, and everywhere in between. Through every project, our commitment stays the same: do it right the first time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-14 text-base">
                  <Link to="/contact" className="flex items-center">
                    <ArrowRight size={18} className="mr-2" />
                    Get a Free Estimate
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-50 font-bold px-8 h-14 text-base">
                  <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center">
                    <Phone size={18} className="mr-2" />
                    {BUSINESS_INFO.phone}
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">What We Stand For</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-slate-600">
              These aren't just words on a wall — they're the standards our crew holds itself to on every single job.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-md border border-slate-100 flex gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <v.icon size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-2">{v.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">How It Works</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Our Simple Process</h3>
            <p className="text-lg text-slate-600">
              From your first call to final sign-off, here's exactly what to expect when you work with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* connector line desktop */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-slate-200 z-0" />

            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center text-3xl font-extrabold shadow-lg shadow-primary/20 mb-6">
                  {p.step}
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-3">{p.title}</h4>
                <p className="text-slate-600 leading-relaxed text-sm">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Photo Strip ── */}
      <section className="py-0 overflow-hidden">
        <div className="flex">
          {["/gutters2.jpg", "/gutters7.jpg", "/gutters10.jpg", "/gutters12.jpg", "/gutters15.jpg"].map((src, i) => (
            <div key={i} className="flex-1 h-48 md:h-64 overflow-hidden">
              <img
                src={src}
                alt={`Gutter project ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── Service Area ── */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Where We Work</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                Serving the Entire<br />Puget Sound Region
              </h3>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                We cover six counties across Western Washington — from the tip of Snohomish County down through King, Pierce, Kitsap, Mason, and Thurston. Whether you're in a downtown Seattle condo complex or a rural Shelton property, our crews come to you.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-10">
                {["Seattle", "Tacoma", "Bellevue", "Everett", "Olympia", "Puyallup", "Renton", "Kent", "Marysville", "Shelton"].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-slate-300">
                    <div className="w-2 h-2 rounded-full bg-secondary shrink-0" />
                    <span className="font-medium">{city}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 h-14 text-base">
                <Link to="/contact" className="flex items-center">
                  <ArrowRight size={18} className="mr-2" />
                  Schedule Your Free Estimate
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img
                src="/gutters5.jpg"
                alt="Seamless Gutters 4 Less service truck"
                className="rounded-3xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-white/80 text-xl mb-10 max-w-xl mx-auto">
              Join thousands of Puget Sound homeowners who trust Seamless Gutters 4 Less for quality they can see and pricing they can afford.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold px-10 h-14 text-base shadow-lg">
                <Link to="/contact" className="flex items-center">
                  <ArrowRight size={18} className="mr-2" />
                  Get a Free Estimate
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 font-bold px-10 h-14 text-base">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  {BUSINESS_INFO.phone}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
