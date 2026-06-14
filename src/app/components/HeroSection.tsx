import Link from 'next/link';
const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative w-[90%] max-w-6xl mx-auto flex flex-col items-start py-24 px-4 text-left gap-y-4"
    >
      <p className="text-lg text-white/80">Frontend Engineer @<Link href="#" className="text-blue-400">Atomity</Link>.</p>
      <p className="text-lg text-white/80">Computer Science Engineering Student @<Link href="#" className="text-blue-400">Tezpur University</Link>.</p>
      <p className="text-lg text-white/80">Currently based in Guwahati, Assam, India.</p>
    </section>
  );
};

export default HeroSection;
