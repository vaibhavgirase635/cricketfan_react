import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Features',
    href: '#features',
    dropdown: [
      { label: 'Scoring', href: '#scoring' },
      { label: 'Stats', href: '#stats' },
      { label: 'Fantasy', href: '#features-fantasy' }
    ]
  },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Testimonials', href: '#testimonials' }
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-white shadow-md py-2 top-0'
          : 'bg-transparent py-4 top-0'
        }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex flex-col items-start">
          <Logo />
          <div className="inline-block mt-1 px-4 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm">
            Where Every Score Pays
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-neutral-800 hover:text-primary-600 font-medium transition-colors"
                onClick={(e) => {
                  if (item.dropdown) {
                    e.preventDefault();
                    toggleDropdown(item.label);
                  }
                }}
              >
                <div className="flex items-center">
                  {item.label}
                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={`ml-1 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  )}
                </div>
              </a>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-10"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 hover:bg-neutral-100 text-neutral-700"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href="#download" className="btn btn-secondary">
            Download App
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-screen w-3/4 bg-white shadow-2xl flex flex-col z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b">
                <Logo />
                <button onClick={() => setMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>
              <div className="overflow-y-auto flex-1">
                <nav className="py-4">
                  {navItems.map((item) => (
                    <div key={item.label}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          if (item.dropdown) {
                            e.preventDefault();
                            toggleDropdown(item.label);
                          } else {
                            setMobileMenuOpen(false);
                          }
                        }}
                        className="flex justify-between items-center px-6 py-3 text-lg hover:bg-neutral-100"
                      >
                        {item.label}
                        {item.dropdown && (
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                          />
                        )}
                      </a>
                      {item.dropdown && activeDropdown === item.label && (
                        <div className="bg-neutral-50 py-2">
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.href}
                              className="block px-10 py-2 hover:bg-neutral-100"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
              <div className="p-6 border-t">
                <a
                  href="https://play.google.com/store/apps/details?id=com.cricketfanapp.app"
                  className="btn btn-primary w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Download App
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;