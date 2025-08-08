import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Team", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQs", href: "#faq" },
    { name: "Donate", href: "#donations" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gradient-to-r from-slate-50 to-stone-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-lg font-bold text-gray-900">Presbyterian</h1>
                  <p className="text-xs text-gray-600">Medical Care Centre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative group text-gray-700 hover:text-emerald-600 px-2 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Get Help Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-emerald-600 text-white block px-3 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Help Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
