import React from 'react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/companyData';
import { Shield, Sparkles, Target, Compass, Award, HeartHandshake, Check, MapPin, Mail, Phone, Users, Rocket } from 'lucide-react';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-pastel-subtle relative overflow-hidden">
      {/* Decorative Pastel Background Circles */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/70 text-indigo-800 text-xs font-semibold mb-4 border border-indigo-200/80">
            <Compass className="w-3.5 h-3.5 text-indigo-600" />
            <span>About Syntheriq Technologies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Engineered with Purpose, Driven by Quality
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Syntheriq Technologies is an emerging software and digital engineering company based in West Delhi, India. We help businesses modernize operations through custom web applications, mobile apps, AI solutions, and enterprise CRM/ERP systems.
          </p>
        </div>

        {/* Company Overview & Pillars */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Main Story Box */}
          <div className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-sm flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <Logo showTagline={true} />
              </div>

              <h3 className="font-heading font-bold text-2xl text-slate-900 mb-4">
                Building Real Enterprise Value Through Modern Tech
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                In a digital landscape filled with bloated templates and rigid off-the-shelf platforms, Syntheriq Technologies stands for technical precision. We write bespoke code aligned directly with your business logic.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Our core commitment centers around four non-negotiable principles: <strong className="text-slate-900">Innovation</strong>, <strong className="text-slate-900">Reliability</strong>, <strong className="text-slate-900">Transparency</strong>, and <strong className="text-slate-900">Long-term Client Partnerships</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-slate-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 mt-0.5">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Transparency First</h4>
                  <p className="text-xs text-slate-500">No hidden costs or vague technical jargon.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-purple-50 text-purple-600 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Long-term Partner</h4>
                  <p className="text-xs text-slate-500">Dedicated support well beyond deployment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info & Location Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-6 backdrop-blur-sm">
                <MapPin className="w-3.5 h-3.5" />
                <span>Headquarters</span>
              </div>

              <h3 className="font-heading font-bold text-2xl text-white mb-6">
                Based in New Delhi, Serving Businesses Globally
              </h3>

              <div className="space-y-4 text-sm text-indigo-50">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-pink-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div>{COMPANY_INFO.location}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-pink-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Official Email</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline text-white font-mono text-xs">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-pink-200 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Phone & WhatsApp</div>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:underline text-white font-mono text-xs">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/20 flex items-center justify-between text-xs text-indigo-100">
              <span className="font-semibold">{COMPANY_INFO.tagline}</span>
              <span className="font-mono bg-white/20 px-2.5 py-1 rounded-md">{COMPANY_INFO.workingHours}</span>
            </div>
          </div>

        </div>

        {/* Founder Spotlight Card */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-md relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Founder Avatar / Icon */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1.5 shadow-lg mb-4">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-indigo-600 font-heading text-4xl font-extrabold shadow-inner">
                  T
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-slate-900">{FOUNDER_INFO.name}</h3>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-2 font-mono">
                {FOUNDER_INFO.role}
              </p>
              <div className="text-xs text-slate-500 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{FOUNDER_INFO.location}</span>
              </div>
            </div>

            {/* Right Founder Philosophy */}
            <div className="lg:col-span-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-slate-100 pt-6 lg:pt-0 lg:pl-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-700 text-xs font-semibold mb-3 w-max">
                <Rocket className="w-3.5 h-3.5" />
                <span>Founder's Vision</span>
              </div>

              <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-6">
                "{FOUNDER_INFO.philosophy}"
              </blockquote>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {FOUNDER_INFO.bio}
              </p>

              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${FOUNDER_INFO.email}`} className="hover:underline font-mono">
                  {FOUNDER_INFO.email}
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
