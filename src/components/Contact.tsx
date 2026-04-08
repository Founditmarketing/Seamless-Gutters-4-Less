import { useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS_INFO } from "@/src/constants";
import { motion } from "motion/react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "New Gutter Installation",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage("Please provide at least your name and phone number.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", address: "", service: "New Gutter Installation", message: "" });
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : "Failed to send. Please call us directly.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h2>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6">
                Request Your <br />
                <span className="text-secondary">Free Estimate</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Ready to protect your home? Reach out today and experience the Seamless Gutters 4 Less difference!
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</div>
                    <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Our Office</div>
                    <div className="text-lg font-semibold text-slate-900">
                      {BUSINESS_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Business Hours</div>
                    <div className="text-lg font-semibold text-slate-900">
                      Mon - Fri: 8:00 AM - 6:00 PM <br />
                      Sat: By Appointment
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <CheckCircle className="text-green-500" size={64} />
                  <h3 className="text-2xl font-extrabold text-slate-900">Request Sent!</h3>
                  <p className="text-slate-600 max-w-md">
                    Thank you! We've received your estimate request and will get back to you within 24 hours.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
                    onClick={() => setStatus("idle")}
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Name *</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-slate-50 border-slate-200 py-6"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Phone Number *</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="bg-slate-50 border-slate-200 py-6"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Email Address</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-slate-50 border-slate-200 py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Service Address</label>
                    <Input
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="123 Main St, Tacoma, WA"
                      className="bg-slate-50 border-slate-200 py-6"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Service Needed</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    >
                      <option>New Gutter Installation</option>
                      <option>Gutter Repair</option>
                      <option>Gutter Cleaning</option>
                      <option>Gutter Guards</option>
                      <option>Soffit &amp; Fascia Repair</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Message / Details</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="bg-slate-50 border-slate-200 min-h-[150px]"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-700">
                      <AlertCircle size={20} className="shrink-0" />
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-8 text-xl shadow-lg shadow-secondary/20 whitespace-nowrap flex flex-row items-center justify-center disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={20} className="mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Request
                      </>
                    )}
                  </Button>

                  <p className="text-center text-slate-500 text-sm">
                    We'll get back to you within 24 hours. For immediate assistance, please call us.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
