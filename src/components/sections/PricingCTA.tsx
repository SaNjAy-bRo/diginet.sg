"use client";

import { ArrowRight, Check, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function PricingCTA() {
  const plans = [
    {
      name: "Core Security",
      description: "Essential protection for small to mid-sized businesses.",
      active: false,
      features: [
        "Next-Gen Antivirus (NGAV)",
        "Email Security & Filtering",
        "Monthly Vulnerability Scans",
        "8x5 Support"
      ]
    },
    {
      name: "Advanced Defense",
      description: "Comprehensive managed detection and response.",
      active: true,
      features: [
        "24/7 Managed SOC / MDR",
        "Incident Response Retainer",
        "Advanced Identity Protection",
        "Dark Web Monitoring"
      ]
    },
    {
      name: "Enterprise Zero-Trust",
      description: "Full suite security architectures for complex needs.",
      active: false,
      features: [
        "Dedicated Virtual CISO",
        "Quarterly Penetration Testing",
        "Zero-Trust Network Access",
        "Custom Threat Intelligence"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-32 relative bg-[#00050A] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Side: The "Hero" CTA Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12 relative z-20 pt-10"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-orange/30 text-brand-orange mb-8 glass">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Architectural Alignment</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
              Soundly Protected <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Ecosystems</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl mb-12 font-light leading-relaxed max-w-lg border-l-2 border-brand-cyan/50 pl-6">
              Stop reacting to incidents. Start anticipating them. Partner with Diginet to fortify your defenses today through tailored engagement models.
            </p>
            
            <button className="relative overflow-hidden inline-flex justify-center items-center px-10 py-5 text-base font-bold tracking-widest uppercase text-[#010812] bg-brand-cyan group hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] transition-all duration-300 transform hover:-translate-y-1 rounded-sm">
              <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Request a Consultation
              <ArrowRight className="ml-4 h-5 w-5" />
            </button>
          </motion.div>

          {/* Right Side: Asymmetrical Pricing Cards cascade */}
          <div className="w-full lg:w-7/12 relative z-10 flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center lg:items-stretch">
            
            {/* Left Stack */}
            <div className="flex flex-col gap-6 lg:gap-8 w-full sm:w-1/2 lg:mt-24">
               {/* Core Security */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
                 className="p-8 rounded-[2rem] bg-[#050A14] border border-white/5 hover:border-white/20 transition-all duration-500"
               >
                  <h4 className="text-2xl font-bold text-white mb-2">{plans[0].name}</h4>
                  <p className="text-gray-500 text-sm mb-8">{plans[0].description}</p>
                  <div className="space-y-4">
                    {plans[0].features.map((f, i) => (
                      <div key={i} className="flex items-start text-sm">
                        <Check className="w-5 h-5 mr-3 shrink-0 text-gray-600" />
                        <span className="text-gray-400">{f}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>

               {/* Enterprise */}
               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6, delay: 0.2 }}
                 className="p-8 rounded-[2rem] bg-[#050A14] border border-white/5 hover:border-white/20 transition-all duration-500"
               >
                  <h4 className="text-2xl font-bold text-white mb-2">{plans[2].name}</h4>
                  <p className="text-gray-500 text-sm mb-8">{plans[2].description}</p>
                  <div className="space-y-4">
                    {plans[2].features.map((f, i) => (
                      <div key={i} className="flex items-start text-sm">
                        <Check className="w-5 h-5 mr-3 shrink-0 text-gray-600" />
                        <span className="text-gray-400">{f}</span>
                      </div>
                    ))}
                  </div>
               </motion.div>
            </div>

            {/* Right Stack (The Featured Plan) */}
            <div className="w-full sm:w-1/2 lg:-mt-12 lg:mb-12">
               <motion.div 
                 initial={{ opacity: 0, y: -50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative h-full p-10 rounded-[2.5rem] bg-brand-accent/30 border border-brand-cyan shadow-[0_30px_60px_rgba(0,229,255,0.1)] backdrop-blur-xl overflow-hidden"
               >
                  {/* Internal Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[80px] rounded-full pointer-events-none"></div>
                  
                  <div className="inline-flex items-center px-3 py-1 bg-brand-cyan text-[#00050A] text-xs font-bold uppercase tracking-widest rounded-full mb-8">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Recommended Protocol
                  </div>
                  
                  <h4 className="text-3xl font-bold text-brand-cyan mb-4">{plans[1].name}</h4>
                  <p className="text-gray-300 text-base mb-10 leading-relaxed max-w-xs">{plans[1].description}</p>
                  
                  <div className="space-y-6 mb-12">
                    {plans[1].features.map((f, i) => (
                      <div key={i} className="flex items-start text-base">
                        <div className="p-1 bg-brand-cyan/20 rounded-full mr-4 mt-0.5">
                          <Check className="w-4 h-4 text-brand-cyan" />
                        </div>
                        <span className="text-white font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full py-4 rounded-xl border border-brand-cyan/50 text-brand-cyan font-bold hover:bg-brand-cyan hover:text-[#00050A] transition-all duration-300 shadow-[inset_0_0_20px_rgba(0,229,255,0.1)]">
                    Initiate Deployment
                  </button>
               </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
