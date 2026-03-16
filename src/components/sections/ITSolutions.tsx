"use client";

import { motion } from "framer-motion";
import { Server, Cloud, Code, Database, ArrowRight } from "lucide-react";

export function ITSolutions() {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable, resilient cloud architectures designed for zero-downtime operations and enterprise-grade performance.",
      icon: Cloud,
      color: "from-blue-500 to-cyan-400"
    },
    {
      title: "Enterprise Networking",
      description: "High-throughput, low-latency network backbones engineered to support global workforce demands securely.",
      icon: Server,
      color: "from-brand-orange to-red-500"
    },
    {
      title: "Custom Development",
      description: "Bespoke software solutions built with modern stacks, focusing on integration, automation, and speed.",
      icon: Code,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Management",
      description: "Robust database structuring, high-availability clusters, and automated disaster recovery protocols.",
      icon: Database,
      color: "from-emerald-400 to-teal-500"
    }
  ];

  return (
    <section id="it-solutions" className="py-24 lg:py-32 bg-sky-50 relative overflow-hidden border-y border-sky-100">
      {/* Background aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-300/30 blur-[120px] rounded-full mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_100%)]"></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 lg:mb-24 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-sky-200 bg-white shadow-[0_2px_10px_rgba(14,165,233,0.1)] mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse shadow-[0_0_8px_rgba(14,165,233,0.6)]"></span>
            <span className="text-sky-700 font-mono text-[10px] sm:text-xs font-bold tracking-wider uppercase">Infrastructure Engineering</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-[1.1] mb-6"
          >
            Enterprise-Grade <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-700">IT Solutions</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed"
          >
            Beyond cybersecurity, we architect the robust digital foundations your business relies on. From seamless cloud migrations to high-availability data centers, our IT solutions are built for velocity and scale.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-sky-100 shadow-[0_10px_40px_rgba(14,165,233,0.08)] rounded-2xl p-8 hover:border-sky-300 hover:shadow-[0_20px_60px_rgba(14,165,233,0.15)] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${solution.color} opacity-0 group-hover:opacity-10 blur-[40px] transition-all duration-500 rounded-full pointer-events-none`}></div>
              
              <div className={`w-14 h-14 rounded-xl mb-8 flex items-center justify-center bg-gradient-to-br ${solution.color} text-white shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300`}>
                <solution.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors">{solution.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-medium">{solution.description}</p>
              
              <div className="mt-auto flex justify-end">
                <div className="w-10 h-10 rounded-full bg-sky-50 border border-sky-100 shadow-sm flex items-center justify-center group-hover:bg-sky-100 group-hover:border-sky-200 transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 text-sky-500 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
