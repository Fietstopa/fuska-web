import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const availableLanguages: Record<string, string> = {
    en: "En",
    cs: "Cs",
    de: "De",
  };

  const [language, setLanguage] = useState(i18n.language || "en");

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
    i18n.changeLanguage(lang); // 🔄 změna jazyka
    setLanguage(lang);
    setLangOpen(false);
  };

  return (
    <header className="font-inter text-xl font-medium">
      <div className="mx-auto px-6 md:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Fuska Logo" className="h-16 w-auto" />
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6 text-gray-800">
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
            {availableLanguages[language]} <span>▼</span>
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-24 border rounded shadow-md z-10 bg-white">
              {Object.keys(availableLanguages).map((langCode) => (
                <div
                  key={langCode}
                  onClick={() => handleLangChange(langCode)}
                  className="px-3 py-2 hover:bg-green-100 cursor-pointer text-gray-700"
                >
                  {availableLanguages[langCode]}
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
