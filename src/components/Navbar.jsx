import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
   <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/30 shadow-sm">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-3">
          <img src="/alphastack_logo.png" alt="Logo" className="h-10 drop-shadow-md" />
          <h2 style={{ color: "#ff6b6bfb" }} className="text-3xl font-extrabold       cursor-pointer">
            AlfaStack
          </h2>
        </div>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-base font-semibold">
          {[
            { id: "hero", label: "Hero" },
            { id: "who-we-are", label: "Who We Are" },
            { id: "transformation", label: "Our Transformation" },
            { id: "tech-stack", label: "TechStack" },
            { id: "contact", label: "Contact Us" },
          ].map(({ id, label }) => (
            <li key={id} className="relative group cursor-pointer">
              <Link
                to={id}
                smooth={true}
                duration={500} style={{ color: "#ff6b6bfa"}}
                className="text-gray-800 hover:text-pink-600 transition-colors duration-300"
              >
                {label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
