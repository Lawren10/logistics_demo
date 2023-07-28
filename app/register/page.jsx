"use client";
import React, { useState } from "react";
import "@/css/auth.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateRegDetails } from "@/reduxStore/storeSliceies/auth";

const Register = () => {
  const regState = useSelector((state) => state.authDetails.register);
  const dispatch = useDispatch();
  let [err, setErr] = useState({});

  const updateRecord = (e) => {
    dispatch(
      updateRegDetails({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const validateRegister = () => {
    let errorstate = {};

    for (let item in regState) {
      if (regState[item] === "") {
        errorstate[item] = "true";
      } else {
        delete errorstate[item];
      }
    }

    if (Object.keys(errorstate).length > 0) {
      console.log("errorstate", errorstate);
      setErr(errorstate);
      return;
    } else if (regState.password !== regState.confirmPassword) {
      errorstate["passwordError"] = "true";
      errorstate["confirmPassword"] = "true";
      console.log("errorstate", errorstate);
      setErr(errorstate);
      return;
    } else {
      setErr({});
      console.log("allgood:", regState);
    }
  };

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
                className={`form-input mt-1.5 w-full h-12 rounded-lg border bg-slate-150 px-3 py-2 ${
                  err.firstName === "true" ? "border-error" : ""
                }  placeholder:text-slate-400 hover:bg-slate-200 focus:ring `}
                placeholder="First Name"
                type="text"
                name="firstName"
                onChange={updateRecord}
                value={regState.firstName}
              />
            </label>
            <label class="block">
              <span>Last Name</span>
              <input
                className={`form-input mt-1.5 w-full h-12 rounded-lg border bg-slate-150 px-3 py-2 ${
                  err.lastName === "true" ? "border-error" : ""
                }  placeholder:text-slate-400 hover:bg-slate-200 focus:ring `}
                placeholder="Last Name"
                type="text"
                name="lastName"
                onChange={updateRecord}
                value={regState.lastName}
              />
            </label>
          </div>

          <div class="space-y-4">
            <label class="block">
              <span>Email</span>
              <input
                className={`form-input mt-1.5 w-full h-12 rounded-lg border bg-slate-150 px-3 py-2 ${
                  err.email === "true" ? "border-error" : ""
                }  placeholder:text-slate-400 hover:bg-slate-200 focus:ring `}
                placeholder="Email"
                type="text"
                name="email"
                onChange={updateRecord}
                value={regState.email}
              />
            </label>
            <label class="block">
              <span>Password</span>
              <input
                className={`form-input mt-1.5 w-full h-12 rounded-lg border bg-slate-150 px-3 py-2 ${
                  err.password === "true" ? "border-error" : ""
                }  placeholder:text-slate-400 hover:bg-slate-200 focus:ring `}
                placeholder="**************"
                type="password"
                name="password"
                onChange={updateRecord}
                value={regState.password}
              />
            </label>

            <label class="block">
              <span>Confirm Password</span>
              <input
                className={`form-input mt-1.5 w-full h-12 rounded-lg border bg-slate-150 px-3 py-2 ${
                  err.confirmPassword === "true" ? "border-error" : ""
                }  placeholder:text-slate-400 hover:bg-slate-200 focus:ring `}
                s
                placeholder="***************"
                type="password"
                name="confirmPassword"
                onChange={updateRecord}
                value={regState.confirmPassword}
              />
              {err.passwordError === "true" ? (
                <small className="text-error">
                  Password provided does not match
                </small>
              ) : (
                ""
              )}
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
        <div
          class="absolute w-80 h-20 registerButton shadow-xl grid place-items-center text-base font-semibold "
          onClick={validateRegister}
        >
          Register
        </div>
      </div>
    </>
  );
};

export default Register;
