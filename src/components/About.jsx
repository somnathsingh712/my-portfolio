import React from "react";
import { Award, BookOpen, Trophy } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 dark:from-gray-900 to-white dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left - Profile Card */}
          <div className="animate-slideUp">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl blur-3xl opacity-20"></div>

              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white shadow-2xl">
                <div className="text-7xl mb-4">👨‍💻</div>

                <h3 className="text-2xl font-bold">Somnath Singh Yadav</h3>

                <p className="text-blue-100 mt-2">
                  Full Stack Developer | MERN Stack | Problem Solver
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fadeIn space-y-6">

            <div>
              <h2 className="text-4xl font-bold mb-4">About Me</h2>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">
                Hello! I'm Somnath Singh Yadav, a B.Tech Information Technology
                student at Lovely Professional University and an aspiring Full
                Stack Developer. I enjoy building scalable and user-friendly
                web applications using modern technologies.
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                I primarily work with the MERN stack (MongoDB, Express.js,
                React.js, Node.js) and have developed projects such as a Social
                Media Platform, Blood Donor Finder, and a Ticket Booking System.
                I also focus on strengthening my Data Structures & Algorithms
                skills and exploring cloud technologies like AWS and Docker.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
                  <Trophy className="text-blue-600 dark:text-blue-400" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Hackathon Participation</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Participated in Hack AI Hackathon 2025
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
                  <Award className="text-blue-600 dark:text-blue-400" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">1st Position - Analytics Quiz</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Secured 1st place in Analytics Quiz Competition 2025
                  </p>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
                  <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />
                </div>

                <div>
                  <h4 className="font-bold text-lg">Continuous Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Completed certifications in Java, IoT, and Data Structures
                  </p>
                </div>
              </div>

            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}