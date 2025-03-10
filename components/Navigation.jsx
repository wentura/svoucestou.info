"use client";

import Link from "next/link";
import React, { useState } from "react";
import { navigationData } from "./navigationData";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-center md:ml-auto">
      {/* Hamburger button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto absolute md:relative top-full left-0 md:top-auto md:left-auto bg-white md:bg-transparent shadow-lg md:shadow-none z-30`}
      >
        {navigationData.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 md:hover:bg-transparent"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
