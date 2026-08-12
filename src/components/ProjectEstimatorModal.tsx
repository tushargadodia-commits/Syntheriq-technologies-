import React, { useState } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Sparkles, Send, CheckCircle2, Calculator } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';
import confetti from 'canvas-confetti';

interface ProjectEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectEstimatorModal: React.FC<ProjectEstimatorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState('2 - 4 Weeks');
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const featureOptionsMap: Record<string, string[]> = {
    'Website Development': ['SEO & Fast Performance', 'Custom UI/UX Animations', 'CMS Integration', 'Multi-language Support', 'Lead Inquiry Forms'],
    'Web Applications': ['User Auth & RBAC', 'Real-time WebSockets', 'Dashboard Analytics', 'Payment Gateway Integration', 'Cloud Database Sync'],
    'Mobile App Development for Android and iOS': ['Cross-Platform Flutter/React Native', 'Offline Support', 'Push Notifications', 'Camera/GPS Sensors', 'In-App Payments'],
    'AI Solutions': ['Custom Gemini/LLM Assistant', 'RAG Document Search', 'Intelligent Chatbot', 'Automated Data Extraction', 'Predictive Models'],
    'CRM Development': ['Lead Pipeline Kanban', 'Automated WhatsApp Routing', 'Client Activity Logs', 'Sales Analytics', 'Role Permissions'],
    'ERP Systems': ['Inventory & Stock Control', 'Multi-Branch Dispatch', 'Automated GST Invoicing', 'Purchase Order Workflows', 'Staff Management'],
    'Custom Software Development': ['Custom Business Logic', 'REST API Architecture', 'Legacy System Migration', 'Automated Unit Tests', '100% Code Ownership'],
    'Business Automation': ['Webhook API Integration', 'Scheduled Batch Sync', 'Auto-Invoice Generation', 'Multi-app Data Pipelines', 'Error Notifications'],
  };

  const currentFeatures = featureOptionsMap[selectedService] || featureOptionsMap['Website Development'];

  const toggleFeature = (feat: string) => {
    if (selectedFeatures.includes(feat)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== feat));
    } else {
      setSelectedFeatures([...selectedFeatures, feat]);
    }
  };

  const calculateEstimateRange = () => {
    let base = 40000;
    if (selectedService.includes('Mobile') || selectedService.includes('ERP')) base = 90000;
    if (selectedService.includes('AI') || selectedService.includes('Custom')) base = 80000;
    const featureCost = selectedFeatures.length * 12000;
    const min = base + featureCost;
    const max = Math.round(min * 1.4);
    return `₹${min.toLocaleString('en-IN')} - ₹${max.toLocaleString('en-IN')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl my-8 bg-white/95 rounded-3xl shadow-2xl border border-purple-100 p-6 md:p-8 backdrop-blur-xl animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-500 flex items-center justify-center text-white shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-slate-900">
                Interactive Project Estimator
              </h3>
              <p className="text-xs text-slate-500">
                Syntheriq Technologies • Fast Proposal Generator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <div>
            {/* Stepper Progress */}
            <div className="flex items-center justify-between mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                      step === i
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : step > i
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-100 text-slate-400'
                    }`}
                  >
                    {step > i ? <Check className="w-3.5 h-3.5" /> : i}
                  </div>
                  <span className="hidden sm:inline text-xs font-semibold text-slate-600">
                    {i === 1 ? 'Service' : i === 2 ? 'Features' : i === 3 ? 'Timeline' : 'Contact'}
                  </span>
                  {i < 4 && <div className="w-6 sm:w-10 h-0.5 bg-slate-100" />}
                </div>
              ))}
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Step 1: Select Core Software Category
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {SERVICES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedService(s.title);
                        setSelectedFeatures([]);
                      }}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedService === s.title
                          ? 'bg-indigo-50/80 border-indigo-500 ring-2 ring-indigo-200'
                          : 'bg-white border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{s.title}</div>
                      <div className="text-[11px] text-slate-500 line-clamp-1">{s.subtitle}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Feature Selection */}
            {step === 2 && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Step 2: Select Desired Features for {selectedService}
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Choose specific modules to customize your scope estimation.
                </p>

                <div className="space-y-2 mb-6">
                  {currentFeatures.map((feat) => {
                    const isSelected = selectedFeatures.includes(feat);
                    return (
                      <button
                        key={feat}
                        onClick={() => toggleFeature(feat)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <span>{feat}</span>
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                            isSelected ? 'border-white bg-white/20' : 'border-slate-300'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 3: Timeline Selection */}
            {step === 3 && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
                  Step 3: Target Delivery Timeline
                </h4>
                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                  {['1 - 2 Weeks (Express)', '2 - 4 Weeks (Standard)', '1 - 2 Months (Enterprise)'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setTimeline(time)}
                      className={`p-4 rounded-2xl border text-center text-xs font-bold transition-all cursor-pointer ${
                        timeline === time
                          ? 'bg-purple-50 border-purple-500 text-purple-900 ring-2 ring-purple-200'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {/* Estimate Preview Box */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-2xl border border-indigo-100 text-center mb-6">
                  <span className="text-[11px] font-bold text-indigo-700 uppercase tracking-wider">
                    Estimated Budget Range
                  </span>
                  <div className="text-2xl font-extrabold text-indigo-950 font-mono my-1">
                    {calculateEstimateRange()}
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Includes full design, engineering, QA, and production deployment in West Delhi.
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Contact Info & Submit */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Step 4: Where Should We Send the Detailed Proposal?
                </h4>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    placeholder="Rahul Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={contactInfo.email}
                      onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      placeholder="+91 9289425381"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Additional Notes</label>
                  <textarea
                    rows={2}
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    placeholder="Any specific tech requirements or business goals..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white font-bold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer text-xs sm:text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Proposal Request to Tushar</span>
                </button>
              </form>
            )}

            {/* Stepper Footer Nav */}
            <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-6">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : (
                <div />
              )}

              {step < 4 && (
                <button
                  onClick={() => setStep(step + 1)}
                  className="flex items-center gap-1 text-xs font-bold px-5 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-colors cursor-pointer"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>
        ) : (
          /* Submission Complete */
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              Proposal Request Submitted!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
              We have generated your scope estimate for <strong className="text-slate-900">{selectedService}</strong> ({calculateEstimateRange()}). Tushar will review your details and send an official architecture roadmap to <span className="font-mono text-indigo-600">{contactInfo.email}</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                onClose();
              }}
              className="px-6 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold cursor-pointer"
            >
              Done & Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
