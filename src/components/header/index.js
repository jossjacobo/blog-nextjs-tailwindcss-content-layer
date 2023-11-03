"use client";
import Link from "next/link";
import Logo from "./logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  SunIcon,
  TwitterIcon,
} from "../icons";
import { useState } from "react";
import { useThemeSwitch } from "../hooks/use-theme-switcher";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <button
        className="inline-block sm:hidden z-50"
        onClick={() => setOpen(!open)}
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: open
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)",
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: open ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: open
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)",
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      {/* Nav to display on small screens (mobile) */}
      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize
      items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 flex sm:hidden
      transition-all ease duration-300"
        style={{
          top: open ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mx-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button className="w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1">
          <SunIcon />
        </button>
      </nav>
      {/* Nav Bar to display on medium or large screen (Desktop) */}
      <nav
        className="w-max py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize
      items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50 hidden sm:flex"
      >
        <Link href="/" className="mx-2">
          Home
        </Link>
        <Link href="/about" className="mx-2">
          About
        </Link>
        <Link href="/contact" className="mr-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a href="http://example.com" className="inline-block w-6 h-6 mr-4">
          <DribbbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
    </header>
  );
};

export default Header;
