import React from "react";
import { Zap, Database, ListChecks, MessageCircle, FolderOpen, BarChart, PlaySquare } from "lucide-react";

// const platformFeatures = [
//   { icon: <Zap className="h-8 w-8" />, title: "LLM Tracing", desc: "Monitor and understand execution flow with detailed insights into every LLM call.", color: "from-yellow-400 to-orange-500" },
//   { icon: <Database className="h-8 w-8" />, title: "Prompt Management", desc: "Version, manage, and deploy prompts with confidence across your applications.", color: "from-purple-400 to-pink-500" },
//   { icon: <ListChecks className="h-8 w-8" />, title: "Evaluation", desc: "Assess performance and quality of LLM outputs with comprehensive metrics.", color: "from-green-400 to-emerald-500" },
//   { icon: <MessageCircle className="h-8 w-8" />, title: "Manual Annotation", desc: "Enable human review and labeling for continuous improvement.", color: "from-pink-400 to-rose-500" },
//   { icon: <FolderOpen className="h-8 w-8" />, title: "Datasets", desc: "Organize, manage, and utilize your training and evaluation datasets.", color: "from-blue-400 to-cyan-500" },
//   { icon: <BarChart className="h-8 w-8" />, title: "Metrics & Analytics", desc: "Track performance KPIs and gain insights into your LLM applications.", color: "from-orange-400 to-red-500" },
//   { icon: <PlaySquare className="h-8 w-8" />, title: "Playground", desc: "Interactive environment for experimentation and rapid prototyping.", color: "from-cyan-400 to-blue-500" },
// ];

const llmModels = [
  { name: "Anthropic", img: "/src/assets/anthropic.webp" },
  { name: "ChatGPT", img: "/src/assets/chatgpt.png" },
  { name: "Gemini", img: "/src/assets/gemini.webp" },
  { name: "Langfuse", img: "/src/assets/langfuse.jpeg" },
  { name: "Mistral", img: "/src/assets/mistral-color.png" },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 px-4 bg-gray-950/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything you need for LLM Engineering</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive tools to build, monitor, and optimize your LLM applications from development to production.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-64">
          {/* Bento/uneven layout: manually assign grid positions */}
          {/* LLM Tracing Card with tracing.png background */}
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-2 md:col-span-2 row-span-2">
            {/* Faded tracing.png background */}
            <div
              className="absolute inset-0 rounded-2xl z-0"
              style={{
                backgroundImage: "url('/src/assets/tracing.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.13,
                filter: 'blur(1px)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><Zap className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">LLM Tracing</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Monitor and understand execution flow with detailed insights into every LLM call.</p>
            </div>
          </div>
          {/* Prompt Management Card with promptmanagment.png background */}
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-1 md:col-span-1 row-span-2">
            {/* Faded promptmanagment.png background */}
            <div
              className="absolute inset-0 rounded-2xl z-0"
              style={{
                backgroundImage: "url('/src/assets/promptmanagment.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.13,
                filter: 'blur(1px)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><Database className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">Prompt Management</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Version, manage, and deploy prompts with confidence across your applications.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-1 md:col-span-1 row-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><ListChecks className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">Evaluation</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Assess performance and quality of LLM outputs with comprehensive metrics.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-1 md:col-span-1 row-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-rose-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><MessageCircle className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">Manual Annotation</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Enable human review and labeling for continuous improvement.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-2 md:col-span-2 row-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-cyan-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><FolderOpen className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">Datasets</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Organize, manage, and utilize your training and evaluation datasets.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-1 md:col-span-1 row-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><BarChart className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">Metrics & Analytics</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Track performance KPIs and gain insights into your LLM applications.</p>
            </div>
          </div>
          <div className="group relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ease-out overflow-hidden col-span-1 md:col-span-1 row-span-1">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-4 shadow-md">
                <div className="text-white"><PlaySquare className="h-6 w-6" /></div>
              </div>
              <h3 className="text-purple-400 font-bold text-2xl mb-4">Playground</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Interactive environment for experimentation and rapid prototyping.</p>
            </div>
          </div>
          {/* ...no placeholder, grid is now tight... */}
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Supported LLM Models</h3>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            We seamlessly integrate with the industry's leading LLM providers, ensuring reliability, performance, and flexibility for your AI applications. Explore our supported models below:
          </p>
          <div className="flex flex-row gap-10 justify-center items-center max-w-5xl mx-auto">
            {llmModels.map((model) => (
              <div key={model.name} className="flex flex-col items-center w-28">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30 shadow-md">
                  <img src={model.img} alt={model.name} className="object-contain w-16 h-16" />
                </div>
                <span className="text-purple-200 font-medium text-sm mt-2 whitespace-nowrap">{model.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturesSection;
