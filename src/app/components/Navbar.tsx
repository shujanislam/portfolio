'use client';

const Navbar = () => {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-brutalYellow gap-4 sm:gap-0">
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

      {/* Navigation Links */}
      <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="border-2 border-black px-4 py-1 bg-brutalBlue text-black shadow-[3px_3px_0_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-transform cursor-pointer rounded-lg"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Contact Button */}
      <div>
        <button className="border-2 border-black bg-indigo-300 text-black font-bold px-6 py-2 rounded-3xl hover:bg-lightBlue/80 transition-all">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
