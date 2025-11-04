
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-neutral text-white mt-12">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About KYAI</h3>
            <p className="text-gray-400">
              Kenya Youth in Agriculture Initiative (KYAI) is a youth-led movement dedicated to planting high-value fruit trees to combat climate change and create economic opportunities.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
            <form>
              <div className="flex">
                <input type="email" className="w-full px-4 py-2 text-gray-800 rounded-l-md focus:outline-none" placeholder="Enter your email" />
                <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-80">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kenya Youth in Agriculture Initiative (KYAI). All rights reserved.</p>
          <p className="mt-1">Planting Seeds of Opportunity</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

