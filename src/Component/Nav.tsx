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
          <p className="font-Inter font-medium text-[20px]">
            MILESTONE GROUP LOGISTICS{" "}
          </p>
        </div>

        {/* Navigation links */}
        <div className="flex gap-[50px] ">
          <a href="/" className="font-Inter text-[16px] text-nowrap">
            Home
          </a>
          <a href="/about-us" className="font-Inter text-[16px] text-nowrap">
            About Us
          </a>
          <a href="/blogs" className="font-Inter text-[16px] text-nowrap">
            Blogs
          </a>
          <a href="/careers" className="font-Inter text-[16px] text-nowrap">
            Careers
          </a>
          <a href="/contact-us" className="font-Inter text-[16px] text-nowrap">
            Contact Us
          </a>
        </div>

        {/* Right section */}
        <div className="flex  gap-[20px]">
          <a
            href="#signin"
            className="w-[139px] h-[38px] flex justify-center p-1 rounded-[10px] bg-[#333333] text-white hover:bg-[#111111]"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="w-[139px] h-[38px] flex justify-center p-1 rounded-[10px] bg-[#333333] text-white hover:bg-[#111111]"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden flex flex-row justify-between items-center px-[16px] py-[12px]">
        {/* Lantern text */}
        <div className="flex gap-[10px] items-center">
          <img src="/image/logo.svg"></img>
          <p className="font-Inter font-medium text-[20px]">
            MILESTONE GROUP LOGISTICS{" "}
          </p>
        </div>

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
        <div className="md:hidden flex flex-col absolute right-0 w-[40%]  p-[16px] z-30 bg-white shadow-custom-blur rounded-md gap-[20px]">
          <a href="/" className="font-Inter text-[16px]">
            Home
          </a>
          <a href="/about-us" className="font-Inter text-[16px]">
            About Us
          </a>
          <a href="/blogs" className="font-Inter text-[16px]">
            Blogs
          </a>
          <a href="/careers" className="font-Inter text-[16px]">
            Careers
          </a>
          <a href="/contact-us" className="font-Inter text-[16px]">
            Contact Us
          </a>

          <a
            href="#signin"
            className="w-[120px] h-[38px] flex justify-center p-1 rounded-[10px] bg-[#333333] text-white hover:bg-[#111111]"
          >
            Sign In
          </a>
          <a
            href="#register"
            className="w-[120px] h-[38px] flex justify-center p-1 rounded-[10px] bg-[#333333] text-white hover:bg-[#111111]"
          >
            Register
          </a>
        </div>
      )}
    </>
  );
};

export default Nav;
