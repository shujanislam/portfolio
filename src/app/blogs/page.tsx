import Navbar from '../components/Navbar';
import Link from 'next/link';

const Blogs = () => {
  return (
    <div className="w-full rounded-xl mx-auto px-4 py-6 sm:w-[90%] sm:p-6 sm:mt-16 mb-16">
      <Navbar />
      <main className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-3 px-3 sm:px-4 lg:grid-cols-[180px_minmax(0,720px)] lg:gap-16">
        <time className="text-sm text-gray-500 lg:pt-1">Jun 17, 2026</time>
        <Link
          href="/blogs/engineering-is-stupid"
          className="group block max-w-3xl"
        >
          <h1 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-300 sm:text-xl">
            engineering. is. stupid.
          </h1>
        </Link>
        <time className="text-sm text-gray-500 lg:pt-1">Jun 17, 2026</time>
        <Link
          href="/blogs/make-things-work"
          className="group block max-w-3xl"
        >
          <h1 className="text-xl font-semibold text-white transition-colors group-hover:text-blue-300 sm:text-xl">
            make. things. work.
          </h1>
        </Link>
      </main>
    </div>
  );
}

export default Blogs;
