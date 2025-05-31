"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface Section {
  name: string;
  uri: string;
}

export default function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  
  const observers = useRef<IntersectionObserver[]>([]);
  const sections : Section[] = [
    {
      name: "home",
      uri: "/"
    },
    {
      name: "contact",
      uri: "/contact"
    }
  ]

  return (
    <nav className="fixed z-50 w-full font-default tracking-wide">
      <div
        className={`relative z-20 mx-auto max-w-7xl transition duration-500 ${
          scrolled ? "bg-gray-800/50" : "bg-gray-800/25"
        } px-2 sm:px-6 lg:px-8`}
      >
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 z-10 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setMobileMenuOpened(!mobileMenuOpened)}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpened ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="flex flex-shrink-0 items-center justify-center text-center">
              <span className="absolute inset-0 flex h-full w-full items-center justify-center text-center text-xl text-white">
                Anay
              </span>
            </div> */}
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {sections.map((section) => (
                  <Link
                    href={section.uri}
                    key={section.name}
                    className="rounded-md hover:bg-gray-800 bg-gray-900 px-3 py-2 text-sm font-medium text-white capitalize"
                    aria-current="page"
                  >
                    {section.name}
                  </Link>
                ))}
                {/* <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                {/* <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a> */}
              </div>
            </div>
          </div>
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        for right side of nav
      </div> */}
        </div>
      </div>
      <div
        className={`origin-top bg-gray-800 transition duration-500 ease-in-out ${
          mobileMenuOpened
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        } relative z-10 sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 ">
          {sections.map((section) => (
            <Link
              href={`${section.uri}`}
              key={section.name}
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
