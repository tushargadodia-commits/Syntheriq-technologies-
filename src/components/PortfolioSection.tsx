import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { PortfolioProject } from '../types';
import { Layers, ArrowRight, ExternalLink, X, CheckCircle2, Code2, Sparkles, Building, Smartphone, Bot } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForContact: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProjectForContact }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ERP & Systems', label: 'ERP & Systems' },
    { id: 'CRM & Automation', label: 'CRM & Automation' },
    { id: 'Mobile Applications', label: 'Mobile Apps' },
    { id: 'Web Applications', label: 'Web Apps' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold mb-4 border border-blue-200/80">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Featured Technical Work</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Real Software Systems We Engineering
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Explore architecture case studies detailing how we solve complex enterprise challenges across web, mobile, AI, and cloud software domains.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/70 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold font-mono uppercase px-3 py-1 rounded-full bg-indigo-100 text-indigo-800">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {project.clientIndustry}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Key Impact Metric Highlights */}
                <div className="space-y-2 mb-6">
                  {project.impactMetrics.slice(0, 2).map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-100">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 cursor-pointer"
                >
                  <span>Read Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectProjectForContact(project.title)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  Build Similar App
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Case Study Deep-Dive Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto">
            <div className="relative w-full max-w-3xl my-8 bg-white rounded-3xl shadow-2xl border border-purple-100 p-6 md:p-8 backdrop-blur-xl animate-in zoom-in-95 duration-200">
              
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono font-bold uppercase px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                  {selectedProject.category}
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 mb-1">
                  {selectedProject.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Industry: {selectedProject.clientIndustry}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-rose-50/60 p-4 rounded-2xl border border-rose-100">
                  <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-100">
                  <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider mb-2">
                    The Syntheriq Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Key System Features:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-medium text-slate-800">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="mb-6 bg-indigo-50/60 p-4 rounded-2xl border border-indigo-100">
                <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-2">
                  Measurable Impact:
                </h4>
                <div className="space-y-1.5">
                  {selectedProject.impactMetrics.map((met, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-indigo-950 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>{met}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-5 py-2 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs sm:text-sm"
                >
                  Close Case Study
                </button>

                <button
                  onClick={() => {
                    onSelectProjectForContact(selectedProject.title);
                    setSelectedProject(null);
                  }}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-semibold text-xs sm:text-sm shadow-md"
                >
                  <span>Build System Like This</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
