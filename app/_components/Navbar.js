"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="navbar bg-white shadow-sm h-fit relative z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setDropdownOpen(!isDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul
              ref={dropdownRef}
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 w-fit p-2 bg-white rounded-box shadow-md z-50 absolute"
            >
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/officers">Officers</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li>
                <a>Programs</a>
                <ul className="p-2 bg-white z-50">
                  <li><a>8 Hour Infectious Disease Certification</a></li>
                  <li><a>X-Ray Certification</a></li>
                  <li><a>SNDA Conferences</a></li>
                  <li><a>Workshops</a></li>
                </ul>
              </li>
              <li><Link href="/requirements" className="btn rounded-full text-white">Requirements</Link></li>
            </ul>
          )}
        </div>
        <Link href="/" className="p-2 text-xl font-bold">UCLA SBB</Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex justify-center items-center overflow-visible">
        <ul className="menu menu-horizontal px-1 flex justify-center items-center z-50">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/officers">Officers</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li className="relative">
            <details className="z-50 mr-4">
              <summary>Programs</summary>
              <ul className="p-2 bg-white shadow-md absolute mt-2 z-50">
                <li><a>8 Hour Infectious<br /> Disease Certification</a></li>
                <li><a>X-Ray Certification</a></li>
                <li><a>SNDA Conferences</a></li>
                <li><a>Workshops</a></li>
              </ul>
            </details>
          </li>
          <li><Link href="/requirements" className="btn rounded-full text-white">Requirements</Link></li>
        </ul>
      </div>
    </div>
  );
}
