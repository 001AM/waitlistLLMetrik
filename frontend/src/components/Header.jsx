import React from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="relative z-50 px-6 py-3 border-b shadow-2xl backdrop-blur-md">
      <div className="relative flex items-center justify-start max-w-4xl">
        <div className="flex items-center space-x-3 ml-0">
          <img src={logo} alt="LLMetrik Logo" className="size-10 rounded-xl shadow-lg" />
          <div className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-white drop-shadow-sm">LLMetrik</h1>
            <p className="text-xs text-purple-400">Analytics Platform</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
