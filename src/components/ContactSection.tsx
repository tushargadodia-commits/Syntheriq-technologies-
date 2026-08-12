import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { ContactFormData } from '../types';
import { Mail, Phone, MapPin, Globe, Send, CheckCircle2, MessageSquare, Clock, Sparkles, Building2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialService?: string;
  initialProject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService, initialProject }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    selectedService: initialService || SERVICES[0].title,
    budgetRange: '₹50,000 - ₹1.5 Lakhs',
    projectDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, selectedService: initialService }));
    } else if (initialProject) {
      setFormData((prev) => ({
        ...prev,
        projectDetails: `Inquiry regarding building a system similar to: ${initialProject}`,
      }));
    }
  }, [initialService, initialProject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in your name, email, and contact phone number.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#ec4899', '#10b981'],
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-pastel-subtle relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/70 text-indigo-800 text-xs font-semibold mb-4 border border-indigo-200/80">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
            <span>Get in Touch with Syntheriq</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's Engineer Your Next Digital Breakthrough
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Have a project in mind or need a custom software proposal? Reach out directly to founder Tushar and our engineering team in West Delhi.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-100 shadow-sm">
              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-6">
                Official Contact Channel
              </h3>

              <div className="space-y-6">
                
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Email Us
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-mono text-sm sm:text-base font-bold text-slate-900 hover:text-indigo-600 transition-colors block"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-[11px] text-slate-500">Direct response from founder within 2 hours</span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Call or WhatsApp
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.phoneClean}`}
                      className="font-mono text-sm sm:text-base font-bold text-slate-900 hover:text-emerald-600 transition-colors block"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}?text=Hello%20Syntheriq%20Technologies,%20I%20would%20like%20to%20inquire%20about%20a%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 hover:underline mt-1"
                    >
                      <span>Chat directly on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Office Location
                    </div>
                    <div className="text-sm font-semibold text-slate-800">
                      {COMPANY_INFO.location}
                    </div>
                    <span className="text-[11px] text-slate-500">Registered Office in Delhi, India</span>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Website URL
                    </div>
                    <a
                      href={COMPANY_INFO.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm font-bold text-slate-900 hover:text-pink-600 transition-colors"
                    >
                      {COMPANY_INFO.website}
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Location Map Card Preview */}
            <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white rounded-3xl p-6 shadow-md border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300 mb-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span>WEST DELHI HUB (PIN: 110041)</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-2">
                Engineering Studio in West Delhi
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Available for in-person consultations across Delhi NCR and virtual discovery meetings across India & international timezones.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-xl">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 mb-1">
                      Send a Direct Message
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Fill in your project details below. We'll respond with a technical breakdown within hours.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all font-mono"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Enterprises"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Service Needed
                      </label>
                      <select
                        name="selectedService"
                        value={formData.selectedService}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer font-medium"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all cursor-pointer font-medium"
                      >
                        <option value="₹30,000 - ₹75,000">₹30,000 - ₹75,000</option>
                        <option value="₹75,000 - ₹1.5 Lakhs">₹75,000 - ₹1.5 Lakhs</option>
                        <option value="₹1.5 Lakhs - ₹3.5 Lakhs">₹1.5 Lakhs - ₹3.5 Lakhs</option>
                        <option value="₹3.5 Lakhs+">₹3.5 Lakhs+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Requirements & Goal
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={4}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Tell us about your project goals, features required, or current software challenges..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl transition-all cursor-pointer disabled:opacity-50 text-sm"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Proposal Request</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-medium pt-2">
                    <Clock className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Average reply time: Under 2 hours during business hours</span>
                  </div>

                </form>
              ) : (
                /* Success State */
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h3 className="font-heading text-2xl font-extrabold text-slate-900">
                    Inquiry Received!
                  </h3>

                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your project proposal request for <strong className="text-slate-900">{formData.selectedService}</strong> has been logged. Tushar will review your requirements and reach out directly at <span className="font-mono text-indigo-600">{formData.email}</span> / <span className="font-mono text-indigo-600">{formData.phone}</span>.
                  </p>

                  <div className="pt-6">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          companyName: '',
                          selectedService: SERVICES[0].title,
                          budgetRange: '₹50,000 - ₹1.5 Lakhs',
                          projectDetails: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
