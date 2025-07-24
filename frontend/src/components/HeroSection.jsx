import React, { useState, useEffect } from "react";
import { Sparkles, Rocket, ArrowRight, Video, Star, Users, Search } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const HeroSection = () => {
  // Smooth scroll handler for the Waitlist button
  const handleJoinWaitlistClick = (e) => {
    e.preventDefault();
    const waitlistSection = document.getElementById('waitlist');
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- UPDATED: Handler for the new "Explore Features" button ---
  const handleExploreFeaturesClick = (e) => {
    e.preventDefault();
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative max-h-dvh flex flex-col items-center justify-center py-16 px-4 text-center overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gray-950/90" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <FloatingParticles />
      <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Search className="h-4 w-4" />
            Open Source LLM Observability
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          <span className="text-white">From Black Box to Crystal Clear</span>
          <br />
          <span className="text-purple-400 animate-blink">The Observability Platform</span> for LLM Apps
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Visually <span className="text-purple-300 font-semibold">trace</span> interactions, <span className="text-purple-300 font-semibold">evaluate</span> responses, and gain the crucial analytics you need to debug issues, reduce costs, and ship with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="#waitlist"
            onClick={handleJoinWaitlistClick}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
          >
            <Rocket className="h-5 w-5" />
            Join the Waitlist
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          {/* --- UPDATED: This button now scrolls to the features section --- */}
          <a
            href="#features"
            onClick={handleExploreFeaturesClick}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3"
          >
            <Sparkles className="h-5 w-5" />
            Explore Features
          </a>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-base font-medium">
          {/* <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
              <Star className="h-5 w-5 animate-pulse" />
              <span className="font-bold">14K</span>
            </div>
            <span>GitHub stars</span>
          </div>
          <span className="hidden sm:block border-l border-gray-600 h-6 mx-2"></span> */}
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-blue-400" />
            <span>Built for developers, by developers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;