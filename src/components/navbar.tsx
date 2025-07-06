import React, { useState, useRef, useEffect } from "react";

const Navbar: React.FC = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState("En");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangChange = (lang: string) => {
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="font-inter text-xl font-medium">
      <div className=" mx-auto px-20 py-3 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Fuska Logo" className="h-16 w-auto" />
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6  text-gray-800">
          <a href="#about">About app</a>
          <a href="#for-whom">For whom</a>
          <a href="#how-it-works">How works</a>
          <a href="#app-for">App for</a>
        </nav>

        {/* Language selector */}
        <div className="relative" ref={dropdownRef}>
          <button
            className="text-gray-800 flex items-center gap-1"
            onClick={() => setLangOpen((prev) => !prev)}
          >
            {language} <span>▼</span>
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-24 border rounded shadow-md z-10">
              {["En", "Cs", "De"].map((lang) => (
                <div
                  key={lang}
                  onClick={() => handleLangChange(lang)}
                  className="px-3 py-2 hover:bg-green-100 cursor-pointer  text-gray-700"
                >
                  {lang}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
