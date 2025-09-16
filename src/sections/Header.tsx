"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    setTimeout(() => {
      const sections = Array.from(document.querySelectorAll("section"));
      

      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.target.id) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { root: null, rootMargin: "-20px", threshold: 0.05 }
      );

      sections.forEach((section) => observer.observe(section));

      return () => sections.forEach((section) => observer.unobserve(section));
    }, 100);
  }, []);

  useEffect(() => {
  }, [activeSection]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#intro"
          className={`nav-item ${
            activeSection === "intro" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>
          <a
          href="#projects"
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>      
        <a
          href="#contact"
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
