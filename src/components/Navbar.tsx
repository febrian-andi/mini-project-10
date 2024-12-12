import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-20 flex justify-between items-center px-6 md:px-20 py-4
        ${isScrolled && "bg-[#1B1A16] shadow-md"}`}
    >
      {/* Logo */}
      <a
        onClick={() => scrollToSection("features")}
        className="text-3xl font-bold text-white"
      >
        FurniShop
      </a>

      {/* Hamburger Menu Button */}
      <button
        className="text-white text-3xl md:hidden focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars />
      </button>

      {/* Fullscreen Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white text-black flex flex-col justify-center items-center space-y-8 text-white text-2xl transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <a
          onClick={() => scrollToSection("home")}
          className="hover:text-gray-400 cursor-pointer"
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("about")}
          className="hover:text-gray-400 cursor-pointer"
        >
          About
        </a>
        <a
          onClick={() => scrollToSection("features")}
          className="hover:text-gray-400 cursor-pointer"
        >
          Features
        </a>
        <a
          onClick={() => scrollToSection("contact")}
          className="hover:text-gray-400 cursor-pointer"
        >
          Contact
        </a>
        <button
          className="absolute bottom-10 text-black focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          <RxCross2 className="w-8 h-8" />
        </button>
      </div>

      {/* Menu Items (visible in desktop view) */}
      <ul className="hidden md:flex text-white text-lg space-x-8">
        <li>
          <a
            onClick={() => scrollToSection("home")}
            className="hover:text-gray-400 cursor-pointer"
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection("about")}
            className="hover:text-gray-400 cursor-pointer"
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection("features")}
            className="hover:text-gray-400 cursor-pointer"
          >
            Features
          </a>
        </li>
        <li>
          <a
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-400 cursor-pointer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
