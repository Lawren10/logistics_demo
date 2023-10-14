"use client";
import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import Link from "next/link";

const Sidebar = () => {
  let [showSettingsBar, setShowSettingsBar] = useState(false);

  const displaySettingsBar = () => {
    // console.log("clicked");
    setShowSettingsBar(!showSettingsBar);
  };

  return (
    <>
      <div className="sidebar">
        <div className="main-sidebar">
          <div className="flex h-full w-full flex-col items-center border-r border-slate-150 bg-white dark:border-navy-700 dark:bg-navy-800">
            <div className="flex pt-4">
              <a href="/">
                {/* <button className=" ml-0.5 flex h-11 w-11  text-primary outline-none transition-transform duration-500 ease-in-out hover:rotate-[360deg]">
                  LOGO
                </button> */}
                <div
                  className="relative mx-auto h-18 w-18 shadow-xl overflow-hidden grid place-items-center bg-white "
                  style={{ borderRadius: "20%" }}
                >
                  <img
                    className="mix-blend-multiply"
                    src="/ktg_logo.JPG"
                    alt="avatar"
                  />
                </div>
              </a>
            </div>

            <div className="is-scrollbar-hidden flex grow flex-col space-y-4 overflow-y-auto pt-6">
              <Tippy content="Dashboard" placement="left">
                <Link
                  href="/admin/dashboard"
                  className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 "
                >
                  <img src="/leftNavIcons/dashboards.png" className="w-7 h-7" />
                </Link>
              </Tippy>

              <Tippy content="Reports" placement="left">
                <Link
                  href="/admin/reports"
                  className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 "
                >
                  <img src="/leftNavIcons/reports.png" className="w-7 h-7" />
                </Link>
              </Tippy>

              <Tippy content="Customers" placement="left">
                <Link
                  href="/admin/customers"
                  className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 "
                >
                  <img src="/leftNavIcons/man.png" className="w-7 h-7" />
                </Link>
              </Tippy>

              <Tippy content="Shipping" placement="left">
                <Link
                  href="/admin/placeShipmentOrder"
                  className="flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 "
                >
                  <img src="/leftNavIcons/delivery.png" className="w-7 h-7" />
                </Link>
              </Tippy>
            </div>

            <div className="flex flex-col items-center space-y-3 py-3">
              <div style={{ position: "relative" }}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={displaySettingsBar}
                  className="activate-sidebar flex h-11 w-11 items-center justify-center rounded-lg outline-none transition-colors duration-200 hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25"
                >
                  <svg
                    className="h-7 w-7"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillOpacity="0.3"
                      fill="currentColor"
                      d="M2 12.947v-1.771c0-1.047.85-1.913 1.899-1.913 1.81 0 2.549-1.288 1.64-2.868a1.919 1.919 0 0 1 .699-2.607l1.729-.996c.79-.474 1.81-.192 2.279.603l.11.192c.9 1.58 2.379 1.58 3.288 0l.11-.192c.47-.795 1.49-1.077 2.279-.603l1.73.996a1.92 1.92 0 0 1 .699 2.607c-.91 1.58-.17 2.868 1.639 2.868 1.04 0 1.899.856 1.899 1.912v1.772c0 1.047-.85 1.912-1.9 1.912-1.808 0-2.548 1.288-1.638 2.869.52.915.21 2.083-.7 2.606l-1.729.997c-.79.473-1.81.191-2.279-.604l-.11-.191c-.9-1.58-2.379-1.58-3.288 0l-.11.19c-.47.796-1.49 1.078-2.279.605l-1.73-.997a1.919 1.919 0 0 1-.699-2.606c.91-1.58.17-2.869-1.639-2.869A1.911 1.911 0 0 1 2 12.947Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M11.995 15.332c1.794 0 3.248-1.464 3.248-3.27 0-1.807-1.454-3.272-3.248-3.272-1.794 0-3.248 1.465-3.248 3.271 0 1.807 1.454 3.271 3.248 3.271Z"
                    ></path>
                  </svg>
                </div>

                <div
                  style={{
                    position: " fixed ",
                    inset: "auto auto 0px 100%",
                    margin: "0px",
                  }}
                  className={
                    showSettingsBar
                      ? "settings-sidebar-on"
                      : "settings-sidebar-off"
                  }
                >
                  <div className="popper-box w-64 rounded-lg border border-slate-150 bg-white shadow-soft ">
                    <div className="flex items-center space-x-4 rounded-t-lg bg-slate-100 py-5 px-4 dark:bg-navy-800">
                      <div className="avatar h-14 w-14">
                        <img
                          className="rounded-full"
                          src="images/avatar/avatar-12.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a
                          href="#"
                          className="text-base font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                        >
                          user name
                        </a>
                        <p className="text-xs text-slate-400 dark:text-navy-300">
                          profession
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col pt-2 pb-5">
                      <Link
                        href="/"
                        className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warning text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4.5 w-4.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>
                        </div>

                        <div>
                          <h2 className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                            Profile
                          </h2>
                          <div className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                            profile setting
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/"
                        className="group flex items-center space-x-3 py-2 px-4 tracking-wide outline-none transition-all hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4.5 w-4.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            ></path>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>
                        </div>

                        <div>
                          <h2 className="font-medium text-slate-700 transition-colors group-hover:text-primary group-focus:text-primary dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                            Settings
                          </h2>
                          <div className="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                            account settings
                          </div>
                        </div>
                      </Link>
                      <div className="mt-3 px-4">
                        <button className="btn h-9 w-full space-x-2 bg-primary text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
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
                              strokeWidth="1.5"
                              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                            ></path>
                          </svg>
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
