const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative w-full flex flex-col items-center justify-center text-center py-24 px-6"
    >
      {/* Greeting */}
      <p className="text-lg text-white/80">Hi, I&apos;m Shujan Islam</p>

      {/* Main Heading */}
      <h1 className="mt-4 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
        I BUILD SCALABLE WEB APPS.
      </h1>

      {/* Subtext */}
      <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
        I&apos;m a full stack web developer, building fast and scalable web apps
        that make user experience seamless and delightful.
      </p>

      {/* Call To Action */}
      <a
        href="https://linkedin.com/in/shujan-islam-954236318"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="mt-10 px-8 py-3 rounded-full font-medium text-white 
          bg-gradient-to-r from-indigo-400 to-blue-500 shadow-lg 
          hover:opacity-90 transition-all"
        >
          Start Growing
        </button>
      </a>
    </section>
  );
};

export default HeroSection;
