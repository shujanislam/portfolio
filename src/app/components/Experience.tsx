const Experience = () => {
  const experiences = [
    {
      company: "VrixaaLabs Pvt Ltd",
      position: "Web Developer Intern",
      duration: "May 2025 - Present",
      color: "from-red-400 to-pink-500",
    },
    {
      company: "Google Developers Group",
      position: "Full-Stack Web Developer",
      duration: "March 2024 - Present",
      color: "from-yellow-400 to-orange-400",
    },
  ];

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto py-20 px-6">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        Experience
      </h2>

      {/* Experience Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md
              transition-all hover:scale-105 hover:shadow-xl"
          >
            {/* Company */}
            <h3 className="text-xl font-semibold text-white drop-shadow-sm">{exp.company}</h3>

            {/* Position */}
            <p className="mt-2 text-white/80 font-medium">{exp.position}</p>

            {/* Duration with gradient pill */}
            <div
              className={`mt-4 inline-block px-4 py-1 rounded-full text-sm font-medium text-white
                bg-gradient-to-r ${exp.color} shadow-md`}
            >
              {exp.duration}
            </div>

            {/* Subtle hover glow */}
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 hover:opacity-100 transition-opacity"></span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
