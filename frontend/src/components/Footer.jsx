import React from 'react';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center mt-[30px] bg-cream py-6">
      <ul className="inline-flex list-none p-0 m-[20px] space-x-[15px]">
        <li>
          <a href="#">
            <span className="w-[50px] h-[50px] bg-icon-bg flex items-center justify-center text-cream text-[30px] rounded-full">
              <FaFacebookF />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="w-[50px] h-[50px] bg-icon-bg flex items-center justify-center text-cream text-[30px] rounded-full">
              <FaTwitter />
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="w-[50px] h-[50px] bg-icon-bg flex items-center justify-center text-cream text-[30px] rounded-full">
              <FaYoutube />
            </span>
          </a>
        </li>
      </ul>
      <span className="copyright text-[18px] text-neutral mb-[10px] block">
        &#169; Barakah Roots. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;