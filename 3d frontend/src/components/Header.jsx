import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center py-5 px-8 lg:px-20">
      {/* Logo */}
      <h1
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="text-2xl font-extrabold text-white tracking-wide"
      >
        AP<span className="text-gray-400">CODE</span>
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 items-center">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          href="#"
          className="text-white font-bold uppercase tracking-wide text-sm hover:text-gray-400 transition-colors duration-500"
        >
          COMPANY
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          href="#"
          className="text-white font-bold uppercase tracking-wide text-sm hover:text-gray-400 transition-colors duration-500"
        >
          FEATURES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          href="#"
          className="text-white font-bold uppercase tracking-wide text-sm hover:text-gray-400 transition-colors duration-500"
        >
          RESOURCES
        </a>
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          href="#"
          className="text-white font-bold uppercase tracking-wide text-sm hover:text-gray-400 transition-colors duration-500"
        >
          DOCS
        </a>

        {/* CTA Button */}
        <a
        data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          href="#"
          className="px-6 py-2 bg-gray-500 text-white font-bold uppercase rounded-full hover:bg-white hover:text-black duration-500 transition-colors flex items-center gap-2"
        >
          SIGNIN <span>✏️</span>
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-3 bg-[#1a1a1a] w-48 rounded-lg shadow-lg p-5 flex flex-col gap-4 md:hidden z-50">
          <a href="#" className="hover:text-gray-400">COMPANY</a>
          <a href="#" className="hover:text-gray-400">FEATURES</a>
          <a href="#" className="hover:text-gray-400">RESOURCES</a>
          <a href="#" className="hover:text-gray-400">DOCS</a>
          <a
            href="#"
            className="px-6 py-2 bg-gray-500 text-white font-bold uppercase rounded-full hover:bg-white hover:text-black duration-500 transition-colors"
          >
            SIGNIN
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
