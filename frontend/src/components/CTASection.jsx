import React from "react";
import { Activity, ArrowRight, Github } from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gray-950/90 text-white text-center relative overflow-hidden">
      <FloatingParticles />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
          Ready to build better <br />
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">LLM applications?</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Join thousands of developers and teams building robust, debuggable, and high-performing LLM applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="group bg-white text-purple-900 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
            <Activity className="h-6 w-6" />
            Start Building Today
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-10 py-5 rounded-full font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center gap-3">
            <Github className="h-6 w-6" />
            View on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};
export default CTASection;
