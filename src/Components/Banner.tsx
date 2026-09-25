import BannerPhoto from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-20">

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Build Your Ideal</h1>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-transparent bg-clip-text whitespace-nowrap">
            Development Stack
          </h1>
          <p className="mt-5 max-w-xl text-gray-600 leading-7">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex gap-2 mt-8 px-4 md:px-0">
            <button className="w-1/2 h-10.5 text-sm sm:text-base whitespace-nowrap bg-linear-to-r from-[#F97316] to-[#EC4899] text-white font-bold rounded-2xl">
              Explore Technologies
            </button>
            <button className="w-1/2 h-10.5 text-sm sm:text-base whitespace-nowrap bg-gray-100 text-gray-800 border border-gray-200 rounded-2xl">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={BannerPhoto}
            alt="Development Stack"
            className="w-full max-w-125"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
