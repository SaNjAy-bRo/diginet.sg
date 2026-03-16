"use client";

import { UserCog, ShieldAlert, Target, Activity, ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Services() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects for different columns
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const services = [
    {
      title: "Virtual CISO Strategy",
      description: "Embed executive-level security governance without the overhead. We execute strategy mapped to your compliance mandates and business velocity.",
      icon: UserCog,
      tag: "STRATEGY",
      color: "from-brand-orange to-[#ff8c00]",
      shadow: "shadow-[0_0_40px_rgba(255,90,0,0.15)]",
      span: "md:col-span-6 lg:col-span-5 flex-col",
      y: y1
    },
    {
      title: "Architecture Consulting",
      description: "Translating complex regulatory demands (MAS, PDPA, GDPR) into robust engineering blueprints. We build architectures that assume breach.",
      icon: ShieldAlert,
      tag: "ENGINEERING",
      color: "from-brand-cyan to-blue-500",
      shadow: "shadow-[0_0_40px_rgba(0,229,255,0.15)]",
      span: "md:col-span-6 lg:col-span-7 bg-brand-accent/5",
      y: y2
    },
    {
      title: "Offensive Security (Pen Testing)",
      description: "Adversary emulation. We exploit your networks, cloud clusters, and applications using nation-state TTPs before the actual threat actors do.",
      icon: Target,
      tag: "OFFENSIVE",
      color: "from-red-500 to-rose-600",
      shadow: "shadow-[0_0_40px_rgba(239,68,68,0.15)]",
      span: "md:col-span-5 lg:col-span-4",
      y: y3
    },
    {
      title: "Active Threat Hunting (MDR)",
      description: "Beyond alerts. Our analysts hunt for anomalies dwelling deep inside your network traffic, executing kill-chain disruption in minutes.",
      icon: Activity,
      tag: "OPERATIONS",
      color: "from-teal-400 to-emerald-500",
      shadow: "shadow-[0_0_40px_rgba(45,212,191,0.15)]",
      span: "md:col-span-7 lg:col-span-8 bg-[#00050A]",
      y: y1
    }
  ];

  return (
    <section id="capabilities" ref={containerRef} className="py-20 lg:py-40 bg-[#00050A] relative overflow-hidden">
      {/* Structural geometric lines */}
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-cyan/20 to-transparent right-[10%] hidden lg:block"></div>
      <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent right-[50%] hidden lg:block"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8 lg:gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="w-12 h-1 bg-brand-orange mb-6"></div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05]">
              Capabilities
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700 mt-2 text-3xl md:text-5xl">Engineered for Resilience</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl max-w-md lg:text-right font-light border-l lg:border-l-0 lg:border-r border-brand-cyan/30 pl-6 lg:pl-0 lg:pr-6"
          >
            Full-spectrum cyber operations. We do not sell tools; we deliver strategic security outcomes.
          </motion.p>
        </div>

        {/* Asymmetrical Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              style={{ y: index % 2 === 0 ? service.y : undefined }} // Apply parallax selectively
              className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#050A14]/80 backdrop-blur-sm p-8 lg:p-12 hover:border-white/20 transition-colors duration-500 ${service.span} ${service.shadow}`}
            >
              {/* Internal glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
              
              <div className="flex flex-col h-full justify-between relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 text-white shadow-xl transform group-hover:-translate-y-2 transition-transform duration-500`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 border border-gray-800 px-3 py-1 rounded-full">{service.tag}</span>
                </div>
                
                <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{service.title}</h4>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8 max-w-sm">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-white uppercase tracking-wider group-hover:text-brand-cyan transition-colors cursor-pointer w-max">
                    <span className="relative">
                      Acknowledge Vector
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300"></div>
                    </span>
                    <ArrowRight className="ml-3 w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
