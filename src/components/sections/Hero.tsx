"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, ShieldCheck, Activity, BrainCircuit } from "lucide-react";

export function Hero() {
  const DashboardGraphic = (
    <div className="relative w-full rounded-xl sm:rounded-2xl border border-gray-800/60 bg-[#0d1421] shadow-2xl shadow-brand-cyan/5 overflow-hidden backdrop-blur-3xl p-1 md:p-2 lg:p-4">
      {/* Inner screen area */}
      <div className="relative w-full bg-[#05080f] rounded-lg sm:rounded-xl overflow-hidden border border-gray-900 border-opacity-50 h-full flex flex-col">
        
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-3 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-[#0a0f18] gap-2 sm:gap-0">
           <div className="flex items-center space-x-2">
             <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-cyan" />
             <span className="text-gray-300 text-xs sm:text-sm font-semibold tracking-wide">Threat Operations Center</span>
           </div>
           <div className="flex items-center justify-between sm:justify-end space-x-4 w-full sm:w-auto">
             <div className="flex items-center space-x-2">
               <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-cyan animate-pulse"></span>
               <span className="text-gray-500 text-[10px] sm:text-xs font-mono uppercase tracking-widest">Live Sync</span>
             </div>
             <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[8px] sm:text-[10px] font-mono bg-brand-orange/10 text-brand-orange rounded border border-brand-orange/20">DEFCON 5</span>
           </div>
        </div>

        {/* Dashboard Metrics Grid */}
        <div className="p-3 sm:p-4 md:px-6 md:py-6 grid grid-cols-1 sm:grid-cols-2 flex-grow gap-3 sm:gap-4">
          
          {/* Metric Block 1 */}
          <div className="bg-[#0a0f18] border border-gray-800/80 rounded-md sm:rounded-lg p-4 sm:p-5">
             <div className="flex justify-between items-start mb-3 sm:mb-4">
                <p className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Network Telemetry</p>
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-cyan" />
             </div>
             <p className="text-white text-2xl sm:text-3xl font-light mb-1">128.4 <span className="text-sm sm:text-lg text-gray-500 font-medium tracking-normal">TB/s</span></p>
             
             {/* Clean Bar Chart */}
             <div className="flex items-end space-x-1 sm:space-x-1.5 h-8 sm:h-12 w-full mt-4 sm:mt-6">
                {[30, 45, 25, 60, 85, 40, 75, 50, 95, 65, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-brand-cyan/20 hover:bg-brand-cyan transition-colors duration-300 rounded-t-sm" style={{ height: `${h}%` }}></div>
                ))}
             </div>
          </div>

          {/* Metric Block 2 */}
          <div className="bg-[#0a0f18] border border-gray-800/80 rounded-md sm:rounded-lg p-4 sm:p-5">
             <div className="flex justify-between items-start mb-3 sm:mb-4">
                <p className="text-gray-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Threats Neutralized</p>
                <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-orange" />
             </div>
             <p className="text-white text-2xl sm:text-3xl font-light mb-1">9,492</p>
             <p className="text-gray-500 text-[10px] sm:text-xs mt-1 sm:mt-2">Past 24 hours</p>

             {/* Clean Progress/Status Lines */}
             <div className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
               <div>
                 <div className="flex justify-between text-[8px] sm:text-[10px] text-gray-400 mb-1">
                   <span>Phishing Attempts</span>
                   <span className="text-gray-300">82%</span>
                 </div>
                 <div className="w-full bg-gray-800/50 rounded-full h-1">
                   <div className="bg-brand-cyan h-1 rounded-full w-[82%]"></div>
                 </div>
               </div>
               <div>
                 <div className="flex justify-between text-[8px] sm:text-[10px] text-gray-400 mb-1">
                   <span>Malware Signatures</span>
                   <span className="text-gray-300">14%</span>
                 </div>
                 <div className="w-full bg-gray-800/50 rounded-full h-1">
                   <div className="bg-brand-orange h-1 rounded-full w-[14%]"></div>
                 </div>
               </div>
             </div>
          </div>

        </div>
        
        {/* Console Log Area */}
        <div className="bg-[#030508] border-t border-gray-900 p-3 sm:p-4 font-mono text-[8px] sm:text-[10px] md:text-xs leading-relaxed">
           <p className="text-gray-600 mb-0.5 sm:mb-1">{"// System logs initiating..."}</p>
           <p className="text-brand-cyan opacity-80 mb-0.5 sm:mb-1">{"> analyzing incoming packets from sub-node 0x8A..."}</p>
           <p className="text-gray-400 mb-0.5 sm:mb-1">{"> standard protocol validated."}</p>
           <p className="text-brand-orange">{"> [WARNING] Anomaly detected on port 443. Auto-quarantine protocol engaged."}</p>
        </div>

      </div>
    </div>
  );

  return (
    <section className="relative pt-28 pb-16 lg:pt-40 lg:pb-32 lg:min-h-screen lg:flex lg:items-center overflow-hidden bg-[#0a0f18]">
      
      {/* Enterprise Subtle Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#0a0f18]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_20%,transparent_100%)] opacity-30"></div>
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[80%] h-[300px] bg-brand-cyan/10 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-24">
          
          {/* Left Column: Enterprise Typography & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left z-20"
          >
            {/* Status Pill */}
            <div className="mb-6 lg:mb-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
                </span>
                <span className="text-brand-cyan font-mono text-[10px] sm:text-xs font-semibold tracking-wider uppercase">Enterprise Defense Active</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-[1.1] lg:leading-tight">
              Architecting <br className="hidden sm:block lg:hidden"/>
              <span className="text-brand-cyan">Digital Trust</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-10 leading-relaxed max-w-xl lg:max-w-2xl font-light px-2 sm:px-0">
              Transition from reactive IT maintenance to comprehensive, intelligence-driven cyber defense. We engineer absolute resilience into the core DNA of your organizational infrastructure.
            </p>

            {/* Mobile Only: Dashboard Graphic (Appears between text and buttons) */}
            <motion.div 
               initial={{ opacity: 0, y: 20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
               className="w-full lg:hidden relative mb-8 sm:mb-10"
            >
               {DashboardGraphic}
            </motion.div>
            
            <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4">
              <button className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold tracking-widest uppercase rounded text-[#0a0f18] bg-brand-cyan hover:bg-white transition-colors duration-300">
                <Shield className="mr-2 h-4 w-4" />
                Deploy Defenses
              </button>
              <button className="w-full sm:w-auto inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 text-sm font-bold tracking-widest uppercase rounded text-white border border-gray-700 hover:border-brand-cyan hover:bg-brand-cyan/5 transition-all duration-300 group">
                Threat Intelligence
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/50 lg:border-gray-800 flex flex-wrap justify-center lg:justify-start items-center gap-x-4 gap-y-3 sm:gap-6 text-[10px] sm:text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider w-full">
               <span>ISO 27001 Certified</span>
               <span className="hidden sm:inline w-1 h-1 bg-gray-700 rounded-full"></span>
               <span>GDPR Compliant</span>
               <span className="hidden sm:inline w-1 h-1 bg-gray-700 rounded-full"></span>
               <span>24/7 SOC</span>
            </div>
          </motion.div>

          {/* Right Column: Professional Dashboard Visual (Desktop Only) */}
          <motion.div 
             initial={{ opacity: 0, y: 20, scale: 0.95 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
             className="hidden lg:block w-full lg:w-7/12 relative mt-6 sm:mt-10 lg:mt-0 lg:ml-auto"
          >
            {DashboardGraphic}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
