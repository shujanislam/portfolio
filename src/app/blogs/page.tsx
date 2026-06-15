import Navbar from '../components/Navbar';

const Blogs = () => {
  return (
    <div className="w-full rounded-xl mx-auto px-4 py-6 sm:w-[90%] sm:p-6 sm:mt-16 mb-16">
      <Navbar />
      <div className="text-center justify-center mt-12">
        <h3 className="text-gray-400 text-lg font-bold">Nothing to read yet</h3>
      </div>
    </div>
  );
}

export default Blogs;
