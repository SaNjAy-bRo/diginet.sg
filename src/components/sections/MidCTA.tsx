"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

export function MidCTA() {
  return (
    <section className="py-16 lg:py-24 relative bg-[#00050A] z-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h4 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              We don't just protect data. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-red-600">We protect value.</span>
            </h4>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 font-light leading-relaxed">
              Defend your corporate value and maintain compliance with advanced cybersecurity. Diginet builds secure foundations by combining threat intelligence, risk management, and rapid response capabilities.
            </p>
            <button className="flex items-center text-sm font-bold text-white uppercase tracking-widest group hover:text-brand-orange transition-colors">
              <span className="mr-4">Initiate Assessment</span>
              <div className="w-12 h-[2px] bg-white group-hover:bg-brand-orange transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-orange/50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
              <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Creative "Terminal" Execution Block */}
            <div className="relative rounded-2xl bg-[#050A14] border border-white/10 overflow-hidden shadow-2xl p-6 md:p-10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan"></div>
              
              <div className="flex items-center mb-6 text-gray-500 pb-4 border-b border-white/5">
                <Terminal className="w-5 h-5 mr-3" />
                <span className="font-mono text-sm uppercase">Diginet_Core_Execution</span>
              </div>

              <div className="font-mono text-sm space-y-4">
                <div className="flex">
                  <span className="text-brand-orange mr-4">~</span>
                  <span className="text-gray-400">./deploy_defense_matrix.sh --target=enterprise</span>
                </div>
                <div className="flex items-center opacity-70">
                  <span className="text-gray-500 mr-4">[ OK ]</span>
                  <span className="text-brand-cyan">Initializing telemetry ingestion...</span>
                </div>
                <div className="flex items-center opacity-80">
                  <span className="text-gray-500 mr-4">[ OK ]</span>
                  <span className="text-brand-cyan">Zero-Trust policies enforced on all edge nodes.</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 mr-4">[ OK ]</span>
                  <span className="text-brand-orange font-bold">Adversary emulation blocked. System secure.</span>
                </div>
                <div className="flex items-center pt-2">
                  <span className="text-white mr-4 animate-pulse">_</span>
                </div>
              </div>
              
            </div>
            {/* Backglow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-orange/10 blur-[100px] -z-10 rounded-full"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
