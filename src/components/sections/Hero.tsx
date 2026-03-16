"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, BrainCircuit } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-40 lg:pb-32 lg:min-h-screen lg:flex lg:items-center overflow-hidden bg-[#00050A]">
      {/* Bespoke Background Lines (Asymmetrical) */}
      <div className="absolute inset-0 z-0 opacity-20 hidden lg:block">
        <svg viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover">
          <path d="M0 600 C 400 600, 600 200, 1440 400" stroke="#00e5ff" strokeWidth="2" fill="transparent" strokeDasharray="10 10"/>
          <path d="M0 700 C 500 700, 700 300, 1440 500" stroke="#FF5A00" strokeWidth="1" fill="transparent" opacity="0.5"/>
          <path d="M-100 200 L 1500 800" stroke="white" strokeWidth="0.5" fill="transparent" opacity="0.2"/>
        </svg>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 xl:gap-24 pl-0 lg:pl-12">
          
          {/* Left Column (Heading only on mobile, Full text on Desktop) */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 relative z-20 flex flex-col"
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="h-px bg-brand-cyan w-12"></div>
              <span className="text-brand-cyan font-mono text-sm uppercase tracking-[0.2em]">C-Level Security Posture</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter mb-8 lg:mb-12 leading-[1.05]">
              Architecting <br />
              <div className="relative inline-block mt-2 mb-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">Digital Trust</span>
                <div className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 sm:h-8 bg-brand-cyan/20 blur-md rounded-full -z-10"></div>
              </div>
            </h1>

            {/* Desktop Only Text & Buttons (Hidden on mobile to be moved below image) */}
            <div className="hidden lg:block">
              <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-lg font-light leading-relaxed border-l border-white/10 pl-6">
                Transition from reactive IT maintenance to proactive, intelligence-driven cyber defense. We engineer resilience into the DNA of your enterprise infrastructure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden inline-flex justify-center items-center px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-none text-[#00050A] bg-brand-cyan group"
                >
                  <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shimmer_1.5s_infinite]"></div>
                  Deploy Shield
                  <ArrowRight className="ml-3 h-5 w-5" />
                </motion.button>
                <button className="inline-flex justify-center items-center px-8 py-4 border-b-2 border-transparent hover:border-brand-orange text-sm font-bold tracking-widest uppercase text-white transition-all duration-300">
                  Threat Intelligence
                </button>
              </div>
            </div>
          </motion.div>

          {/* Asymmetrical "Glass Interface" graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-7/12 relative perspective-[1200px] mt-4 lg:mt-0 order-2 lg:order-none"
          >
            {/* The Main Mock Interface Board */}
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square xl:aspect-video rounded-3xl border border-white/5 bg-[#00050A] shadow-2xl overflow-hidden transform preserve-3d">
              
              {/* Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80" 
                alt="Cyber Matrix Data Center"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity transform scale-105 hover:scale-100 transition duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00050A] via-[#00050A]/70 to-brand-cyan/20 mix-blend-multiply"></div>

              {/* Animated Network Node Background Overlay */}
              <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>
              
              <div className="relative z-10 h-full p-6 lg:p-8 flex flex-col justify-between">
                
                {/* Header of Interface */}
                <div className="flex justify-between items-start border-b border-white/10 pb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80 animate-pulse"></div>
                  </div>
                  <div className="text-xs font-mono text-brand-cyan">SYSTEM OVERRIDE: ACTIVE</div>
                </div>

                {/* Floating internal cards */}
                <div className="relative h-full w-full mt-6">
                  
                  {/* Card 1 */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute top-0 right-0 lg:right-4 w-48 lg:w-64 p-3 lg:p-5 glass border border-brand-cyan/20 rounded-xl"
                  >
                    <div className="flex items-center space-x-2 lg:space-x-4 mb-2 lg:mb-4">
                      <div className="p-1.5 lg:p-2 bg-brand-cyan/10 text-brand-cyan rounded-lg"><Activity className="w-4 h-4 lg:w-5 lg:h-5"/></div>
                      <div>
                        <p className="text-[10px] lg:text-xs text-gray-400 font-mono hidden sm:block">Real-time Telemetry</p>
                        <p className="text-white font-bold text-sm lg:text-base">128.4 TB/s</p>
                      </div>
                    </div>
                    {/* Fake Chart bars */}
                    <div className="flex items-end space-x-1 h-8 lg:h-12">
                       {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                         <div key={i} className="w-full bg-brand-cyan/50 rounded-t-sm transition-all duration-300 hover:bg-brand-cyan cursor-pointer" style={{ height: `${h}%` }}></div>
                       ))}
                    </div>
                  </motion.div>

                  {/* Card 2 - Overlapping */}
                  <motion.div 
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-4 lg:bottom-10 left-0 lg:-left-12 w-56 lg:w-72 p-4 lg:p-6 glass border border-brand-orange/20 rounded-xl z-20 shadow-[-20px_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
                  >
                    <div className="flex items-start space-x-3 lg:space-x-4">
                      <div className="p-2 lg:p-3 bg-brand-orange text-[#00050A] rounded-xl"><BrainCircuit className="w-5 h-5 lg:w-6 lg:h-6"/></div>
                      <div>
                        <p className="text-white font-bold leading-tight text-sm lg:text-base">AI Threat Neutralization</p>
                        <p className="text-[10px] lg:text-xs text-brand-orange font-mono mt-1 lg:mt-2 flex items-center"><ShieldCheck className="w-3 h-3 mr-1"/> <span className="hidden sm:inline">9,492 Anomalies Blocked</span><span className="inline sm:hidden">9,492 Blocked</span></p>
                        
                        <div className="mt-3 lg:mt-4 w-full bg-white/10 rounded-full h-1">
                          <div className="bg-brand-orange h-1 rounded-full w-[85%] relative">
                             <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#FF5A00]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative Code Block */}
                  <div className="absolute top-1/2 right-10 transform -translate-y-1/2 opacity-40 text-[10px] sm:text-xs font-mono text-brand-cyan hidden md:block">
                     <p>{"function detectThreat(packet) {"}</p>
                     <p className="pl-4">{"const signature = analyze(packet);"}</p>
                     <p className="pl-4">{"if (signature.match(KNOWN_VECTORS)) {"}</p>
                     <p className="pl-8 text-brand-orange">{"return QUARANTINE_PROTOCOL;"}</p>
                     <p className="pl-4">{"}"}</p>
                     <p>{"}"}</p>
                  </div>
                  
                </div>
              </div>
            </div>
            
              {/* Massive blur behind the interface */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-cyan/20 blur-[150px] -z-10 rounded-full mix-blend-screen pointer-events-none"></div>
          </motion.div>

          {/* Mobile Only Text & Buttons (Shown below image on small screens) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="w-full block lg:hidden order-3 mt-8 relative z-20"
          >
            <p className="text-lg text-gray-400 mb-8 font-light leading-relaxed border-l-2 border-brand-cyan/50 pl-4">
              Transition from reactive IT maintenance to proactive, intelligence-driven cyber defense. We engineer resilience into the DNA of your enterprise infrastructure.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="relative overflow-hidden inline-flex justify-center items-center px-8 py-4 text-sm font-bold tracking-widest uppercase rounded-sm text-[#00050A] bg-brand-cyan group w-full sm:w-auto">
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:transition-none"></div>
                Deploy Shield
                <ArrowRight className="ml-3 h-5 w-5" />
              </button>
              <button className="inline-flex justify-center items-center px-8 py-4 border border-white/20 hover:border-brand-orange text-sm font-bold tracking-widest uppercase text-white transition-all duration-300 rounded-sm w-full sm:w-auto">
                Threat Intelligence
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
