import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Navbar = ({ session }) => {
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

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) console.error('Error signing in with Google:', error.message);
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error signing out:', error.message);
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold ${scrolled ? 'text-custom-text' : 'text-white'}`}>
              KYAI
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" scrolled={scrolled}>Home</NavLink>
              <NavLink to="/about" scrolled={scrolled}>About</NavLink>
              <NavLink to="/projects" scrolled={scrolled}>Projects</NavLink>
              <NavLink to="/tenders" scrolled={scrolled}>Tenders</NavLink>
              <NavLink to="/contact" scrolled={scrolled}>Contact</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            {session ? (
              <button
                onClick={signOut}
                className="bg-cta-bg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="bg-cta-bg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80"
              >
                Login with Google
              </button>
            )}
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
      className={`text-sm font-medium transition-colors duration-300 px-3 py-2 rounded-md ${scrolled ? 'text-custom-text hover:text-gray-700' : 'text-gray-300 hover:text-white'}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;