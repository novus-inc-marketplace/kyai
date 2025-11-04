import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar = ({ session }) => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0 && !scrolled) {
      setScrolled(true);
    } else if (latest === 0 && scrolled) {
      setScrolled(false);
    }
  });

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
    <motion.nav
      className={`fixed top-0 left-0 w-full z-10 transition-colors duration-300 ${scrolled ? 'bg-base-100 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className={`text-2xl font-bold ${scrolled ? 'text-neutral' : 'text-white'}`}>KYAI</span>
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
                className="bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80"
              >
                Login with Google
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children, scrolled }) => {
  return (
    <Link to={to} className={`relative text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-neutral hover:text-primary' : 'text-gray-300 hover:text-white'} px-3 py-2 rounded-md`}>
      {children}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

export default Navbar;
