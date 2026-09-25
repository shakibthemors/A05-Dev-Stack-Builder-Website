import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
        
        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl"
          >
            <FiMenu />
          </button>

          <img src={Logo} alt="Dev Stack" className="w-32" />
              <div className="md:hidden flex items-center gap-2">
              <button>Sign In</button>
              <button className="bg-pink-500 hover:bg-pink-700 text-white py-1 px-2 rounded-3xl">
                Sign Up
              </button>
              </div>
          <ul className="hidden md:flex gap-6 items-center">
            <li>
              <a href="" className="text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>

            <li>
              <a href="">Projects</a>
            </li>

            <li>
              <a href="">About</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
          </ul>

          <div className="hidden md:flex gap-4 items-center">
            <button>Sign In</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white py-1 px-2 rounded-3xl">
              Sign Up
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 px-4">
            <div className="flex flex-col gap-4 items-center">
              <a href="" className="text-pink-500">
                Home
              </a>
              <a href="">Technologies</a>
              <a href="">Projects</a>
              <a href="">About</a>
              <a href="">Contact</a>

            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
