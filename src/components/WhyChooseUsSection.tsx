import React from 'react';
import { WHY_CHOOSE_US, AGENCY_COMPARISON } from '../data/companyData';
import { Cpu, MessageSquareCode, KeyRound, Zap, Layers, Handshake, Check, X, Shield, Award, Sparkles } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-indigo-600" />;
      case 'MessageSquareCheck':
      case 'MessageSquareCode': return <MessageSquareCode className="w-6 h-6 text-purple-600" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-pink-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-600" />;
      case 'Handshake': return <Handshake className="w-6 h-6 text-emerald-600" />;
      default: return <Cpu className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 bg-pastel-mesh relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-emerald-800 text-xs font-semibold mb-4 border border-emerald-200/80">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Why Choose Syntheriq Technologies</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built Different. Built For Growth.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            We operate with absolute transparency, software engineering discipline, and a focus on long-term client success rather than short-term markups.
          </p>
        </div>

        {/* 6 Value Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {WHY_CHOOSE_US.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-md rounded-3xl p-7 border border-purple-100/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                  {getPillarIcon(pillar.icon)}
                </div>
                <span className="text-[10px] font-bold font-mono uppercase px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 border border-purple-100">
                  {pillar.badge}
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Comparison Matrix Table */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-lg">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl text-slate-900 mb-2">
              Syntheriq Technologies vs. Generic Software Agencies
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              A transparent look at how our technical approach differs from standard outsource vendors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="py-4 px-4 w-1/4">Evaluation Criteria</th>
                  <th className="py-4 px-4 w-3/8 text-indigo-700 bg-indigo-50/60 rounded-t-xl">
                    Syntheriq Technologies
                  </th>
                  <th className="py-4 px-4 w-3/8 text-slate-600">
                    Typical Agency / Freelancer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {AGENCY_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-4 font-bold text-slate-900">
                      {row.feature}
                    </td>

                    <td className="py-4 px-4 bg-indigo-50/30 text-slate-800 font-medium border-x border-indigo-100/50">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>{row.syntheriq}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 text-slate-500">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" />
                        <span>{row.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
