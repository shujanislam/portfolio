const HeroSection = () => {
  return (
    <div className="w-[90%] mx-auto text-center py-12" id="about">
      <p className="text-lg text-black">Hi, I'm Shujan Islam</p>
      <p className="text-4xl font-bold text-black mt-4">I BUILD SCALABLE WEB APPS.</p>
      <p className="text-lg text-black mt-4">
        I'm a full stack web developer, building fast and scalable web apps making user experience much better.
      </p>
      <a href="https://linkedin.com/in/shujan-islam-954236318" target="_blank">
        <button className="mt-6 px-8 py-3 bg-yellow-500 text-black font-bold border-2 border-black rounded-full hover:bg-yellow-400 transition-all">
          Start Growing
        </button>
      </a>
    </div>
  );
}

export default HeroSection;
