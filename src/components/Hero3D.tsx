import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowRight, Code2, Sparkles, ShieldCheck, ChevronRight, Smartphone, Bot, Cpu, Layers, Zap, Database } from 'lucide-react';
import heroImg from '../assets/images/tech_hero_3d_1786547737207.jpg';
import logoImg from '../assets/images/syntheriq_logo_1786547720568.jpg';

interface Hero3DProps {
  onNavigate: (sectionId: string) => void;
  onOpenEstimator: () => void;
}

export const Hero3D: React.FC<Hero3DProps> = ({ onNavigate, onOpenEstimator }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  // Parallax Mouse Movement Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D tilt calculation (max 10deg)
    setRotateX((-y / rect.height) * 12);
    setRotateY((x / rect.width) * 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-pastel-mesh select-none"
    >
      {/* Background Soft Pastel Ambient Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div
        className="absolute top-40 right-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ animationDelay: '2s' }}
      />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Brand Tag Pill */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-purple-200/80 shadow-sm text-slate-700 text-xs font-medium mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold text-indigo-700">{COMPANY_INFO.name}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-600 font-mono">West Delhi, India</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] mb-6"
            >
              Engineering the{' '}
              <span className="text-gradient-primary relative inline-block">
                Future
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-300/60" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0, 100 15" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>{' '}
              of Enterprise Tech
            </motion.h1>

            {/* Clear Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Syntheriq Technologies engineers modern software solutions for businesses. We build fast web applications, native & cross-platform mobile apps, AI integrations, CRM & ERP systems, and custom automation platforms designed for scale, speed, and real enterprise impact.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-slate-800 font-semibold px-6 py-3.5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 text-purple-800 font-medium px-5 py-3.5 rounded-2xl border border-purple-200/80 transition-colors cursor-pointer text-sm"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Estimate Project</span>
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-purple-100/80 w-full max-w-lg text-left"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">100% IP Ownership</div>
                  <div className="text-[11px] text-slate-500">Full Source Access</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Type-Safe Code</div>
                  <div className="text-[11px] text-slate-500">Modern Stack</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-pink-50 text-pink-600">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">AI-Powered</div>
                  <div className="text-[11px] text-slate-500">Ready Automation</div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Interactive 3D Parallax Stage */}
          <div className="lg:col-span-5 relative [perspective:1200px]">
            
            <motion.div
              style={{
                rotateX: `${rotateX}deg`,
                rotateY: `${rotateY}deg`,
                transformStyle: 'preserve-3d',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-glass-card p-3 shadow-2xl transition-shadow duration-300 hover:shadow-indigo-200/50"
            >
              {/* Main 3D Interactive Software Architecture View */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-white/80 bg-slate-900/5 aspect-[4/3] [transform-style:preserve-3d]">
                <img
                  src={heroImg}
                  alt="Syntheriq 3D Software Architecture"
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />

                {/* Light reflection ray */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1 - Official Brand Logo Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-7 -left-6 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-purple-100 flex items-center gap-3 [transform:translateZ(40px)]"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-100 bg-white p-0.5 shadow-sm flex-shrink-0">
                  <img
                    src={logoImg}
                    alt="Syntheriq Logo"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Syntheriq Platform</div>
                  <div className="text-[10px] text-indigo-600 font-semibold font-mono">Enterprise Software</div>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Mobile & Cloud Sync */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-6 -right-4 bg-white/95 backdrop-blur-xl p-3.5 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 [transform:translateZ(50px)]"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-sm flex-shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">iOS, Android & Web</div>
                  <div className="text-[10px] text-pink-600 font-semibold font-mono">Cross-Platform Sync</div>
                </div>
              </motion.div>

              {/* Floating Badge 3 - AI Node Status */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white/95 backdrop-blur-xl px-3.5 py-2.5 rounded-xl shadow-lg border border-emerald-100 hidden sm:flex items-center gap-2.5 [transform:translateZ(30px)]"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <div>
                  <div className="text-[11px] font-bold text-slate-900">AI & LLM Pipeline</div>
                  <div className="text-[9px] font-mono text-emerald-600">Active Node</div>
                </div>
              </motion.div>

              {/* Floating 3D Pastel Geometry Cubes */}
              <div className="absolute -bottom-8 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-200/80 to-purple-200/80 backdrop-blur-md border border-white/80 shadow-md rotate-12 pointer-events-none [transform:translateZ(20px)]" />
              <div className="absolute top-6 -right-6 w-8 h-8 rounded-lg bg-gradient-to-br from-pink-200/80 to-rose-200/80 backdrop-blur-md border border-white/80 shadow-md -rotate-12 pointer-events-none [transform:translateZ(25px)]" />

            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
