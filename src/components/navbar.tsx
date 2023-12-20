"use client";

import { useState, useRef, useEffect } from "react";

type Section = {
  name: string, 
  active: boolean
}

export default function Navbar() {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);


  const [sections, setSections ] = useState<Section[]>([
    {name: 'introduction', active: true},
   {name: 'projects', active: false}
  ])
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setScrolled(window.pageYOffset > window.innerHeight / 2);
    };

    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  
  const observers = useRef<IntersectionObserver[]>([]);
  
  useEffect(() => {
    observers.current = sections.map((section, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setSections((sections) => sections.map((section, i) => ({
            ...section,
            active: i === index ? entry.isIntersecting : section.active,
          })));
        },
        { threshold: 0.5 }
      );

      const element = document.getElementById(section.name);

      if (element) {
        observer.observe(element);
      }
      return observer;
    });

    return () => observers.current.forEach((observer) => observer.disconnect());
  }, [sections]);



  return (
    <nav className="fixed font-default tracking-wide w-full z-50">
      <div className={`transition duration-500 relative z-20 mx-auto max-w-7xl ${scrolled ? 'bg-gray-800/50' : 'bg-gray-800/25'} px-2 sm:px-6 lg:px-8`}>
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
                {sections.map(section => (
                  <a
                  key={section.name}
                  href={`#${section.name}`}
                  className={`rounded-md ${section.active ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"} px-3 py-2 text-sm font-medium`}
                  aria-current="page"
                >
                  {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                </a>
                ))}
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
          <a
            href="#"
            className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Team
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
