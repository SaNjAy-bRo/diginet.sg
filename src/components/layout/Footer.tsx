import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#010812] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="flex items-center mb-6 justify-center lg:justify-start">
              <img 
                src="/diginetnewlogo.png" 
                alt="Diginet Cybersecurity" 
                className="h-14 lg:h-16 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm mx-auto lg:mx-0">
              Do you have a project in mind or need advanced cybersecurity representation? Get in touch with us!
            </p>
            <p className="text-brand-orange font-bold text-lg mb-6 hover:text-orange-400 transition-colors cursor-pointer text-center lg:text-left">
              hello@diginet.sg
            </p>
            
            {/* Social Links placeholder based on mockup */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan transition-colors group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan transition-colors group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan transition-colors group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-black" />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Managed SOC</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Penetration Testing</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Virtual CISO</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Cloud Security</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Compliance Audits</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Our Approach</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Leaderships</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-semibold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-brand-cyan transition-colors">Report Vulnerability</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>Copyright © 2026 Diginet SG. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Security Certified</a>
            <a href="#" className="hover:text-white transition-colors">GDPR Compliant</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
