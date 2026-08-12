import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import { Mail, Phone, MapPin, Globe, ArrowUp, Heart, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEstimator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEstimator }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/90 border-t border-purple-100/80 pt-16 pb-12 relative text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Logo showTagline={true} />

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Syntheriq Technologies is an emerging software and web development company engineering custom digital platforms, mobile applications, AI solutions, CRM & ERP systems for businesses.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-indigo-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Intellectual Property & Source Code Ownership</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {['Home', 'About Us', 'Services', 'Our Process', 'Why Choose Us', 'Portfolio', 'Contact'].map((item) => {
                const id = item.toLowerCase().replace(/\s+/g, '-');
                return (
                  <li key={item}>
                    <button
                      onClick={() => onNavigate(id === 'about-us' ? 'about' : id === 'our-process' ? 'process' : id)}
                      className="text-slate-600 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-indigo-600 transition-colors cursor-pointer text-left line-clamp-1"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info */}
          <div>
            <h4 className="font-heading font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">
              Official Contact
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.location}</span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-600">
                <Mail className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:underline font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-600">
                <Phone className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:underline font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-slate-600">
                <Globe className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                <a href={COMPANY_INFO.websiteUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-mono">
                  {COMPANY_INFO.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-800">{COMPANY_INFO.name}</strong>. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-medium text-slate-600">West Delhi, Delhi, India - 110041</span>
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
