import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-2xl font-bold text-deep-olive font-display">
          Barakah Roots
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-barakah-text hover:text-deep-olive">About</Link>
          <Link to="/projects" className="text-barakah-text hover:text-deep-olive">Projects</Link>
          <Link to="/adopt" className="text-barakah-text hover:text-deep-olive">Adopt a Seedling</Link>
          <Link to="/volunteer" className="text-barakah-text hover:text-deep-olive">Volunteer</Link>
          <Link to="/stories" className="text-barakah-text hover:text-deep-olive">Stories</Link>
          <Link to="/contact" className="text-barakah-text hover:text-deep-olive">Contact</Link>
        </div>
        <Link to="/donate" className="hidden md:inline-flex items-center px-5 py-3 rounded-2xl bg-light-green text-white font-semibold shadow-md transform transition-transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-light-green/40">
          Donate
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-deep-olive z-50">
            <motion.div
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              )}
            </motion.div>
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 left-0 w-full h-full bg-cream z-40 p-8 pt-24"
          >
            <div className="flex flex-col items-center space-y-6">
              <Link to="/about" className="text-2xl text-barakah-text hover:text-deep-olive" onClick={toggleMenu}>About</Link>
              <Link to="/projects" className="text-2xl text-barakah-text hover:text-deep-olive" onClick={toggleMenu}>Projects</Link>
              <Link to="/adopt" className="text-2xl text-barakah-text hover:text-deep-olive" onClick={toggleMenu}>Adopt a Seedling</Link>
              <Link to="/volunteer" className="text-2xl text-barakah-text hover:text-deep-olive" onClick={toggleMenu}>Volunteer</Link>
              <Link to="/stories" className="text-2xl text-barakah-text hover:text-deep-olive" onClick={toggleMenu}>Stories</Link>
              <Link to="/contact" className="text-2xl text-barakah-text hover:text-deep-olive" onClick={toggleMenu}>Contact</Link>
              <Link to="/donate" className="mt-8 inline-flex items-center px-8 py-4 rounded-2xl bg-light-green text-white font-semibold shadow-md" onClick={toggleMenu}>
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;