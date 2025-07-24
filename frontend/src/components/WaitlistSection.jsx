import React, { useState } from "react";
import Logo from "@/assets/Logo.png";
import { Mail, Twitter } from "lucide-react"; // Import icons

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Reset error state on new submission

    try {
      const response = await fetch("https://waitlistllmetrik.onrender.com/signup/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "An error occurred. Please try again.");
      }

      // If API call is successful
      setSubmitted(true);
      console.log("Email submitted successfully:", email);

    } catch (err) {
      console.error("Submission failed:", err);
      setError(err.message);
      setSubmitted(false); // Ensure form is not locked if submission fails
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <section id="waitlist" className="relative flex flex-col items-center justify-center min-h-screen py-16 px-4 bg-gray-950/90 overflow-hidden">
      {/* Animated floating dots background */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-purple-600/30 opacity-30 animate-float"
            style={{
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full max-w-2xl text-center space-y-6 z-10">
        <img src={Logo} alt="Project Logo" className="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg object-contain" />
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Unlock True LLM Observability</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl">
          Stop guessing. Join our exclusive waitlist to be the first to debug, monitor, and optimize your LLM apps with confidence.
        </p>

        <form className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md pt-4" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            disabled={submitted || loading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 w-full px-5 py-3 rounded-full bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 transition disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={submitted || loading}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105 disabled:hover:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Joining..." : submitted ? "You're on the list!" : "Get My Early Access"}
          </button>
        </form>
        {submitted && !error && (
          <div className="text-green-400 font-medium mt-2">Awesome! We'll email you at launch. 🚀</div>
        )}
        {error && (
            <div className="text-red-400 font-medium mt-2">{error}</div>
        )}
      
        <div className="pt-8 w-full">
          <span className="block text-base text-gray-400 font-semibold mb-4">Contact the creators</span>
          <div className="flex flex-wrap justify-center gap-4">
              <CreatorLink type="twitter" handle="@plasmovortex" href="https://x.com/plasmovortex" />
              <CreatorLink type="twitter" handle="@Soham0001AM" href="https://x.com/Soham0001AM" />
              <CreatorLink type="twitter" handle="@sane_dhruv" href="https://x.com/sane_dhruv" />
          </div>
        </div>
      </main>
      
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

// Helper component for cleaner creator links
const CreatorLink = ({ type, handle, href }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition-colors bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white">
        {type === 'email' ? <Mail size={16} /> : <Twitter size={16} />}
        {handle}
    </a>
)

export default WaitlistSection;