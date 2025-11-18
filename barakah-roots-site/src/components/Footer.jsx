import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-warm-sand text-barakah-text">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-deep-olive mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-deep-olive transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-deep-olive transition-colors">Projects</Link></li>
              <li><Link to="/adopt" className="hover:text-deep-olive transition-colors">Adopt a Seedling</Link></li>
              <li><Link to="/volunteer" className="hover:text-deep-olive transition-colors">Volunteer</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-deep-olive mb-4">Transparency</h3>
            <ul className="space-y-2">
              <li><a href="/Constitution of Gen Z Fruit Trees.docx" className="hover:text-deep-olive transition-colors">Constitution</a></li>
              <li><a href="/Manifesto for Gen Z Fruit Trees.docx" className="hover:text-deep-olive transition-colors">Manifesto</a></li>
              {/* Add privacy policy page later */}
              <li><Link to="/privacy" className="hover:text-deep-olive transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-deep-olive mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-barakah-text hover:text-deep-olive transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.053 3.848-.764-.024-1.482-.232-2.11-.583v.062c0 2.256 1.605 4.14 3.737 4.568-.39.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.307 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.092 7.14 2.092 8.57 0 13.255-7.098 13.255-13.254 0-.202-.005-.403-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path></svg>
              </a>
              <a href="#" className="text-barakah-text hover:text-deep-olive transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266.058 1.644.07 4.85.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
              </a>
              <a href="#" className="text-barakah-text hover:text-deep-olive transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-deep-olive mb-4">Newsletter</h3>
            <form>
              <input type="email" placeholder="Your email" className="w-full p-2 rounded-lg bg-cream border border-light-green focus:outline-none focus:ring-2 focus:ring-light-green"/>
              <button type="submit" className="w-full mt-2 px-4 py-2 rounded-lg bg-light-green text-white font-semibold transform transition-transform hover:-translate-y-0.5 active:scale-95">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-light-green/50">
          <p>&copy; {new Date().getFullYear()} Barakah Roots. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;