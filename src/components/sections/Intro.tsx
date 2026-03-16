import { Shield, Fingerprint, Lock } from "lucide-react";

export function Intro() {
  return (
    <section className="py-16 lg:py-32 bg-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-sm font-semibold text-brand-cyan tracking-widest uppercase mb-3">About Us</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            What is required from Security?
          </h3>
          <p className="text-gray-400 text-lg">
            Protecting the pervasive digital presence, driving business innovation, safeguarding endpoints and data, delivering compliance and providing continuity against the digitally assessed threat landscape correctly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-70 transition duration-1000"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/5 glass shadow-2xl aspect-[4/3] w-full bg-brand-dark/50 flex items-center justify-center z-10">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" 
                alt="Cybersecurity Fingerprint Scan"
                className="absolute inset-0 w-full h-full object-cover transform scale-105 group-hover:scale-100 transition duration-700 mix-blend-luminosity hover:mix-blend-normal opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00050A]/80 via-transparent to-[#00050A]/30 mix-blend-multiply"></div>
            </div>

            {/* Floating Element - Moved Outside overflow-hidden */}
            <div className="absolute -bottom-6 -right-6 bg-[#050A14] p-6 rounded-2xl border border-white/10 shadow-[-10px_-10px_30px_rgba(0,0,0,0.5)] z-20 hidden md:block animate-bounce" style={{ animationDuration: '3s' }}>
              <Shield className="w-12 h-12 text-brand-orange mb-2" />
              <p className="text-2xl font-bold text-white">99.9%</p>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Threat Reduction</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-white mb-4">Empower your security posture</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                Cyberattacks are shifting and expanding fast. You need a trusted partner who can safeguard your environment, minimize disruption, and enable confident growth. Let our next-generation threat response platform secure you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                <div className="p-3 bg-brand-cyan/10 rounded-lg text-brand-cyan shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-1">Data Protection</h5>
                  <p className="text-sm text-gray-400">Advanced encryption and compliance protocols.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition border border-transparent hover:border-white/10">
                <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange shrink-0">
                  <Fingerprint className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-white mb-1">Identity Access</h5>
                  <p className="text-sm text-gray-400">Zero-Trust architecture and IAM systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
