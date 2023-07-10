"use client";
import React from "react";
import Tippy from "@tippyjs/react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="main-sidebar">
          <div class="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
            <div class="flex pt-4">
              <a href="/">
                <button class=" ml-0.5 flex h-11 w-11  text-primary outline-none transition-transform duration-500 ease-in-out hover:rotate-[360deg]">
                  LOGO
                </button>
                {/* <img
                  class=" "
                  src="images/app-logo.svg"
                  alt="logo"
                /> */}
              </a>
            </div>

            <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
              <Tippy content="Customers" placement="left">
                <Link
                  href="/"
                  className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 "
                >
                  <img src="/leftNavIcons/man.png" className="w-7 h-7" />
                </Link>
              </Tippy>

              <Tippy content="Place Shipment Order" placement="left">
                <Link
                  href="/placeShipmentOrder"
                  className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 "
                >
                  <img src="/leftNavIcons/delivery.png" className="w-7 h-7" />
                </Link>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
