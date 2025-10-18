const projects = [
  {
    name: "TBNet",
    link: "https://github.com/shujanislam/TBNet",
    stack: "NextJS, Tailwind CSS, ExpressJS, FastAPI, Python",
    description: "An online platform to write and run code with test cases, similar to HackerRank.",
  },
  {
    name: "Chat App",
    link: "https://github.com/shujanislam/chat-application-backend",
    stack: "React, Socket.io, Express, Gemini API",
    description: "A real-time chat application with private messaging and emoji support with built-in AI chatbot.",
  },
  {
    name: "SOLIT",
    link: "#",
    stack: "Next.js, PostgreSQL, ExpressJS",
    description: "A full-featured and automated fee management system with admin/student panel.",
  },
  {
    name: "ShellNU",
    link: "https://github.com/shujanislam/ShellNU",
    stack: "C++",
    description: "A linux-based cross-platform terminal emulator.",
  },
  {
    name: "LearnSmart",
    link: "https://github.com/shujanislam/hackvita-2025",
    stack: "ReactJS, ExpressJS, PostgreSQL, Redis, Gemini API",
    description: "A smart AI based educational website to create a perfect study environment for you.",
  },
  {
    name: "Code Rank",
    link: "https://github.com/shujanislam/CodeRank",
    stack: "React, Docker, Kafka",
    description: "An online platform to write and run code with test cases, similar to HackerRank.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Here&apos;s what I&apos;ve built recently
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative rounded-2xl p-6 
              bg-white/10 border border-white/20 backdrop-blur-md
              transition-all hover:scale-105 hover:shadow-xl"
          >
            <h3
              className="text-xl font-semibold mb-2 
              bg-gradient-to-r from-indigo-300 to-blue-400 bg-clip-text text-transparent"
            >
              {project.name}
            </h3>
            <p className="text-sm text-white/70 mb-3 font-medium">
              Tech Stack: {project.stack}
            </p>
            <p className="text-sm text-white/80 leading-relaxed">
              {project.description}
            </p>

            {/* Subtle hover glow */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
