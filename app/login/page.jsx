import React from "react";
import "@/css/auth.css";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="grid place-items-center"></div>
      <div className="grid place-items-center relative loginSize">
        <div className="card mt-20 w-full max-w-xl p-4 sm:p-5 shadow-xl absolute centerBox ">
          <div
            className="relative mx-auto -mt-20 h-40 w-40 shadow-xl"
            style={{ borderRadius: "40%" }}
          >
            <img
              class="mask is-squircle"
              src="images/avatar/avatar-20.jpg"
              alt="avatar"
            />
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <button className="h-11 w-11  text-primary outline-none ">
              LOGO
            </button>
            {/* <img
                  className=" "
                  src="images/app-logo.svg"
                  alt="logo"
                /> */}
            <h2 class="text-3xl font-semibold">User Login</h2>
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
                placeholder="Password"
                type="password"
              />
            </label>
          </div>
          <div className="my-4">
            <p>
              Don't have an Account?{" "}
              <span className="text-success">
                <Link href="/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
        <div class="absolute w-80 h-20 loginButton shadow-xl grid place-items-center text-base font-semibold ">
          Login
        </div>
      </div>
    </>
  );
};

export default Login;
