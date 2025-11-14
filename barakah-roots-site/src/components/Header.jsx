import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
          {/* Mobile menu button will go here */}
          <button className="text-deep-olive">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;