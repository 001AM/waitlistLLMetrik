import React from "react";
import HeroSection from "@/components/HeroSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import WaitlistSection from "@/components/WaitlistSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 font-sans overflow-x-hidden">
      <Header />
      <HeroSection />
      {/* <ClientLogosSection /> */}
      <WaitlistSection />
      <FeaturesSection />
      {/* <CTASection /> */}
    </div>
  );
};

export default Home;