import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import IconLoader from "./IconLoader";

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const availableLanguages: Record<string, string> = {
    en: "🇬🇧 EN",
    cs: "🇨🇿 CZ",
    ua: "🇺🇦 UA",
  };

  const [language, setLanguage] = useState(i18n.language || "en");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Zavření mobilního menu při kliknutí mimo
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest('button[aria-label="Toggle menu"]')
      ) {
        setMobileMenuOpen(false);
      }

      // Zavření jazykového dropdownu při kliknutí mimo
      const clickedOutsideDesktopDropdown =
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node);

      const clickedOutsideMobileDropdown =
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node);

      if (clickedOutsideDesktopDropdown && clickedOutsideMobileDropdown) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLangChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    setLangOpen(false);
    setMobileMenuOpen(false); // Zavřít mobilní menu po změně jazyka
  };

  const toggleMobileMenu = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="font-inter z-50 text-xl font-medium">
      <div className="mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="Fuska Logo"
            className="h-12 md:h-16 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-800">
          <a href="#about" className="hover:text-green-600 transition-colors">
            About app
          </a>
          <a
            href="#for-whom"
            className="hover:text-green-600 transition-colors"
          >
            For whom
          </a>
          <a
            href="#how-it-works"
            className="hover:text-green-600 transition-colors"
          >
            How works
          </a>
          <a href="#app-for" className="hover:text-green-600 transition-colors">
            App for
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Language Selector */}
        <div className="hidden md:block relative" ref={desktopDropdownRef}>
          <button
            className="text-gray-800 flex items-center gap-1 hover:text-green-600 transition-colors"
            onClick={() => setLangOpen((prev) => !prev)}
            aria-expanded={langOpen}
          >
            {availableLanguages[language]}
            <IconLoader src="/arrowdown.svg" />
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 w-24  border border-gray-200 rounded-md shadow-lg z-10">
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed inset-0 top-20 bg-white/33 backdrop-blur-sm z-40 py-4 px-6"
          >
            <nav className="flex flex-col space-y-4">
              <a
                href="#about"
                className="hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                About app
              </a>
              <a
                href="#for-whom"
                className="hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                For whom
              </a>
              <a
                href="#how-it-works"
                className="hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                How works
              </a>
              <a
                href="#app-for"
                className="hover:text-green-600 transition-colors py-2 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                App for
              </a>

              {/* Mobile Language Selector */}
              <div className="  border-gray-200">
                <div className="relative" ref={mobileDropdownRef}>
                  <button
                    className="flex items-center gap-1 hover:text-green-600 transition-colors"
                    onClick={() => setLangOpen((prev) => !prev)}
                    aria-expanded={langOpen}
                  >
                    {availableLanguages[language]}
                    <IconLoader src="/arrowdown.svg" />
                  </button>
                  {langOpen && (
                    <div className="mt-2 w-full bg-white/33 border border-gray-200 rounded-md shadow-lg">
                      {Object.keys(availableLanguages).map((langCode) => (
                        <div
                          key={langCode}
                          onClick={() => handleLangChange(langCode)}
                          className="px-3 py-2 hover:bg-green-100 cursor-pointer"
                        >
                          {availableLanguages[langCode]}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
