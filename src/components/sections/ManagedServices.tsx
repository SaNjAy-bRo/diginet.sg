"use client";

import { ShieldAlert, Users, Target, Lock, Activity, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ManagedServices() {
  const operations = [
    {
      icon: ShieldAlert,
      title: "Active Threat Hunting",
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      border: "border-brand-orange/30",
      delay: 0.1,
      pos: "lg:row-span-2"
    },
    {
      icon: Target,
      title: "Real-time SIEM/MDR",
      color: "text-brand-cyan",
      bg: "bg-brand-cyan/10",
      border: "border-brand-cyan/30",
      delay: 0.2,
      pos: "lg:col-span-2"
    },
    {
      icon: Lock,
      title: "Zero-Trust Endpoints",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/30",
      delay: 0.3,
      pos: "lg:col-span-1"
    },
    {
      icon: Users,
      title: "Human Risk Mitigation",
      color: "text-teal-400",
      bg: "bg-teal-400/10",
      border: "border-teal-400/30",
      delay: 0.4,
      pos: "lg:col-span-1"
    },
    {
      icon: Activity,
      title: "Continuous Auditing",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/30",
      delay: 0.5,
      pos: "lg:col-span-2"
    }
  ];

  return (
    <section className="py-16 lg:py-32 bg-[#010812] relative overflow-hidden border-t border-brand-cyan/10">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
        
        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full lg:w-5/12"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-sm border border-brand-cyan/30 text-brand-cyan mb-8 bg-brand-cyan/5">
            <Zap className="w-3 h-3" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Operations Center</span>
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-8">
            Continuous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">Overwatch</span>
          </h3>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 border-l-2 border-brand-orange/50 pl-6 py-2">
            The perimeter is dead. Our Managed Security Services (MSS) deploy defense-in-depth across your entire IT and cloud ecosystem, executing split-second containment protocols when anomalies strike.
          </p>
          <button className="text-sm font-bold text-brand-cyan uppercase tracking-widest hover:text-white transition-colors duration-300">
            [ View Operational SLAs ]
          </button>
        </motion.div>

        {/* Node Layout - replacing grid */}
        <div className="w-full lg:w-7/12 relative">
          {/* Animated connection lines behind nodes */}
          <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none hidden lg:block" style={{ filter: 'drop-shadow(0 0 10px rgba(0,229,255,0.3))'}}>
            <motion.path 
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.3 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M100 150 L300 100 L450 250 L200 350 Z" 
              fill="none" 
              stroke="#00e5ff" 
              strokeWidth="1" 
              strokeDasharray="5 5"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 auto-rows-[140px]">
            {operations.map((op, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: op.delay }}
                key={idx}
                className={`relative group bg-[#050A14]/80 backdrop-blur-md border border-white/5 rounded-3xl p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-500 ${op.pos}`}
              >
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${op.bg.replace('/10', '/5')} pointer-events-none`}></div>
                
                <div className={`w-12 h-12 rounded-xl ${op.bg} ${op.border} border flex items-center justify-center ${op.color} group-hover:scale-110 transition-transform duration-500`}>
                  <op.icon className="w-6 h-6" />
                </div>
                
                <h4 className="text-lg font-bold text-white leading-tight mt-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{op.title}</h4>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
