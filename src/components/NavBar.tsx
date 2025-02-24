"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="absolute top-4 w-full z-[6666]">
      <nav className="flex justify-between   items-center px-8 w-full lg:w-[92%] mx-auto md:rounded-full">
        <Link href="/">
          <Image
            src="/images/icons/logo.svg"
            alt="Logo"
            width={80}
            height={80}
            className="transition-transform ease-in-out w-20"
          />
        </Link>

        <div
          className={`nav-links absolute md:static duration-300 ease-in-out ${
            menuOpen ? "right-7 top-7" : "hidden"
          } 
            md:flex md:items-center md:w-auto md:bg-transparent bg-white/70 backdrop-blur-2xl md:backdrop-blur-none  border border-white/30 
            rounded-md md:rounded-full py-4 w-[13em] max-w-full`}
        >
          <ul className="flex flex-col md:flex-row  items-center w-full  md:gap-7 gap-4 px-5 text-small">
            {[
              { href: "/#about", label: "About" },
              { href: "/#services", label: "Services" },
              { href: "/Properties", label: "Properties" },
              { href: "/Agents", label: "Agents" },
              { href: "/#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li
                key={href}
                className="text-[#555] hover:text-Landingpages-textPrimary transition font-medium"
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
            <li className="md:hidden">
              <Link
                href="/Login"
                className="bg-Landingpages-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-Landingpages-brand-secondary transition"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden md:block bg-Landingpages-brand-primary text-white px-5 py-2.5 rounded-full hover:bg-Landingpages-brand-secondary transition"
          >
            Login
          </Link>

          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="transition-transform ease-in-out cursor-pointer size-8"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
                />
              </svg>
            ) : (
              <svg
                className="transition-transform ease-in-out cursor-pointer size-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5S5.5 6.83 5.5 6S4.83 4.5 4 4.5m0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5s1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5M8 19h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1m0-6h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1s.45 1 1 1M7 6c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H8c-.55 0-1 .45-1 1"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
