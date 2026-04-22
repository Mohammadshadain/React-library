"use client";
import React from "react";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [flyer, setFlyer] = React.useState(false);

  return (
    <header className="fixed top-0 w-full clearNav z-50 bg-gradient-to-r from-blue-200 via-blue-500 to-blue-800">
      
      <div className="max-w-5xl mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        
        <div className="flex flex-row items-center justify-between p-3 md:p-1">
          
          <a
            href="/"
            className="flex text-3xl text-white font-medium mb-4 md:mb-0"
          >
            React Library Directory
          </a>

          <button
            className="text-white pb-4 cursor-pointer leading-none px-3 py-1 md:hidden outline-none ml-auto"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>

        </div>

        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          
          <div className="md:ml-auto md:mr-auto pt-1 md:pl-14 flex flex-wrap items-center md:text-base text-xl">
            
            <div className="relative">
              <button
                className="text-gray-300 font-medium pb-8"
                onMouseEnter={() => setFlyer(!flyer)}
              />
            </div>

            <div className="pl-10 md:pl-64 flex gap-5">
              
              <a
                className="text-gray-300 hover:text-white font-semibold"
                href="/sign-in"
              >
                Login
              </a>

              <a
                className="text-gray-300 hover:text-white font-semibold"
                href="/sign-up"
              >
                Sign Up
              </a>

            </div>

          </div>

          {/* Twitter */}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="invisible md:visible"
          >
            <svg width="30" height="17" viewBox="0 0 50 40" fill="white">
              <path d="M15.4528 40C34.0158 40 44.1732 24.6063 44.1732 11.2796..." />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-7 invisible md:visible"
          >
            <svg width="30" height="20" viewBox="0 0 25 24" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3019 0C5.50526 0 0 5.50526..."
              />
            </svg>
          </a>

        </div>
      </div>
    </header>
  );
}