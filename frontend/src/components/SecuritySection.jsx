import React from "react";
import { ShieldCheck, CheckCircle, Lock, Server } from "lucide-react";

const securityFeatures = [
  { icon: <ShieldCheck className="h-6 w-6" />, name: "ISO 27001", color: "bg-blue-600/20 text-blue-300 border-blue-400/30" },
  { icon: <CheckCircle className="h-6 w-6" />, name: "SOC 2 Type II", color: "bg-green-600/20 text-green-300 border-green-400/30" },
  { icon: <Lock className="h-6 w-6" />, name: "GDPR", color: "bg-purple-600/20 text-purple-300 border-purple-400/30" },
  { icon: <Server className="h-6 w-6" />, name: "HIPAA", color: "bg-pink-600/20 text-pink-300 border-pink-400/30" },
];

const SecuritySection = () => {
  return (
    <section className="py-16 px-4 bg-gray-950/90 border-b border-white/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Enterprise-Grade Security</h2>
        <p className="text-gray-300 text-lg mb-12">Built with security and compliance at its core</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {securityFeatures.map((feature) => (
            <div key={feature.name} className={`flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-semibold border shadow-lg transform hover:scale-105 transition-all duration-300 ${feature.color}`}>
              {feature.icon}
              <span>{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SecuritySection;
