import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Sparkles, Layers, Cpu, Code2 } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectServiceForContact,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 bg-white/95 rounded-3xl shadow-2xl border border-purple-100 p-6 md:p-8 backdrop-blur-xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md flex-shrink-0">
            <Cpu className="w-7 h-7" />
          </div>

          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold mb-1">
              <Sparkles className="w-3 h-3" />
              <span>Syntheriq Solution</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900">
              {service.title}
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              {service.subtitle}
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6 bg-slate-50/80 p-4 rounded-2xl border border-slate-100 text-slate-700 text-sm md:text-base leading-relaxed">
          {service.fullDesc}
        </div>

        {/* Ideal For */}
        <div className="mb-6 bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100">
          <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">
            Best Suited For
          </h4>
          <p className="text-xs md:text-sm text-indigo-950 font-medium">
            {service.idealFor}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Key Deliverables & Specifications</span>
          </h3>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-100 shadow-2xs">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                <span className="text-xs md:text-sm text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-indigo-500" />
            <span>Engineered With</span>
          </h3>

          <div className="flex flex-wrap gap-2">
            {service.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-xl bg-purple-50 text-purple-800 text-xs font-semibold border border-purple-100/80 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs md:text-sm hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onSelectServiceForContact(service.title);
              onClose();
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold text-xs md:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <span>Request Proposal for {service.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
