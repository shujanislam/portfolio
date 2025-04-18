import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-[90%] mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t-4  mt-16">
      {/* SI box + Name */}
      <div className="flex items-center gap-4">
        <div className="bg-indigo-300 border-2 border-black w-12 h-12 flex items-center justify-center font-bold rounded-lg shadow-[3px_3px_0_0_#000]">
          SI
        </div>
        <p className="text-xl font-bold">Shujan Islam</p>
      </div>

      {/* Links section 1 */}
      <div>
        <p className="font-bold mb-2">Quick Links</p>
        <ul className="space-y-1">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
        </ul>
      </div>

      {/* Links section 2 */}
      <div>
        <p className="font-bold mb-2">More</p>
        <ul className="space-y-1">
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
        </ul>
      </div>

      {/* Social media */}
      <div>
        <p className="font-bold mb-2">Connect with me</p>
        <div className="flex gap-4 mt-2">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-black bg-white border-2 border-black rounded-lg p-1 text-4xl shadow-[3px_3px_0_0_#000]" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-600 bg-white border-2 border-black rounded-lg p-1 text-4xl shadow-[3px_3px_0_0_#000]" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-sky-500 bg-white border-2 border-black rounded-lg p-1 text-4xl shadow-[3px_3px_0_0_#000]" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 bg-white border-2 border-black rounded-lg p-1 text-4xl shadow-[3px_3px_0_0_#000]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
