const Experience = () => {
  const experiences = [
    {
      company: "Atomity",
      position: "Frontend Engineer Intern",
      duration: "June 2026 - Present",
      color: "bg-white",
    },
    {
      company: "VrixaaLabs Pvt Ltd",
      position: "Full-Stack Web Developer Intern",
      duration: "May 2025 - Present",
      color: "bg-gray-400",
    },
    {
      company: "Google Developers Group",
      position: "Development Lead",
      duration: "March 2024 - Present",
      color: "bg-gray-400",
    },
  ];

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-xl sm:text-xl font-bold text-left mb-12 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="relative flex flex-col gap-10 pl-8 before:absolute before:left-2 before:top-2 before:h-full before:w-px before:bg-white/25">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex w-full flex-col items-start"
          >
            <span className={`absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-gradient-to-r ${exp.color} ring-4 ring-slate-950`} />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-4">
              <h3 className="text-md font-semibold text-white drop-shadow-sm">{exp.position}</h3>
              <p className="text-sm font-medium text-white/60 sm:pt-1">{exp.duration}</p>
            </div>
            <p className="mt-1 text-white/80 font-medium">{exp.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
