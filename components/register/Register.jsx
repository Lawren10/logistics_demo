"use client";
import React, { useState } from "react";
import "@/css/auth.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateRegDetails, setLoading } from "@/reduxStore/storeSliceies/auth";
import axios from "axios";
import { useRouter } from "next/navigation";

const Register = () => {
  const regState = useSelector((state) => state.authDetails.register);
  const loadingstate = useSelector((state) => state.authDetails.loading);
  const dispatch = useDispatch();
  let [err, setErr] = useState({});

  const router = useRouter();

  const updateRecord = (e) => {
    dispatch(
      updateRegDetails({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const validateRegister = async () => {
    dispatch(setLoading(true));
    setErr({});

    let errorstate = {};

    for (let item in regState) {
      if (regState[item] === "") {
        errorstate[item] = "true";
      } else {
        delete errorstate[item];
      }
    }

    if (Object.keys(errorstate).length > 0) {
      // console.log("errorstate", errorstate);
      setErr(errorstate);
      dispatch(setLoading(false));
      return;
    } else if (regState.password !== regState.confirmPassword) {
      errorstate["passwordError"] = "true";
      errorstate["confirmPassword"] = "true";
      // console.log("errorstate", errorstate);
      setErr(errorstate);
      dispatch(setLoading(false));
      return;
    } else {
      // setErr({});
      // console.log("allgood:", regState);
      try {
        const res = await axios.post("/api/registerUser", regState);
        // console.log("from database:", res.data);
        dispatch(setLoading(false));
        router.push("/auth/signIn");
      } catch (error) {
        setErr({ exists: "true" });
        dispatch(setLoading(false));
      }
    }
  };

  return (
    <>
      {/* {console.log("loading state:", loadingstate)} */}
      <div className="grid place-items-center">
        <div className="flex justify-center items-center space-x-4">
          <div
            className="relative mx-auto -mt-24 h-20 w-24 shadow-xl overflow-hidden grid place-items-center bg-white"
            style={{ borderRadius: "20%" }}
          >
            <img
              className="mix-blend-multiply"
              src="/ktg_logo.JPG"
              alt="avatar"
            />
          </div>

          <h2 className="text-3xl font-semibold ">Register</h2>
        </div>
      </div>
      <div className="grid place-items-center relative loginSize">
        <div className="card mt-20 w-full max-w-xl p-4 sm:p-5 shadow-xl absolute registerBox ">
          {err.exists === "true" && (
            <small className="text-error">
              user already exists or email already registered to a user
            </small>
          )}

          <div className="grid grid-cols-2 gap-4 my-2">
            <label className="block">
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
            <label className="block">
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

          <div className="space-y-4">
            <label className="block">
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
            <label className="block">
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

            <label className="block">
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
                <Link href="/auth/signIn">Sign in</Link>
              </span>
            </p>
          </div>
          <div
            className="absolute w-80 h-20 registerButton shadow-xl grid place-items-center text-base font-semibold "
            onClick={validateRegister}
          >
            {loadingstate === false ? (
              "Register"
            ) : (
              <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-success border-r-transparent"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
