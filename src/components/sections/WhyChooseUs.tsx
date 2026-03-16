"use client";

import { CheckCircle2, Crosshair, Fingerprint, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const reasons = [
    {
      title: "PROACTIVE DEFENSE",
      description: "We don't just react to threats. Our advanced telemetry and AI-driven monitoring proactively identify and neutralize risks before they impact your operations.",
      icon: Crosshair
    },
    {
      title: "EXPERT TEAM",
      description: "Our certified security analysts, pentesters, and incident responders act as an extension of your team, providing 24/7 coverage and unmatched expertise.",
      icon: Shield
    },
    {
      title: "TAILORED STRATEGY",
      description: "We understand that security is not one-size-fits-all. We design comprehensive security architectures aligned specifically with your unique business goals.",
      icon: Fingerprint
    },
    {
      title: "SEAMLESS INTEGRATION",
      description: "Our solutions deploy rapidly and integrate seamlessly with your existing infrastructure, ensuring maximum protection with minimal disruption.",
      icon: Cpu
    }
  ];

  return (
    <section className="py-16 lg:py-32 bg-[#020C1B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Sticky */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 relative z-10">
            <h2 className="flex items-center text-sm font-semibold text-brand-orange tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-brand-orange mr-3"></span>
              The Diginet Advantage
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
              Precision. <br/>
              Velocity. <br/>
              <span className="text-brand-cyan">Resilience.</span>
            </h3>
            <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed font-light">
              Cybersecurity is complex, but your experience with it shouldn't be. Diginet abstracts the complexity of modern threat defense, providing clear visibility and actionable intelligence.
            </p>
            
            {/* Holographic Element */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden glass border border-brand-cyan/20 hidden lg:block">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark via-brand-cyan/5 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-32 h-32 border border-brand-cyan/30 rounded-full flex items-center justify-center">
                   <div className="absolute inset-0 border border-brand-cyan/50 rounded-full animate-[spin_4s_linear_infinite]"></div>
                   <div className="absolute inset-2 border border-dashed border-brand-orange/40 rounded-full animate-[spin_6s_linear_infinite_reverse]"></div>
                   <Shield className="w-10 h-10 text-brand-cyan" />
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="w-full lg:w-7/12 relative z-10">
            <div className="space-y-8 lg:space-y-12 lg:pt-20">
              {reasons.map((reason, index) => (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  key={index} 
                  className="relative p-8 lg:p-10 rounded-[2rem] bg-[#050A14] border border-white/5 hover:border-white/10 transition-colors group overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/5 to-transparent rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="flex gap-6 lg:gap-8 items-start relative z-10">
                    <div className="shrink-0">
                       <div className="w-16 h-16 rounded-2xl bg-brand-cyan/10 border border-brand-cyan/20 flex flex-col items-center justify-center group-hover:bg-brand-cyan group-hover:text-[#00050A] text-brand-cyan transition-all duration-500 transform group-hover:scale-110">
                         <reason.icon className="w-8 h-8" />
                       </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono text-gray-500">0{index + 1}</span>
                        <div className="h-px w-8 bg-white/10"></div>
                      </div>
                      <h4 className="text-2xl font-bold text-white tracking-tight mb-4">{reason.title}</h4>
                      <p className="text-gray-400 text-lg leading-relaxed font-light">{reason.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
