import { useState } from "react";
import headerLogo from "../assets/header-logo.png";

const navigationLinks = [
  "Find a Professional",
  "Categories",
  "How It Works",
  "Reviews",
  "Blog",
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="relative w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-[80px] lg:px-8">
        {/* Logo */}
        <a href="#" aria-label="ProFind home" onClick={closeMenu}>
          <img src={headerLogo} alt="ProFind" className="h-auto w-[140px] sm:w-[160px] lg:w-[180px]" />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigationLinks.map((link) => (
            <a key={link} href="#" className="text-[17px] font-semibold text-[#182B49] transition-colors hover:text-blue-600">
              {link}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-5 lg:flex">
          <button className="text-[17px] font-semibold text-[#182B49] transition-colors hover:text-blue-600">
            Log In
          </button>
          <button className="rounded-lg bg-blue-600 px-5 py-3 text-[16px] font-semibold text-white transition-colors hover:bg-blue-700">
            Register as a Professional
          </button>
        </div>

        {/* Tablet and mobile menu button */}
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-[#182B49] transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Tablet and mobile navigation */}
      <div
        id="mobile-navigation"
        className={`${isMenuOpen ? "block" : "hidden"} absolute left-0 right-0 top-full z-50 border-t border-gray-100 bg-white shadow-lg lg:hidden`}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col px-4 py-4 sm:px-6">
          {navigationLinks.map((link) => (
            <a key={link} href="#" onClick={closeMenu} className="rounded-lg px-3 py-3 text-base font-semibold text-[#182B49] transition-colors hover:bg-blue-50 hover:text-blue-600">
              {link}
            </a>
          ))}

          <div className="mt-3 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row">
            <button className="rounded-lg border border-gray-200 px-5 py-3 text-base font-semibold text-[#182B49] transition-colors hover:bg-gray-50 sm:flex-1">
              Log In
            </button>
            <button className="rounded-lg bg-blue-600 px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-blue-700 sm:flex-1">
              Register as a Professional
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
