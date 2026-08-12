import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImg from '../assets/images/syntheriq_logo_1786547720568.jpg';
import { Sparkles, ArrowRight } from 'lucide-react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Accessibility check for reduced motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Full 5.8s cinematic timeline before initiating smooth fade-out
    const timer = setTimeout(() => {
      handleFinish();
    }, 5800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleFinish = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 700); // Smooth 700ms overlay exit transition
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50/95 to-blue-50/95 backdrop-blur-3xl overflow-hidden select-none"
        >
          {/* STAGE 1 (0–1s): Soft Futuristic Particles, Light Grid & Pastel Ambient Glows */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Holographic Matrix Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.22 }}
              transition={{ duration: 1.0 }}
              className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:30px_30px]"
            />

            {/* Ambient Light Orbs */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.6, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-200/50 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.55, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-3xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ scale: [0.9, 1.1, 0.9], opacity: [0.25, 0.5, 0.25] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-pink-100/40 rounded-full blur-3xl"
            />

            {/* Floating Energy Particles */}
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: (i % 4) * 220 - 330,
                  y: Math.random() * 400 - 200,
                  opacity: 0,
                  scale: 0.3,
                }}
                animate={{
                  y: [0, -45, 0],
                  opacity: [0, 0.75, 0],
                  scale: [0.4, 0.9, 0.4],
                }}
                transition={{
                  duration: 2.8 + (i % 4) * 0.7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.2 + i * 0.12,
                }}
                className={`absolute w-2 h-2 rounded-full ${
                  i % 3 === 0
                    ? 'bg-sky-400/70 shadow-[0_0_12px_#38bdf8]'
                    : i % 3 === 1
                    ? 'bg-purple-400/70 shadow-[0_0_12px_#c084fc]'
                    : 'bg-emerald-400/70 shadow-[0_0_12px_#34d399]'
                }`}
                style={{
                  top: `${12 + (i * 5.5)}%`,
                  left: `${8 + (i * 5.8)}%`,
                }}
              />
            ))}
          </div>

          {/* Quick Skip Button */}
          <button
            onClick={handleFinish}
            className="absolute top-6 right-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 border border-purple-200/80 shadow-xs text-xs font-semibold backdrop-blur-md transition-all cursor-pointer hover:scale-105"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* MAIN STAGE: TWO AI ASSISTANTS & FLOATING OFFICIAL LOGO */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-between min-h-[460px] md:min-h-[520px]">

            {/* LEFT AI ASSISTANT (STAGES 1-2: 1–2s Entry, 2–3s Hand Extension) */}
            <motion.div
              initial={{ x: -140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center relative w-1/4 sm:w-1/3 max-w-[240px]"
            >
              <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                
                {/* Holographic Base Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className="absolute bottom-0 w-36 h-8 bg-sky-300/40 rounded-full blur-md"
                />

                {/* Left AI Assistant SVG Graphic */}
                <svg
                  viewBox="0 0 200 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  <defs>
                    <linearGradient id="leftArmorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#e2e8f0" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="leftCyanEnergy" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#818cf8" />
                    </linearGradient>
                    <filter id="glowLeft" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Body & Torso Armor */}
                  <path
                    d="M70 120 C70 95, 130 95, 130 120 L125 190 C125 210, 75 210, 75 190 Z"
                    fill="url(#leftArmorGrad)"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  {/* Chest Reactor Core */}
                  <circle cx="100" cy="140" r="10" fill="url(#leftCyanEnergy)" filter="url(#glowLeft)" />
                  <circle cx="100" cy="140" r="5" fill="#ffffff" />

                  {/* Neck & Head */}
                  <rect x="92" y="78" width="16" height="18" rx="4" fill="#e2e8f0" />
                  <path
                    d="M75 50 C75 25, 125 25, 125 50 C125 75, 75 75, 75 50 Z"
                    fill="url(#leftArmorGrad)"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />
                  {/* Glowing Visor */}
                  <path
                    d="M80 46 Q100 42 120 46 C122 52, 118 56, 100 58 C82 56, 78 52, 80 46 Z"
                    fill="url(#leftCyanEnergy)"
                    filter="url(#glowLeft)"
                  />

                  {/* Shoulder Joint */}
                  <circle cx="125" cy="115" r="12" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                  <circle cx="125" cy="115" r="5" fill="#38bdf8" />

                  {/* EXTENDED INNER HAND SUPPORTING LOGO (2–3s Animation) */}
                  <motion.g
                    initial={{ rotate: 22 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 1.1, delay: 2.1, ease: 'easeOut' }}
                    style={{ transformOrigin: '125px 115px' }}
                  >
                    <path d="M125 115 L160 135" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
                    <path d="M125 115 L160 135" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" />

                    <circle cx="160" cy="135" r="7" fill="#38bdf8" filter="url(#glowLeft)" />

                    <path d="M160 135 L195 130" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                    <path d="M160 135 L195 130" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />

                    <circle cx="196" cy="130" r="6" fill="#38bdf8" filter="url(#glowLeft)" />
                    <path d="M196 130 L200 115" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowLeft)" />
                    <path d="M196 130 L200 130" stroke="#818cf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowLeft)" />
                    <path d="M196 130 L200 145" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowLeft)" />
                  </motion.g>
                </svg>

                {/* Holographic Palm Energy Beam (3–4s) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: [0.4, 0.95, 0.5], scale: [0.8, 1.25, 0.9] }}
                  transition={{ duration: 1.8, delay: 3.1, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute right-[-14px] top-[38%] w-16 h-16 bg-gradient-to-tr from-sky-400/50 to-indigo-400/50 rounded-full blur-md pointer-events-none"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-2 hidden sm:block"
              >
                AI Assistant Node Alpha
              </motion.div>
            </motion.div>


            {/* CENTER: LOGO MATERIALIZATION & LIFTING REVEAL (3–5s) */}
            <div className="flex-1 flex flex-col items-center justify-center text-center relative z-20 px-2">
              
              {/* Supporting Light Beam Platform */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.8, delay: 3.2 }}
                className="absolute w-48 sm:w-64 h-12 bg-gradient-to-r from-sky-300/40 via-purple-300/50 to-pink-300/40 rounded-full blur-lg -bottom-2 pointer-events-none"
              />

              {/* Glowing Ambient Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: [0.4, 0.85, 0.5],
                  scale: [0.9, 1.12, 0.9],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 3.2 }}
                className="absolute w-36 h-36 sm:w-48 sm:h-48 bg-gradient-to-tr from-indigo-300/40 via-purple-300/50 to-pink-300/40 rounded-full blur-xl pointer-events-none"
              />

              {/* OFFICIAL SYNTHERIQ LOGO: Materializes (3-4s) & Floats Upward between hands (4-5s) */}
              <motion.div
                initial={{ y: 55, opacity: 0, scale: 0.65 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.1, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-20 flex items-center justify-center mb-5"
              >
                {/* Holographic Palm Energy Rays from Left & Right Hands */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.85, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 3.6 }}
                  className="absolute -left-12 top-1/2 w-12 h-0.5 bg-gradient-to-r from-sky-400 to-indigo-400 blur-[1px]"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.3, 0.85, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 3.6 }}
                  className="absolute -right-12 top-1/2 w-12 h-0.5 bg-gradient-to-l from-emerald-400 to-pink-400 blur-[1px]"
                />

                {/* EXACT Uploaded Official Syntheriq Logo Image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 4.3 }}
                  className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center"
                >
                  <img
                    src={logoImg}
                    alt="Official Syntheriq Technologies Logo"
                    className="w-full h-full object-contain drop-shadow-2xl rounded-3xl p-1 bg-white/50 backdrop-blur-xs border border-white/70"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </motion.div>

              {/* STAGE 6 (5–6s): BRANDING TEXT & SUPPORTING MESSAGE REVEAL */}
              <motion.div
                initial={{ y: 22, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 4.8, ease: 'easeOut' }}
                className="space-y-1.5 relative z-20"
              >
                {/* Syntheriq Technologies */}
                <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-none">
                  Syntheriq <span className="text-indigo-600">Technologies</span>
                </h1>

                {/* Tagline: Engineering the Future */}
                <div className="flex items-center justify-center gap-2 pt-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span className="text-xs sm:text-sm md:text-base font-bold text-indigo-700 tracking-wide font-mono">
                    Engineering the Future
                  </span>
                </div>

                {/* Supporting Brand Message */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 5.2 }}
                  className="text-xs sm:text-sm text-slate-600 font-normal italic pt-1 max-w-sm mx-auto"
                >
                  Engineering intelligent technology for a smarter future.
                </motion.p>
              </motion.div>

            </div>


            {/* RIGHT AI ASSISTANT (STAGES 1-2: 1–2s Entry, 2–3s Hand Extension) */}
            <motion.div
              initial={{ x: 140, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center relative w-1/4 sm:w-1/3 max-w-[240px]"
            >
              <div className="relative w-full aspect-[3/4] flex items-center justify-center">
                
                {/* Holographic Base Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.4 }}
                  className="absolute bottom-0 w-36 h-8 bg-purple-300/40 rounded-full blur-md"
                />

                {/* Right AI Assistant SVG Graphic */}
                <svg
                  viewBox="0 0 200 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full drop-shadow-2xl overflow-visible"
                >
                  <defs>
                    <linearGradient id="rightArmorGrad" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="50%" stopColor="#f1f5f9" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="rightPinkEnergy" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <filter id="glowRight" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Body & Torso Armor */}
                  <path
                    d="M70 120 C70 95, 130 95, 130 120 L125 190 C125 210, 75 210, 75 190 Z"
                    fill="url(#rightArmorGrad)"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                  />
                  {/* Chest Reactor Core */}
                  <circle cx="100" cy="140" r="10" fill="url(#rightPinkEnergy)" filter="url(#glowRight)" />
                  <circle cx="100" cy="140" r="5" fill="#ffffff" />

                  {/* Neck & Head */}
                  <rect x="92" y="78" width="16" height="18" rx="4" fill="#e2e8f0" />
                  <path
                    d="M75 50 C75 25, 125 25, 125 50 C125 75, 75 75, 75 50 Z"
                    fill="url(#rightArmorGrad)"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                  />
                  {/* Glowing Visor */}
                  <path
                    d="M80 46 Q100 42 120 46 C122 52, 118 56, 100 58 C82 56, 78 52, 80 46 Z"
                    fill="url(#rightPinkEnergy)"
                    filter="url(#glowRight)"
                  />

                  {/* Shoulder Joint */}
                  <circle cx="75" cy="115" r="12" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" />
                  <circle cx="75" cy="115" r="5" fill="#ec4899" />

                  {/* EXTENDED INNER HAND SUPPORTING LOGO (2–3s Animation) */}
                  <motion.g
                    initial={{ rotate: -22 }}
                    animate={{ rotate: 0 }}
                    transition={{ duration: 1.1, delay: 2.1, ease: 'easeOut' }}
                    style={{ transformOrigin: '75px 115px' }}
                  >
                    <path d="M75 115 L40 135" stroke="#94a3b8" strokeWidth="10" strokeLinecap="round" />
                    <path d="M75 115 L40 135" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" />

                    <circle cx="40" cy="135" r="7" fill="#ec4899" filter="url(#glowRight)" />

                    <path d="M40 135 L5 130" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
                    <path d="M40 135 L5 130" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" />

                    <circle cx="4" cy="130" r="6" fill="#ec4899" filter="url(#glowRight)" />
                    <path d="M4 130 L0 115" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowRight)" />
                    <path d="M4 130 L0 130" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowRight)" />
                    <path d="M4 130 L0 145" stroke="#ec4899" strokeWidth="2.5" strokeLinecap="round" filter="url(#glowRight)" />
                  </motion.g>
                </svg>

                {/* Holographic Palm Energy Beam (3–4s) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{ opacity: [0.4, 0.95, 0.5], scale: [0.8, 1.25, 0.9] }}
                  transition={{ duration: 1.8, delay: 3.1, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-[-14px] top-[38%] w-16 h-16 bg-gradient-to-tr from-pink-400/50 to-purple-400/50 rounded-full blur-md pointer-events-none"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-2 hidden sm:block"
              >
                AI Assistant Node Beta
              </motion.div>
            </motion.div>

          </div>

          {/* Bottom Sleek Progress Indicator Beam */}
          <div className="absolute bottom-8 w-52 h-1 bg-slate-200/80 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 5.6, ease: 'easeInOut' }}
              className="h-full bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 rounded-full"
            />
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};
