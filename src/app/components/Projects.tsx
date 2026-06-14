const projects = [
  {
    name: "Alpine",
    link: "http://alpine-lemon-omega.vercel.app/",
    stack: "React, TypeScript, Express, MongoDB",
    description: "A full fledged tourism website.",
  },
  {
    name: "dev-ai-sdk",
    link: "https://dev-ai-sdk.vercel.app/",
    stack: "TypeScript",
    description: "A TypeScript SDK that streamlines integrating AI-powered workflows into existing applications, providing composable abstractions, tools, and utilities.",
  },
  {
    name: "NextFasterAnalytics",
    link: "https://github.com/shujanislam/NextFasterAnalytics",
    stack: "NextJS, Tailwind CSS, PostgreSQL",
    description: "A blazingly fast analytics page for NextFaster web application",
  },
  {
    name: "TBNet",
    link: "https://github.com/shujanislam/TBNet",
    stack: "NextJS, Tailwind CSS, ExpressJS, FastAPI, Python",
    description: "An online platform to write and run code with test cases, similar to HackerRank.",
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
      <h2 className="text-xl sm:text-xl font-bold text-left mb-12 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
       Projects 
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
               border border-white/20 
              transition-all hover:scale-105 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-5 top-5 h-4 w-4 text-white/60 transition-colors group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-8.25 8.25M6 8.25v9.75h9.75" />
            </svg>
            <h3
              className="pr-8 text-xl font-semibold mb-2 
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
