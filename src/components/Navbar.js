import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-amber-500 p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="mr-auto cursor-pointer">
          <Link to="/" className="text-white text-xl font-bold">
            Estate Explorer
          </Link>
        </div>
        <div className="md:flex hidden">
          <ul className="flex space-x-4">
            <li className="cursor-pointer">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about" className="text-white hover:underline">
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contact" className="text-white hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white cursor-pointer focus:outline-none focus:ring"
          >
            {menuOpen ? (
              <AiOutlineClose className="w-6 h-6 text-white" />
            ) : (
              <BiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 p-4 bg-amber-500">
            <li className="cursor-pointer">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/about" className="text-white hover:underline">
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link to="/contact" className="text-white hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
