"use client";
import React, { useState } from "react";
import "@/css/auth.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import {
  updateLoginDetails,
  setLoading,
} from "@/reduxStore/storeSliceies/auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const loginState = useSelector((state) => state.authDetails.login);
  const loadingstate = useSelector((state) => state.authDetails.loading);
  const dispatch = useDispatch();
  let [err, setErr] = useState({});
  const router = useRouter();

  const updateRecord = (e) => {
    dispatch(
      updateLoginDetails({
        name: e.target.name,
        value: e.target.value,
      })
    );
  };

  const validateLogin = async () => {
    dispatch(setLoading(true));
    setErr({});

    let errorstate = {};

    for (let item in loginState) {
      if (loginState[item] === "") {
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
    } else {
      setErr({});
      // console.log("allgood:", loginState);
      let res = await signIn("credentials", { ...loginState, redirect: false });
      // console.log(res);
      if (res.error !== null) {
        setErr({ credentials: "true", email: "true", password: "true" });
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        router.push("/admin/dashboard");
      }
    }
  };
  return (
    <>
      {/* {console.log("loading state:", loadingstate)} */}
      <div className="grid place-items-center"></div>
      <div className="grid place-items-center relative loginSize">
        <div className="card mt-20 w-full max-w-xl p-4 sm:p-5 shadow-xl absolute centerBox ">
          <div
            className="relative mx-auto -mt-20 h-40 w-40 shadow-xl"
            style={{ borderRadius: "40%" }}
          >
            <img
              className="mask is-squircle"
              src="images/avatar/avatar-20.jpg"
              alt="avatar"
            />
          </div>
          <div className="flex justify-center items-center space-x-4 mt-4">
            {/* <img
                  className=" "
                  src="images/app-logo.svg"
                  alt="logo"
                /> */}
            <h2 className="text-3xl font-semibold">User Login</h2>
          </div>
          {err.credentials === "true" && (
            <small className="text-error">Invalid email or password</small>
          )}

          <div className="space-y-4 my-4">
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
                value={loginState.email}
              />
            </label>
            <label className="block">
              <span>Password</span>
              <input
                className={`form-input mt-1.5 w-full h-12 rounded-lg border bg-slate-150 px-3 py-2 ring-primary/50 ${
                  err.password === "true" ? "border-error" : ""
                }  placeholder:text-slate-400 hover:bg-slate-200 focus:ring `}
                placeholder="Password"
                type="password"
                name="password"
                onChange={updateRecord}
                value={loginState.password}
              />
            </label>
          </div>
          <div className="my-4">
            <p>
              Don't have an Account?{" "}
              <span className="text-success">
                <Link href="/auth/register">Register</Link>
              </span>
            </p>
          </div>
        </div>
        <div
          className="absolute w-80 h-20 loginButton shadow-xl grid place-items-center text-base font-semibold "
          onClick={validateLogin}
        >
          {loadingstate === false ? (
            "Sign in"
          ) : (
            <div className="spinner h-7 w-7 animate-spin rounded-full border-[3px] border-success border-r-transparent"></div>
          )}
        </div>
      </div>
    </>
  );
};

export default SignIn;
