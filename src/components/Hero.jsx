import React from "react";
import { logo, icons8 } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center p-4">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto px-5 mb-10 mt-3.5">
        <img
          src={logo}
          alt="AtiSumm_Logo_Image"
          className="w-28 object-contain"
        />

        <button
          type="button"
          className="black_btn flex items-center gap-2 px-4 py-2 rounded-md shadow-md hover:bg-black hover:text-white transition-all duration-200"
          onClick={() => window.open("https://github.com/8mileverse")}
        >
          <img src={icons8} className="w-5 h-5 sm:hidden" alt="GitHub icon" />
          <span>Github Repo</span>
        </button>
      </nav>

      <h1 className="head_text text-center">
        Summarize Articles with <br className="hidden md:inline-block" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>

      <h2 className="desc text-center max-w-2xl">
        Simplify your reading with <strong>ArtiSumm</strong>, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries!
      </h2>
    </header>
  );
};

export default Hero;

