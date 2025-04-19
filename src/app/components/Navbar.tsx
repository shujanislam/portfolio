'use client';

const Navbar = () => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-brutalYellow gap-2 sm:gap-0">
      {/* Logo and Name */}
      <div className="flex items-center gap-4">
        <div
          id="box"
          className="border-2 border-black bg-indigo-300 px-3 py-2 text-black font-bold rounded-xl"
        >
          SI
        </div>
        <p className="text-2xl font-bold text-black">Shujan Islam</p>
      </div>

      {/* Links and Button wrapper */}
      <div className="flex flex-col sm:flex-row items-center sm:gap-6 gap-y-2 sm:mt-0 sm:mb-0 mt-2 mb-2">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="border-2 border-black px-3 py-1 sm:px-4 sm:py-1 bg-brutalBlue text-black shadow-[3px_3px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-transform cursor-pointer rounded-lg text-sm sm:text-base"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <div className="sm:ml-0 mt-2 sm:mt-0">
          <a href="#footer">
            <button className="border-2 border-black bg-indigo-300 text-black font-bold px-4 py-1 sm:px-6 sm:py-2 rounded-3xl hover:bg-lightBlue/80 transition-all text-sm sm:text-base">
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
