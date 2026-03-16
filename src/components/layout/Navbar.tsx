"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, PhoneCall, ChevronRight, Shield } from "lucide-react";
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
    { name: "Threat Intel", href: "#" },
    { name: "Services", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Company", href: "#" },
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
            className="fixed inset-0 z-40 bg-[#00050A]/95 backdrop-blur-xl pt-32 pb-6 px-6 lg:hidden overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div className="flex items-center mb-8">
                <img 
                  src="/diginetnewlogo.png" 
                  alt="Diginet Cybersecurity" 
                  className="h-12 w-auto object-contain"
                />
              </div>
              
              <ul className="flex flex-col space-y-6 text-2xl font-black uppercase tracking-tighter">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 + 0.1 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-brand-cyan transition-colors flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all text-brand-cyan" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <button className="w-full flex items-center justify-center px-6 py-4 text-sm font-bold tracking-widest uppercase text-[#010812] bg-brand-cyan transition-colors">
                 Execute Consultation
                 <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Ensure you export ArrowRight for the mobile menu if you use it there
import { ArrowRight } from "lucide-react";
