import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { useState } from "react";
import { RiShoppingCartLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

export default function Navbaar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow-md">
      <div className="flex justify-between items-center p-6">
        {/* Logo */}
        <h1 className="font-mono text-2xl">TRENDWEAR</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-mono text-lg">
          <a href="">HOME</a>
          <a href="#women">WOMEN'S</a>
          <a href="#men">MEN'S</a>
          <a href="">SHOP</a>
          <a href="#contact">CONTACT</a>
        </nav>

        {/* Cart + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to={"/cart"}><RiShoppingCartLine className="text-[22px]" /></Link>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-4 font-mono text-lg px-4 pb-4 bg-white shadow-md">
          <a href="">HOME</a>
          <a href="">WOMEN'S</a>
          <a href="">MEN'S</a>
          <a href="">SHOP</a>
          <a href="">PAGES</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </nav>
      )}
    </header>
  )
}
