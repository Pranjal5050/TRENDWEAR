import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          
          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white mb-4">About Us</h2>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
              We’re dedicated to providing a seamless online shopping experience with quality products and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition block">
                  Home
                </a>
              </li>
              <li>
                <a href="#men" className="hover:text-white transition block">
                  Shop
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition block">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white mb-4">Contact</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <strong>Email:</strong> info@example.com
              </li>
              <li>
                <strong>Phone:</strong> +1 234 567 890
              </li>
              <li>
                <strong>Address:</strong> 123 Main St, City, Country
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold text-white mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#CA1515] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#CA1515] transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#CA1515] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/pranjal-sharma-aa94482b8"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-[#CA1515] transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
