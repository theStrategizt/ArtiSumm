import React from "react";
import { logo, icons8 } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col p-3">
      <nav className="flex justify-between items-center w-full  mb-10 mt-3.5">
        <img
          src={logo}
          alt="AtiSumm_Logo_Image"
          className="w-28 object-contain"
        />

        <button
          type="button"
          className="black_btn flex gap-2"
          onClick={() => window.open("https://github.com/8mileverse")}
        >
          <img src={icons8} className="w-5" /> Github Repo
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify Your Reading with ArtiSumm, an open-source article summarizer
        that transform lenghty articles into clear and concise summaries! 
      </h2>
    </header>
  );
};

export default Hero;
