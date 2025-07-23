import React from "react";
import { Award, TrendingUp } from "lucide-react";

const clientLogos = [
  { name: "Samsara", src: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Samsara_logo.svg" },
  { name: "Twilio", src: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Twilio-logo-red.svg" },
  { name: "SumUp", src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/SumUp_Logo.svg" },
  { name: "Khan Academy", src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Khan_Academy_logo_%282018%29.svg" },
  { name: "Pigment", src: "https://seeklogo.com/images/P/pigment-logo-2B2B2B2B2B-seeklogo.com.png" },
  { name: "Springer Nature", src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Springer_Nature_logo.svg" },
  { name: "Telus", src: "https://upload.wikimedia.org/wikipedia/commons/2/2e/TELUS_Logo.svg" },
  { name: "Circleback", src: "https://circleback.com/wp-content/uploads/2022/07/circleback-logo.svg" },
];

const ClientLogosSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-950/90 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg text-gray-400 mb-12 font-medium text-center">Trusted by leading teams worldwide</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 mb-12">
          {clientLogos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center transform hover:scale-110 transition-all duration-300">
              <img src={logo.src} alt={logo.name} className="h-8 object-contain grayscale opacity-60 hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm shadow-lg">
            <Award className="h-5 w-5" />
            #1 Golden Kitty - AI Infrastructure
          </div>
          <div className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg">
            <TrendingUp className="h-5 w-5" />
            Product Hunt - Product of the Day
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientLogosSection;
