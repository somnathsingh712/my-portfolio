import React from 'react';
import { Code2, Smartphone, Zap, Users, Database, GitBranch, Palette, Cpu } from 'lucide-react';

export default function EnhancedSkills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: <Code2 size={32} />,
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript ES6+', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'responsive Design', level: 90 },
      ],
      color: 'from-blue-400 to-blue-600',
    },
    {
      category: 'Backend Development',
      icon: <Database size={32} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'REST APIs', level: 92 },
      ],
      color: 'from-green-400 to-green-600',
    },
    {
      category: 'Tools & DevOps',
      icon: <GitBranch size={32} />,
      skills: [
        { name: 'Git & GitHub', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'CI/CD Pipeline', level: 85 },
        { name: 'AWS', level: 82 },
        { name: 'Vite', level: 88 },
      ],
      color: 'from-purple-400 to-purple-600',
    },
    {
      category: 'Soft Skills',
      icon: <Users size={32} />,
      skills: [
        { name: 'Team Leadership', level: 90 },
        { name: 'Communication', level: 92 },
        { name: 'Problem Solving', level: 94 },
        { name: 'Project Management', level: 88 },
        { name: 'Mentoring', level: 85 },
      ],
      color: 'from-pink-400 to-pink-600',
    },
    {
      category: 'Design & UI/UX',
      icon: <Palette size={32} />,
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'UI Design', level: 88 },
        { name: 'UX Principles', level: 87 },
        { name: 'Vectorian Giotto', level: 80 },
        { name: 'Balsamic', level: 86 },
      ],
      color: 'from-orange-400 to-orange-600',
    },
    {
  category: 'Cloud Computing',
  icon: <Cpu size={32} />,
  skills: [
    { name: 'AWS', level: 85 },
    { name: 'EC2', level: 82 },
    { name: 'S3 Storage', level: 80 },
    { name: 'Lambda', level: 75 },
    { name: 'Cloud Deployment', level: 85 },
  ],
  color: 'from-cyan-400 to-cyan-600',
},
    
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Technical Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 p-6 hover:transform hover:scale-105"
            >
              {/* Category Header */}
              <div className={`flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700`}>
                <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills with Progress Bars */}
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        {/* Additional Skills Summary */}
<div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950 rounded-lg p-8 text-white mb-12">
  <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-center">
    
    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold">10+</p>
      <p className="text-blue-100 mt-2">Technologies</p>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold">8+</p>
      <p className="text-blue-100 mt-2">Skills</p>
    </div>

    <div className="flex flex-col items-center">
      <p className="text-4xl font-bold">6+</p>
      <p className="text-blue-100 mt-2">Certifications</p>
    </div>

  </div>
</div>

        {/* Languages */}
        <div className="card">
  <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
    Languages
  </h3>

  <div className="flex flex-wrap justify-center items-center gap-4">
    {[
      { lang: 'English', level: 'Fluent' },
      { lang: 'Hindi', level: 'Native' },
      { lang: 'JavaScript', level: 'Expert' },
    ].map((item, i) => (
      <div
        key={i}
        className="flex flex-col items-center justify-center w-40 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg text-center"
      >
        <p className="font-bold text-gray-900 dark:text-white">
          {item.lang}
        </p>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          {item.level}
        </p>
      </div>
    ))}
  </div>
</div>
      </div>
    </section>
  );
}
