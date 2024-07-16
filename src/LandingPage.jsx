// src/LandingPage.js

import React from "react";
import "./LandingPage.css"; // Create this file for custom styles

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        The modern coding <span className="text-teal-400">superpower</span>
      </h1>
      <p className="text-lg md:text-2xl mb-8">
        A free extension to code with AI.
      </p>
      <div className="flex space-x-4 mb-8">
        <button className="bg-teal-400 text-black py-2 px-4 rounded hover:bg-teal-500">
          Get Extension
        </button>
        <button className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
          Try in browser
        </button>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png"
            alt="VS Code"
            className="h-8 mr-2"
          />
          <span>⭐ 1.26M</span>
        </div>
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/github.png"
            alt="GitHub"
            className="h-8 mr-2"
          />
          <span>⭐ 542.7K</span>
        </div>
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/color/48/000000/chrome.png"
            alt="Chrome"
            className="h-8 mr-2"
          />
          <span>⭐ 40.0K</span>
        </div>
        <div className="flex items-center">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/person-male.png"
            alt="Users"
            className="h-8 mr-2"
          />
          <span>⭐ 3.8K</span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
