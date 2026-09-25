import Logo from "../assets/logo-text.png"

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:gap-40">
          <div className="w-full md:w-auto">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <img src={Logo} alt="Dev Stack" className="w-32" />
            </div>

            <p className="mt-4 w-full text-center text-sm leading-6 text-gray-500 md:w-auto md:max-w-sm md:text-left">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-6 flex justify-center gap-4 md:justify-start">
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="text-sm text-gray-500">Twitter</p>
              <p className="text-sm text-gray-500">LinkedIn</p>
            </div>
          </div>

          <div className="flex justify-between gap-8 md:gap-40">
            <div>
              <h3 className="font-semibold text-gray-900">PRODUCT</h3>
              <p className="text-sm text-gray-500">Home</p>
              <p className="text-sm text-gray-500">Technologies</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">COMPANY</h3>
              <p className="text-sm text-gray-500">About</p>
              <p className="text-sm text-gray-500">Contact</p>
              <p className="text-sm text-gray-500">Careers</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">LEGAL</h3>
              <p className="text-sm text-gray-500">Privacy</p>
              <p className="text-sm text-gray-500">Terms</p>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-5">
          <div className="flex items-center justify-between text-sm text-gray-400 md:flex-row md:justify-between">
            <p>© 2026 Dev Stack. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <p>Privacy</p>
              <p>Terms</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
