import React from "react";
import { GraduationCap, School } from "lucide-react";

export default function About() {
  const educationChain = [
    {
      level: "College",
      institution: "Lovely Professional University",
      detail: "B.Tech - Information Technology",
      duration: "2023 - 2027",
      score: "CGPA: 6.95",
      icon: GraduationCap,
    },
    {
      level: "Intermediate School",
      institution: "MJRP Public School",
      detail: "Class XII - Maths/CS",
      duration: "2021-2023",
      score: "Percentage: 79%",
      icon: School,
    },
    {
      level: "High School",
      institution: "MJRP Public School",
      detail: "Class X",
      duration: "2019-2021",
      score: "Percentage: 78%",
      icon: School,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 dark:from-gray-900 to-white dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
            I am a Web Developer and Cloud Engineer who enjoys building scalable and responsive web applications using technologies like React, Node.js, and MongoDB. I am passionate about solving real-world problems with clean and efficient code, and I am always eager to learn new tools and technologies in web development and cloud computing.
          </p>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="education-chain-line" aria-hidden="true"></div>

          <div className="space-y-8">
            {educationChain.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.level} className="education-chain-card">
                  <div className="education-chain-node" aria-hidden="true"></div>

                  <div
                    tabIndex={0}
                    className="rounded-2xl border border-blue-200/70 dark:border-blue-800/70 bg-white/90 dark:bg-gray-900/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl focus-visible:scale-[1.03] focus-visible:-translate-y-1 focus-visible:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="rounded-lg bg-blue-100 dark:bg-blue-900 p-2">
                        <Icon className="text-blue-600 dark:text-blue-400" size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.level}</h3>
                    </div>

                    <p className="font-semibold text-gray-800 dark:text-gray-100">{item.institution}</p>
                    <p className="text-gray-600 dark:text-gray-300">{item.detail}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.duration}</p>
                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1 font-medium">{item.score}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}