import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { ServiceDetailModal } from './ServiceDetailModal';
import { Globe, Layout, Smartphone, Sparkles, Users, Building2, Code, Workflow, ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'web', label: 'Web Development & Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI Solutions' },
    { id: 'enterprise', label: 'CRM, ERP & Automation' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'web') return s.category === 'web';
    if (selectedCategory === 'mobile') return s.category === 'mobile';
    if (selectedCategory === 'ai') return s.category === 'ai';
    if (selectedCategory === 'enterprise') return s.category === 'enterprise';
    return true;
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe': return <Globe className="w-6 h-6 text-indigo-600" />;
      case 'Layout': return <Layout className="w-6 h-6 text-purple-600" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-pink-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-500" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-600" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-emerald-600" />;
      case 'Code': return <Code className="w-6 h-6 text-indigo-600" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-rose-600" />;
      default: return <Globe className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white via-slate-50/80 to-purple-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-800 text-xs font-semibold mb-4 border border-purple-200/80">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Comprehensive Technology Services</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            End-to-End Software & Technology Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Syntheriq Technologies provides businesses with robust, custom-engineered software systems designed to solve operational bottlenecks, increase conversion, and drive long-term digital growth.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid - 8 Services Total */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-glass-card bg-glass-card-hover rounded-3xl p-6 flex flex-col justify-between relative group border border-purple-100/80"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center mb-5 border border-purple-100 shadow-2xs group-hover:scale-110 transition-transform duration-300">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {service.shortDesc}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.techStack.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-slate-100/80 text-slate-700 border border-slate-200/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-purple-50 text-purple-700">
                      +{service.techStack.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setActiveModalService(service)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group-hover:translate-x-0.5 transition-all cursor-pointer"
                >
                  <span>Full Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectServiceForContact(service.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Service Deep Dive */}
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
          onSelectServiceForContact={onSelectServiceForContact}
        />

      </div>
    </section>
  );
};
