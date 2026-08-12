import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/companyData';
import { Search, PenTool, Code2, ShieldCheck, Rocket, Headphones, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search': return <Search className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Headphones': return <Headphones className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  const currentStep = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-100/70 text-pink-800 text-xs font-semibold mb-4 border border-pink-200/80">
            <Sparkles className="w-3.5 h-3.5 text-pink-600" />
            <span>Structured Engineering Methodology</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            How We Engineering Your Software
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Our 6-phase engineering lifecycle ensures transparent communication, predictable delivery timelines, and rigorous quality control at every stage.
          </p>
        </div>

        {/* Desktop Process Stepper Bar */}
        <div className="hidden lg:grid grid-cols-6 gap-2 mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-100 -translate-y-1/2 -z-0" />

          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isCompleted = idx < activeStep;

            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`relative z-10 flex flex-col items-center p-4 rounded-2xl transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-indigo-50 to-purple-50 border-2 border-indigo-500 shadow-md scale-105'
                    : isCompleted
                    ? 'bg-white border border-indigo-200 hover:border-indigo-400'
                    : 'bg-white border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center font-mono font-bold text-sm mb-2 transition-all ${
                    isActive
                      ? 'bg-gradient-to-tr from-indigo-600 to-pink-500 text-white shadow-sm'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {step.number}
                </div>
                <div className="text-xs font-bold text-slate-800 text-center line-clamp-1">
                  {step.title.split(' ')[0]} {step.title.split(' ')[1] || ''}
                </div>
              </button>
            );
          })}
        </div>

        {/* Mobile Step Switcher Dropdown/Grid */}
        <div className="lg:hidden grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`py-2 px-3 rounded-xl text-xs font-mono font-bold border transition-colors cursor-pointer ${
                activeStep === idx
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              Step {step.number}
            </button>
          ))}
        </div>

        {/* Step Detail Card */}
        <div className="bg-gradient-to-br from-indigo-50/50 via-purple-50/30 to-pink-50/50 rounded-3xl p-8 lg:p-12 border border-purple-100 shadow-sm relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-600 text-white">
                  Phase {currentStep.number} of 06
                </span>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  {currentStep.duration}
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 mb-4">
                {currentStep.title}
              </h3>

              <p className="text-slate-600 text-base leading-relaxed mb-6">
                {currentStep.description}
              </p>

              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Phase Deliverables:
                </h4>
                <div className="space-y-2">
                  {currentStep.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="font-medium">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual Indicator */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white shadow-sm text-center">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white mb-4 shadow-lg">
                {getStepIcon(currentStep.icon)}
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-1">
                {currentStep.title}
              </h4>
              <p className="text-xs text-slate-500 mb-6">
                Syntheriq Engineering Standards
              </p>

              <div className="w-full flex items-center justify-between text-xs font-semibold text-indigo-600 pt-4 border-t border-slate-100">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-40 cursor-pointer"
                >
                  Previous Phase
                </button>

                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-40 cursor-pointer flex items-center gap-1"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
