import React from "react";
import "@/css/auth.css";
import Link from "next/link";

const Register = () => {
  return (
    <>
      <div className="grid place-items-center">
        <div className="flex justify-center items-center space-x-4">
          <button className="h-11 w-11  text-primary outline-none ">
            LOGO
          </button>
          {/* <img
                  className=" "
                  src="images/app-logo.svg"
                  alt="logo"
                /> */}
          <h2 class="text-3xl font-semibold ">Register</h2>
        </div>
      </div>
      <div className="grid place-items-center relative loginSize">
        <div className="card mt-20 w-full max-w-xl p-4 sm:p-5 shadow-xl absolute registerBox ">
          <div class="grid grid-cols-2 gap-4 my-2">
            <label class="block">
              <span>First Name</span>
              <input
                class="form-input mt-1.5 w-full h-12 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="First Name"
                type="text"
              />
            </label>
            <label class="block">
              <span>Last Name</span>
              <input
                class="form-input mt-1.5 w-full h-12 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="Last Name"
                type="text"
              />
            </label>
          </div>

          <div class="space-y-4">
            <label class="block">
              <span>Email</span>
              <input
                class="form-input mt-1.5 w-full h-12 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="Email"
                type="text"
              />
            </label>
            <label class="block">
              <span>Password</span>
              <input
                class="form-input mt-1.5 w-full h-12 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="**************"
                type="password"
              />
            </label>

            <label class="block">
              <span>Confirm Password</span>
              <input
                class="form-input mt-1.5 w-full h-12 rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                placeholder="***************"
                type="password"
              />
            </label>
          </div>
          <div className="my-4">
            <p>
              Alreaady have an Account?{" "}
              <span className="text-success">
                <Link href="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
        <div class="absolute w-80 h-20 registerButton shadow-xl grid place-items-center text-base font-semibold ">
          Register
        </div>
      </div>
    </>
  );
};

export default Register;
