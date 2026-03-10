import React from 'react';
import { Code2, Smartphone, Zap, Users } from 'lucide-react';

export default function Skills() {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: 'Web Development',
      description: 'Expert in HTML, CSS, JavaScript, React, and modern web frameworks.',
      badge: 'Pro',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Responsive Design',
      description: 'Creating beautiful, mobile-first designs that work on all devices.',
      badge: 'Advanced',
    },
    {
      icon: <Zap size={40} />,
      title: 'Performance',
      description: 'Optimizing applications for speed, efficiency, and user experience.',
      badge: 'Expert',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaboration',
      description: 'Strong communicator with experience in Git, GitHub, and team workflows.',
      badge: 'Pro',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">My Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="card group cursor-pointer"
            >
              <div className="mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {skill.description}
              </p>
              <span className="badge">{skill.badge}</span>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies I Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {['React', 'JavaScript', 'HTML/CSS', 'Tailwind', 'Git', 'Node.js', 'MongoDB', 'REST APIs'].map((tech) => (
              <div
                key={tech}
                className="bg-blue-50 dark:bg-gray-700 rounded-lg p-4 text-center font-semibold text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
