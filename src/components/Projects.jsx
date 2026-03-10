import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Blood Donor Finder",
      description:
        "A website where people can get blood of their matching group easily on their location.",
      image: "❤️",
      tags: ["MongoDB", "React", "NodeJS", "Express"],
      github: "https://github.com/somnathsingh712/blooddonor-finder",
    },
    {
      title: "Social Media Web Application",
      description:
        "Full-stack social media platform enabling users to create posts, like, comment, and follow other users.",
      image: "🌐",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
      github: "https://github.com/somnathsingh712/Social-Media-App",
    },
    {
      title: "Ticket Booking Website",
      description:
        "Developed a responsive ticket booking platform with event browsing and seat reservation.",
      image: "🎟️",
      tags: ["React", "Javascript", "HTML5", "CSS", "Vite"],
      github: "https://github.com/somnathsingh712/ticket-booking",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group card flex flex-col h-full overflow-hidden hover:shadow-2xl cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-transform duration-300">
                {project.image}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}