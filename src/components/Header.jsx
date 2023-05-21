import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div>
      <header className="body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
          <a className="title-font mb-4 flex items-center font-medium text-white md:mb-0">
            <FontAwesomeIcon
              className="h-7 w-7 rounded-full bg-indigo-400 p-2 text-white"
              icon={faCamera}
            />
            <span className="ml-3 text-xl">D PHOTOGRAPHY</span>
          </a>
          <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
            <a className="mr-5 hover:text-white">HOME</a>
            <a className="mr-5 hover:text-white">SALES</a>
            <a className="mr-5 hover:text-white">MY WORKS</a>
            <a className="mr-5 hover:text-white">CONTACT ME</a>
          </nav>
          <button className="mt-4 inline-flex items-center rounded border-0 bg-gray-800 px-3 py-1 text-base hover:bg-gray-700 focus:outline-none md:mt-0">
            LogIn
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="ml-1 h-4 w-4"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
