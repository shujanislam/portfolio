import Link from 'next/link';
const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative w-full max-w-6xl mx-auto flex flex-col items-start py-14 px-3 text-left gap-y-3 sm:py-24 sm:px-4 sm:gap-y-4"
    >
      <p className="text-base leading-7 text-white/80 sm:text-lg">Frontend Engineer @<Link href="https://atomity.de/" target="_blank" className="text-blue-400">Atomity</Link>.</p>
      <p className="text-base leading-7 text-white/80 sm:text-lg">Computer Science Engineering Student @<Link href="https://www.tezu.ernet.in/" target="_blank" className="text-blue-400">Tezpur University</Link>.</p>
      <p className="text-base leading-7 text-white/80 sm:text-lg">Currently based in Guwahati, Assam, India.</p>
    </section>
  );
};

export default HeroSection;
