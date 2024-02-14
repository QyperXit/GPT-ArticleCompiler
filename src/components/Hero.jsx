import React from "react";
import { logo, logoRe } from "../assets";

const Hero = () => {
  return (
    <header className="w-full justify-center items-center flex-col ">
      <nav className="flex justify-between items-center flex-full mb-10 pt-3 ">
        <img
          src={logoRe}
          alt="articleCompiler_logo"
          className="w-28 object-contain scale-150"
        />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/QyperXit/GPT-ArticleCompiler")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Digest Articles Using <br className="max-md:hidden" />
        <span className="orange_gradient"> OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Power through information overload: Article-compliler's open-source
        summaries give you the key takeaways, fast.
      </h2>
    </header>
  );
};

export default Hero;
