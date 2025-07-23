import React, { useState, useEffect } from "react";
import { Sparkles, Rocket, ArrowRight, BookOpen, Star, Users } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-24 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gray-950/90" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>
      <FloatingParticles />
      <div className={`relative z-10 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            <Sparkles className="h-4 w-4" />
            Open Source LLM Platform
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight tracking-tight">
          <span className="text-white">Engineering Platform</span>
          <br />
          <span className="text-white">for <span className="text-purple-400 animate-blink">LLM Applications</span></span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Complete observability suite with <span className="text-purple-300 font-semibold">traces, evaluations, prompt management, and analytics</span> to debug and improve your LLM applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <button className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
            <Rocket className="h-5 w-5" />
            Get Started Free
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
            <BookOpen className="h-5 w-5" />
            View Documentation
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400 text-base font-medium">
          <div className="flex items-center gap-3">
            {/* <div className="flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
              <Star className="h-5 w-5 animate-pulse" />
              <span className="font-bold">14K</span>
            </div>
            <span>GitHub stars</span> */}
          </div>
          {/* <span className="hidden sm:block border-l border-gray-600 h-6 mx-2"></span> */}
          <div className="flex items-center gap-3">
            <Users className="h-6 w-6 text-blue-400" />
            <span>Not Backed by <span className="font-semibold text-white">Y Combinator</span></span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
