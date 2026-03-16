import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ManagedServices } from "@/components/sections/ManagedServices";
import { PricingCTA } from "@/components/sections/PricingCTA";
import { ThreatTicker } from "@/components/sections/ThreatTicker";
import { MidCTA } from "@/components/sections/MidCTA";
import { ITSolutions } from "@/components/sections/ITSolutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ThreatTicker />
        <Intro />
        <Services />
        <MidCTA />
        <ITSolutions />
        <WhyChooseUs />
        <ManagedServices />
        <PricingCTA />
      </main>
      <Footer />
    </>
  );
}
