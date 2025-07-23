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

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center w-full max-w-xl text-center space-y-8">
        <img src={Logo} alt="Project Logo" className="mx-auto mb-8 w-32 h-32 rounded-2xl shadow-lg object-contain" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Get early access</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-6">
          Be among the first to experience Wait and launch a viral waitlist. Sign up to be notified when we launch!
        </p>
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
        {/* Creators links below form */}
        <div className="my-8">
          <span className="block text-base text-pink-300 font-semibold mb-4">Contact the creators:</span>
          <div className="flex flex-row justify-center gap-4 mb-3">
            <a href="mailto:0710tushar.2003@gmail.com" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition glassy-btn border border-blue-300 text-blue-200 hover:border-blue-400 hover:text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065L2 6.5V18a1 1 0 001 1h18a1 1 0 001-1V6.5l-10 6.565zm10-8.565A1 1 0 0021 4H3a1 1 0 00-1 1v.217l10 6.565 10-6.565V4.5z"/></svg>
              0710tushar.2003@gmail.com
            </a>
            <a href="mailto:sohampanchal1469@gmail.com" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition glassy-btn border border-pink-300 text-pink-200 hover:border-pink-400 hover:text-pink-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065L2 6.5V18a1 1 0 001 1h18a1 1 0 001-1V6.5l-10 6.565zm10-8.565A1 1 0 0021 4H3a1 1 0 00-1 1v.217l10 6.565 10-6.565V4.5z"/></svg>
              sohampanchal1469@gmail.com
            </a>
            <a href="mailto:sanedhruv1604@gmail.com" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition glassy-btn border border-green-300 text-green-200 hover:border-green-400 hover:text-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065L2 6.5V18a1 1 0 001 1h18a1 1 0 001-1V6.5l-10 6.565zm10-8.565A1 1 0 0021 4H3a1 1 0 00-1 1v.217l10 6.565 10-6.565V4.5z"/></svg>
              sanedhruv1604@gmail.com
            </a>
          </div>
          <div className="flex flex-row justify-center gap-4">
            <a href="https://x.com/plasmovortex" target="_blank" rel="noopener noreferrer" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition glassy-btn border border-blue-300 text-blue-200 hover:border-blue-400 hover:text-blue-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.06A12.13 12.13 0 007.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 5.5a8.2 8.2 0 01-2.36.65z"/></svg>
              @plasmovortex
            </a>
            <a href="https://x.com/Soham0001AM" target="_blank" rel="noopener noreferrer" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition glassy-btn border border-pink-300 text-pink-200 hover:border-pink-400 hover:text-pink-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.06A12.13 12.13 0 007.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 5.5a8.2 8.2 0 01-2.36.65z"/></svg>
              @Soham0001AM
            </a>
            <a href="https://x.com/sane_dhruv" target="_blank" rel="noopener noreferrer" className="px-4 py-2 flex items-center gap-2 rounded-full font-medium transition glassy-btn border border-green-300 text-green-200 hover:border-green-400 hover:text-green-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 001.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0016.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.2 1.64 4.16c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.68 2.11 2.9 3.97 2.93A8.6 8.6 0 012 19.54c-.29 0-.57-.02-.85-.06A12.13 12.13 0 007.29 21c7.55 0 11.69-6.26 11.69-11.69 0-.18-.01-.36-.02-.54A8.18 8.18 0 0024 5.5a8.2 8.2 0 01-2.36.65z"/></svg>
              @sane_dhruv
            </a>
          </div>
      {/* Glassy button styles */}
      <style>{`
        .glassy-btn {
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          box-shadow: 0 2px 12px 0 rgba(0,0,0,0.10);
          border: 1px solid rgba(255,255,255,0.10);
        }
      `}</style>
        </div>
      </main>

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
