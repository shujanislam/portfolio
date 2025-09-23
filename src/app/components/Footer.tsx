import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="w-full max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 
      rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg mt-16"
    >
      {/* SI Box + Name */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center font-bold rounded-lg
          bg-indigo-300 border-2 border-black shadow-[3px_3px_0_0_#000] text-black">
          SI
        </div>
        <p className="text-xl font-bold text-white drop-shadow-sm">Shujan Islam</p>
      </div>

      {/* Quick Links */}
      <div>
        <p className="font-bold text-white mb-2">Quick Links</p>
        <ul className="space-y-1 text-white/80">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
        </ul>
      </div>

      {/* More Links */}
      <div>
        <p className="font-bold text-white mb-2">More</p>
        <ul className="space-y-1 text-white/80">
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
          <li>
            <a
              href="https://drive.google.com/file/d/1tMy7VASt5ZMwGQTidx0MHvcv8lDgaFed/view?usp=sharing"
              target="_blank"
              className="hover:text-white transition-colors"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div>
        <p className="font-bold text-white mb-2">Connect with me</p>
        <div className="flex gap-4 mt-2">
          {[
            { icon: FaGithub, link: "https://github.com/shujanislam/", color: "text-black" },
            { icon: FaLinkedin, link: "https://www.linkedin.com/in/shujan-islam-954236318/", color: "text-blue-600" },
            { icon: FaTwitter, link: "#", color: "text-sky-500" },
            { icon: FaInstagram, link: "https://instagram.com/shujan_islam/", color: "text-pink-500" },
          ].map(({ icon: Icon, link, color }, idx) => (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer" className="group">
              <Icon
                className={`${color} bg-white/20 border border-white/30 rounded-lg p-2 text-3xl
                shadow-md transition-all group-hover:scale-110 group-hover:shadow-xl`}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
