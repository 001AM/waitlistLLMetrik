import React from "react";
import { Zap, Database, ListChecks, MessageCircle, FolderOpen, BarChart, PlaySquare, MoreHorizontal } from "lucide-react";

// Importing images (best practice)
import tracingBg from "@/assets/tracing.png";
import promptManagementBg from "@/assets/promptmanagment.png";
import anthropicLogo from "@/assets/anthropic.png";
import chatgptLogo from "@/assets/chatgpt.png";
import geminiLogo from "@/assets/gemini.webp";
import mistralLogo from "@/assets/mistral-color.png";

const platformFeatures = [
  { 
    icon: <Zap size={28} />, 
    title: "LLM Tracing", 
    desc: "Visualize the entire lifecycle of your requests. Pinpoint errors, latency, and costs in seconds, not hours.", 
    bgImage: tracingBg,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2"
  },
  { 
    icon: <Database size={28} />, 
    title: "Prompt Management", 
    desc: "Treat your prompts like code. A/B test, collaborate, and roll back changes with a full version history.", 
    bgImage: promptManagementBg,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2"
  },
  { 
    icon: <ListChecks size={28} />, 
    title: "Evaluation", 
    desc: "Automatically score responses for quality, relevance, and safety. Catch regressions before they hit production.", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    icon: <MessageCircle size={28} />, 
    title: "Human Feedback", 
    desc: "Create golden datasets with human-in-the-loop annotation. Fine-tune models and build rock-solid evaluations.", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    icon: <FolderOpen size={28} />, 
    title: "Datasets", 
    desc: "A central hub for all your evaluation and fine-tuning datasets. Seamlessly integrated with your entire workflow.", 
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1"
  },
  { 
    icon: <BarChart size={28} />, 
    title: "Metrics & Analytics", 
    desc: "Go beyond basic logs. Get actionable insights on token usage, user engagement, and operational costs.", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
  { 
    icon: <PlaySquare size={28} />, 
    title: "Playground", 
    desc: "Prototype and iterate on prompts in a live environment connected to your entire toolchain.", 
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1"
  },
];

const llmModels = [
  { name: "Anthropic", img: anthropicLogo },
  { name: "OpenAI", img: chatgptLogo },
  { name: "Google", img: geminiLogo },
  { name: "Mistral", img: mistralLogo },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-gray-950/90">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">An End-to-End LLM Engineering Toolkit</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Everything you need to move from prototype to production with confidence and clarity.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden ${feature.colSpan} ${feature.rowSpan}`}
            >
              {feature.bgImage && (
                 <div
                   // --- THIS LINE HAS BEEN UPDATED ---
                   className="absolute inset-0 rounded-2xl z-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                   style={{ backgroundImage: `url(${feature.bgImage})` }}
                 />
              )}
               <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/80 to-black/60 z-0"/>

              <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -skew-x-12 group-hover:translate-x-full shine-effect" />

              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl mb-4 text-white shadow-md`}>
                  {feature.icon}
                </div>
                <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Works With Your Favorite Models</h3>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Seamlessly integrate with the industry's leading providers. More coming soon.
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-8 justify-center items-center max-w-3xl mx-auto">
            {llmModels.map((model) => (
              <div key={model.name} className="flex flex-col items-center group">
                <div className="w-24 h-24 flex items-center justify-center bg-gray-800/50 rounded-2xl border border-gray-700/50 shadow-md transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-gray-800 group-hover:scale-105">
                  <img src={model.img} alt={model.name} className="object-contain w-16 h-16" />
                </div>
                <span className="text-gray-300 font-medium text-sm mt-3 transition-colors duration-300 group-hover:text-white">{model.name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center">
                <div className="w-24 h-24 flex items-center justify-center bg-gray-800/50 rounded-2xl border border-dashed border-gray-700/80 shadow-md">
                   <MoreHorizontal className="w-10 h-10 text-gray-500" />
                </div>
                <span className="text-gray-500 font-medium text-sm mt-3">And more...</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .shine-effect {
          transition: transform 1s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default FeaturesSection;