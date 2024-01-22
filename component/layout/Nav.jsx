// Nav.jsx
"use client";

import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "/assets/svg/Logo.svg";

const Nav = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Products", path: "/", options: ["Option 1", "Option 2"] },
    { title: "Solutions", path: "/", options: ["Option A", "Option B"] },
    { title: "Resources", path: "/", options: ["Option X", "Option Y"] },
    { title: "Pricing", path: "/" },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 lg:block">
      <a href="/" className="flex gap-2">
        <Image
          src={Logo}
          width={30}
          height={30}
          alt="Float UI logo"
          className="lg:w-6 w-5"
        />
        <p className="py-2 text-[#101828] text-base lg:text-2xl font-semibold">
          ClearLink<span className="text-[#528BFF]">.</span>
        </p>
      </a>
      <div className="lg:hidden">
        <button
          className="menu-btn text-gray-500 hover:text-gray-800"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <header>
      <div className={`lg:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
        <Brand />
      </div>
      <nav
        className={`pb-5 lg:text-sm ${
          state
            ? "absolute top-0 inset-x-0 z-50 bg-[#F2F4F7] shadow-lg rounded-xl border mx-2 mt-2 lg:shadow-none lg:border-none lg:mx-0 lg:mt-0 lg:relative lg:bg-transparent"
            : ""
        }`}
      >
        <div className="gap-x-14 lg:rounded-full bg-[#F2F4F7] text-white mb:border border-[#D0D5DD] items-center max-w-screen-xl mx-auto px-4 py-0 lg:flex lg:px-8">
          <Brand />
          <div
            className={`flex-1 items-center mt-8 lg:mt-0 lg:flex ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="flex-1 justify-center items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0">
              {navigation.map((item, idx) => {
                const isLastItem = idx === navigation.length - 1;

                return (
                  <li
                    key={idx}
                    className="text-[#667085] hover:text-[#444a58] text-lg"
                  >
                    {!isLastItem ? (
                      <div className="relative">
                        <button
                          className="flex items-center focus:outline-none"
                          onClick={() => {
                            const dropdown = document.getElementById(
                              `dropdown-${idx}`
                            );
                            dropdown.classList.toggle("hidden");
                          }}
                        >
                          <span>{item.title}</span>
                          <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <div
                          id={`dropdown-${idx}`}
                          className="hidden z-10 absolute text-gray-700 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                        >
                          <ul className="py-2 text-sm text-gray-700">
                            {item.options.map((option, optionIdx) => (
                              <li key={optionIdx}>
                                <Link
                                  href={item.path} // Update to link to the corresponding path
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  {option}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <a href={item.path} className="block">
                        {item.title}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="items-center justify-end mt-6 space-y-6 lg:flex lg:mt-0">
              <div className="flex gap-2">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-x-1 py-3 px-6 text-base text-[#101828] font-medium bg-white border border-[#98A2B3] active:bg-white rounded-full lg:inline-flex"
                >
                  Talk to sales
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-x-1 py-3 px-6 text-base text-white font-medium bg-[#175CD3]/90 hover:[#175CD3] active:bg-[#175CD3] rounded-full lg:inline-flex"
                >
                  Sign up for free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
