"use client";

import { motion } from "framer-motion";

export function ThreatTicker() {
  const stats = [
    { label: "Threats Blocked/Day", value: "2.4M+" },
    { label: "Global Datacenters", value: "12" },
    { label: "Avg. Response Time", value: "< 15 min" },
    { label: "Uptime Guaranteed", value: "99.99%" },
    { label: "Security Analysts", value: "150+" },
  ];

  const partners = [
    "CrowdStrike", "Palo Alto", "Cisco", "Fortinet", "SentinelOne", "Microsoft Security"
  ];

  return (
    <div className="bg-[#010812] border-y border-white/5 py-8 overflow-hidden flex flex-col gap-6">
      {/* Stats Marquee */}
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 group-hover:pause">
          {[...stats, ...stats, ...stats].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-brand-orange font-bold text-xl">{stat.value}</span>
              <span className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/50 mx-6"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Partners Marquee (Reverse direction) */}
      <div className="relative flex overflow-x-hidden opacity-50">
        <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-20">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <span key={i} className="text-gray-400 font-bold text-xl tracking-widest uppercase">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
