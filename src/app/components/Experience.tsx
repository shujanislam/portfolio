const Experience = () => {
  const experiences = [
    {
      company: "VrixaaLabs Pvt Ltd",
      position: "Web Developer Intern",
      duration: "May 2025 - Present",
      color: "bg-red-300",
    },
    {
      company: "Google Developers Group",
      position: "Full-Stack Web Developer",
      duration: "March 2024 - Present",
      color: "bg-yellow-300",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-12" id="experience">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border-2 border-black p-6 bg-white rounded-xl shadow-[4px_4px_0_0_#000]"
          >
            <h3 className="text-xl font-bold text-black">{exp.company}</h3>
            <p className="font-semibold text-black mt-2">{exp.position}</p>
            <div className={`inline-block mt-4 border-2 border-black px-3 py-1 rounded-full text-sm text-black font-medium ${exp.color}`}>
              {exp.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
