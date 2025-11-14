import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-warm-sand text-barakah-text">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:text-deep-olive">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-deep-olive">Projects</Link></li>
              <li><Link to="/adopt" className="hover:text-deep-olive">Adopt a Seedling</Link></li>
              <li><Link to="/volunteer" className="hover:text-deep-olive">Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li><Link to="/constitution" className="hover:text-deep-olive">Constitution</Link></li>
              <li><Link to="/manifesto" className="hover:text-deep-olive">Manifesto</Link></li>
              <li><Link to="/privacy" className="hover:text-deep-olive">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-lg bg-cream border border-light-green"/>
              <button type="submit" className="w-full mt-2 px-4 py-2 rounded-lg bg-light-green text-white font-semibold">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-light-green">
          <p>&copy; {new Date().getFullYear()} Barakah Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;