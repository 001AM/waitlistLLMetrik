import React, { useState, useEffect } from "react";
import Logo from "@/assets/Logo.png";

const initialCountdown = {
  days: 162,
  hours: 6,
  minutes: 48,
  seconds: 47,
};

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/65.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

function pad(num) {
  return num.toString().padStart(2, "0");
}

const WaitlistSection = () => {
  const [countdown, setCountdown] = useState(initialCountdown);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-8 px-4 bg-gray-950/90">
      {/* Animated floating dots background */}
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-purple-600/30 opacity-30 animate-float"
              style={{
                width: `${8 + Math.random() * 16}px`,
                height: `${8 + Math.random() * 16}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* ...header removed... */}

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full max-w-xl text-center space-y-8">
        <img src={Logo} alt="Project Logo" className="mx-auto mb-8 w-32 h-32 rounded-2xl shadow-lg object-contain" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Get early access</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">Be among the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch!</p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-3 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-l-full md:rounded-full bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-r-full md:rounded-full transition-all duration-200 shadow"
          >
            Join waitlist
          </button>
        </form>
        {submitted && (
          <div className="text-green-400 mt-2">Thank you! You'll be notified at launch.</div>
        )}
        <div className="flex items-center justify-center gap-3 mt-6">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="avatar"
              className="w-10 h-10 rounded-full border-2 border-purple-600 shadow"
            />
          ))}
          <span className="text-gray-200 font-medium ml-2">Join 10,000+ others on the waitlist</span>
        </div>
      </main>

      {/* Countdown Timer */}
      <div className="flex flex-col items-center mt-12 mb-8">
        <div className="grid grid-cols-4 gap-6 mb-2">
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-purple-400">{pad(countdown.days)}</span>
            <span className="text-gray-400 mt-1">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-purple-400">{pad(countdown.hours)}</span>
            <span className="text-gray-400 mt-1">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-purple-400">{pad(countdown.minutes)}</span>
            <span className="text-gray-400 mt-1">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-5xl font-bold text-purple-400">{pad(countdown.seconds)}</span>
            <span className="text-gray-400 mt-1">Seconds</span>
          </div>
        </div>
        <span className="text-gray-300 text-sm">⏱ Left until full release</span>
      </div>

      {/* Demo Video Section */}
      <div className="flex flex-col items-center w-full max-w-lg mb-12">
        <div className="relative w-full h-64 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-950 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden">
          {/* Animated effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-purple-900/30 to-gray-900/80 animate-video-float"></div>
          {/* Play button */}
          <button className="absolute z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full shadow-lg hover:scale-105 transition-transform duration-200">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <polygon points="12,8 26,16 12,24" fill="#fff" />
            </svg>
          </button>
        </div>
        <span className="text-gray-200 mt-4">See how Wait works (3m)</span>
      </div>

      {/* Responsive styles & animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes video-float {
          0% { filter: blur(0px); }
          50% { filter: blur(2px) brightness(1.1); }
          100% { filter: blur(0px); }
        }
        .animate-video-float {
          animation: video-float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WaitlistSection;
