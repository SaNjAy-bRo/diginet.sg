"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ChevronRight, Shield, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Cybersecurity", href: "/#cybersecurity" },
    { name: "IT Solutions", href: "/#it-solutions" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Blogs", href: "/#blogs" },
    { name: "Contact Us", href: "/#contact" },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? 'py-4' : 'py-6'} px-4 sm:px-6 lg:px-8`}>
        <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-500 flex items-center justify-between px-6 py-4 ${scrolled ? 'glass border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] bg-[#050A14]/80' : 'bg-transparent border border-transparent'}`}>
          
          <Link href="/" className="flex items-center space-x-2 group z-50">
            <img 
              src="/diginetnewlogo.png" 
              alt="Diginet Cybersecurity" 
              className="h-12 md:h-14 w-auto object-contain transition-transform duration-300 transform group-hover:scale-105 py-1"
            />
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-center flex-grow">
            <ul className="flex space-x-10 text-sm font-bold tracking-wider uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors relative flex flex-col group py-2">
                    {link.name}
                    <span className="h-[2px] w-0 bg-brand-cyan transition-all duration-300 group-hover:w-full mt-1"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4 z-50">
            <button className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-[#010812] transition-all duration-300 bg-brand-cyan hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] group clip-path-slant relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                 Execute Consult
                 <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></div>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex lg:hidden items-center justify-center p-2 text-white hover:text-brand-cyan transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#00050A] backdrop-blur-2xl lg:hidden flex flex-col"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <img 
                src="/diginetnewlogo.png" 
                alt="Diginet Cybersecurity" 
                className="h-10 w-auto object-contain"
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-white hover:text-brand-orange transition-colors bg-white/5 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-brand-cyan/30 text-brand-cyan mb-10 bg-brand-cyan/5 self-start">
                <Shield className="w-4 h-4" />
                <span className="text-xs font-mono tracking-[0.2em] uppercase">Secure Portal Access</span>
              </div>
              
              <ul className="flex flex-col space-y-6 text-3xl font-black uppercase tracking-tighter w-full">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                    className="border-b border-white/5 pb-4"
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-gray-300 hover:text-white hover:pl-4 transition-all duration-300 flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-brand-cyan" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-10">
                <p className="text-gray-500 text-sm mb-4">Emergency Incident Response?</p>
                <div className="flex items-center space-x-3 text-brand-orange font-bold text-lg mb-8">
                  <PhoneCall className="w-5 h-5" />
                  <span>1-800-CYBER-SEC</span>
                </div>
                <button className="w-full flex items-center justify-center px-6 py-4 text-sm font-bold tracking-widest uppercase text-[#010812] bg-brand-cyan transition-colors hover:bg-white relative overflow-hidden group">
                  <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:transition-none"></div>
                  Execute Consultation
                  <ChevronRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

