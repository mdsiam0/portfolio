import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 text-white shadow-md bg-gradient-to-r from-[#131924] to-[#0B101B] bg-opacity-80 backdrop-blur-md">    
      <div className="max-w-[1500px] mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl  tracking-wider font-main">Siam</h1>
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#home" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#works" className="hover:text-gray-300 transition-colors">Works</a>
          <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
        </nav>

       
        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Open menu"
        >
       
          <FiMenu className="w-6 h-6" />
        </button>
      </div>

     
      <div
        className={`fixed top-0 left-0 w-full h-screen z-[100] flex flex-col text-white
          bg-gradient-to-r from-[#131924] to-[#0B101B] bg-opacity-95 backdrop-blur-md
          transform transition-transform duration-700 ease-out
          ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-[100vh] opacity-0 pointer-events-none"}`}
        aria-hidden={!menuOpen}
        role="dialog"
      >
        <div className="flex justify-between items-center px-6 py-4 flex-shrink-0 ">
          <h1 className="text-3xl  tracking-wider font-main">Siam</h1>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl focus:outline-none"
            aria-label="Close menu"
          >
            <FiX className="w-8 h-8" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-3xl font-semibold">
          <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition-colors py-2">Home</a>
          <a href="#works" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition-colors py-2">Works</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition-colors py-2">Contact</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-gray-400 transition-colors py-2">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
