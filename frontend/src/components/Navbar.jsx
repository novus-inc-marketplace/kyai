import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-cream shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${scrolled ? 'text-jungle' : 'text-cream'}`}>
              Barakah Roots
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" scrolled={scrolled}>Home</NavLink>
              <NavLink to="/about" scrolled={scrolled}>About</NavLink>
              <NavLink to="/blog" scrolled={scrolled}>Blog</NavLink>
              <NavLink to="/impact" scrolled={scrolled}>Impact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <motion.a whileHover={{ scale: 1.05 }} href="#" className="bg-jungle text-cream px-4 py-2 rounded-md text-sm font-medium">
              Get Involved
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, scrolled }) => {
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-md ${scrolled ? 'text-jungle hover:text-neutral' : 'text-cream hover:text-white'}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;