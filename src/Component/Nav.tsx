import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      {/* Desktop navigation */}
      <div className="hidden  md:flex  w-full items-center justify-evenly h-[103px]">
        {/* Left section */}
        <div className="flex gap-[10px] items-center">
          <img src="/image/logo.svg"></img>
          <p>MILESTONE GROUP LOGISTICS </p>
        </div>

        {/* Navigation links */}
        <div className="flex gap-[50px] ">
          <a href="/" className="">
            Home
          </a>
          <a href="/about-us" className="">
            About Us
          </a>
          <a href="/blogs" className="">
            Blogs
          </a>
          <a href="/careers" className="">
            Careers
          </a>
          <a href="/contact-us" className="">
            Contact Us
          </a>
        </div>

        {/* Right section */}
        <div className="flex  gap-[20px]">
          <a href="#signin" className="">
            Sign In
          </a>
          <a href="#register" className="">
            Register
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex flex-row justify-between items-center px-[16px] py-[12px]">
        {/* Lantern text */}
        <p className="text-white font-Sora text-[24px] font-bold">Lantern</p>

        {/* Hamburger icon */}
        <button onClick={toggleMobileMenu} className="ml-auto">
          <img
            src="/image/hamburger.svg"
            alt="menu"
            className="cursor-pointer"
          />
        </button>
      </div>

      {/* Dropdown menu */}
      {showMobileMenu && (
        <div className="md:hidden flex flex-col absolute right-0 w-[40%]  p-[16px] z-30">
          <a href="/" className="">
            Home
          </a>
          <a href="/about-us" className="">
            About Us
          </a>
          <a href="/blogs" className="">
            Blogs
          </a>
          <a href="/careers" className="">
            Careers
          </a>
          <a href="/contact-us" className="">
            Contact Us
          </a>

          <a href="#signin" className="">
            Sign In
          </a>
          <a href="#register" className="">
            Register
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
