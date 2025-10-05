import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className=" text-xl font-bold mb-4">About Us</h2>
          <p className=" text-sm">
            We are dedicated to providing the best online shopping experience with top-quality products and fast delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="transition">Home</a></li>
            <li><a href="#men" className="transition">Shop</a></li>
            <li><a href="#" className="transition">About</a></li>
            <li><a href="#contact" className="transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Email: info@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className=" text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-[#CA1515] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#CA1515] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#CA1515] transition"><FaInstagram /></a>
            <a href="www.linkedin.com/in/pranjal-sharma-aa94482b8" className="hover:text-[#CA1515] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
