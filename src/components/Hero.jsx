import React from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-gray-900 to-white dark:to-gray-800 flex items-center justify-center px-4">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="animate-fadeIn space-y-6">

          <div>
            <h1 className="mb-4 text-4xl md:text-6xl font-bold leading-tight">
              <span className="hero-role-stage" aria-live="polite">
                <span className="hero-role hero-role-primary bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Web Developer
                </span>
                <span className="hero-role hero-role-secondary bg-gradient-to-r from-cyan-600 to-sky-400 bg-clip-text text-transparent">
                  Cloud Architect
                </span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a Web Developer and Cloud Engineer who enjoys building scalable and responsive web applications using technologies like React, Node.js, and MongoDB. I am passionate about solving real-world problems with clean and efficient code, and I am always eager to learn new tools and technologies in web development and cloud computing.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">

            <button
              onClick={scrollToSkills}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Explore My Work
            </button>

            {/* Accessible Download CV */}
            <a
              href="/somresume.pdf"
              download
              aria-label="Download Somnath Singh Yadav Resume"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8">

            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</p>
              <p className="text-gray-600 dark:text-gray-400">Projects</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">MERN</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">Stack</p>
            </div>

            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">AWS</p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">Cloud</p>
            </div>

          </div>
        </div>


        {/* Right Image */}
        <div className="animate-slideUp hidden md:flex justify-center items-center">

          <div className="relative">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-3xl opacity-20"></div>

            <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
  <img
    src="/profile.jpeg"
    alt="Somnath Singh Yadav"
    className="w-full h-full object-cover rounded-full"
  />
</div>

          </div>

        </div>
      </div>


      {/* Scroll Indicator */}
      <button
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to Skills Section"
      >
        <ChevronDown size={32} className="text-blue-600 dark:text-blue-400" />
      </button>

    </section>
  );
}