const projects = [
  {
    name: "CodeRank",
    stack: "ReactJS, Tailwind CSS, ExpressJS, Kafka, Docker",
    description: "An online platform to write and run code with test cases, similar to HackerRank.",
  },
  {
    name: "Chat App",
    stack: "React, Socket.io, Express, Gemini API",
    description: "A real-time chat application with private messaging and emoji support with built-in AI chatbot.",
  },
  {
    name: "SOLIT",
    stack: "Next.js, PostgreSQL, ExpressJS",
    description: "A full-featured and automated fee management system with admin/student panel.",
  },
  {
    name: "ShellNU",
    stack: "C++",
    description: "A linux-based cross-platform terminal emulator.",
  },
  {
    name: "LearnSmart",
    stack: "ReactJS, ExpressJS, PostgreSQL, Redis, Gemini API",
    description: "A smart AI based educational website to create a perfect study environment for you.",
  },
  {
    name: "Code Executor",
    stack: "React, Docker, Kafka",
    description: "An online platform to write and run code with test cases, similar to HackerRank.",
  },
];

const Projects = () => {
  return (
    <div className="w-[90%] mx-auto py-12">
      <div className="text-center mb-8">
        <p className="text-3xl font-bold">Here's what I have done recently</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 border-black rounded-xl bg-white p-6 shadow-[4px_4px_0_0_#000]"
          >
            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm font-semibold text-gray-700 mb-2">Tech Stack: {project.stack}</p>
            <p className="text-sm text-gray-800">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
