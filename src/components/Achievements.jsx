import React from 'react';
import { Star, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: <Star size={40} />,
      title: 'Participated in Hack AI Hackathon 2025',
      description: 'Took part in hackathon and gave tough competition others.',
      year: '2024',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: <Award size={40} />,
      title: '1st Position in Analytics Quiz',
      description: 'Secured 1st position in analytics quiz competition.',
      year: '2024',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <Star size={40} />,
      title: 'Volunteer, Namami Gange Community Development Project',
      description: 'Worked on a project to clean river Ganga.',
      year: '2024',
      color: 'from-blue-400 to-blue-600',
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 dark:from-gray-900 to-white dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">My Achievements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`group bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:transform hover:scale-105 overflow-hidden`}
            >
              {/* Gradient Background */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full`}></div>

              <div className="relative z-10">
                <div className={`mb-4 text-white w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {achievement.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {achievement.description}
                </p>

                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold">
                  {achievement.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
