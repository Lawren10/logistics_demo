import React, { useEffect, useState } from "react";
import { GlobalShipmentContext } from "../context/ShipmentContext";
import Loader from "../Loader";
import axios from "axios";

const ReciverRecord = ({ next, prev }) => {
  let { reciversDetails, setReciversDetaills } = GlobalShipmentContext();
  let [err, setErr] = useState({});
  let [display, setDisplay] = useState(false);
  let [serverError, setServerError] = useState(false);

  const updateReciversDetails = (e, address) => {
    let name = e.target.name;
    setReciversDetaills((prevState) => {
      if (address === "true") {
        return {
          ...prevState,
          Address: { ...prevState.Address, [name]: e.target.value },
        };
      }
      return { ...prevState, [name]: e.target.value };
    });
  };

  const ValidateInputs = async () => {
    let errorstate = {};

    for (let item in reciversDetails) {
      if (item === "Address") {
        for (let item in reciversDetails.Address) {
          if (reciversDetails.Address[item] === "") {
            errorstate[item] = "true";
          } else {
            delete errorstate[item];
          }
        }
      } else if (reciversDetails[item] === "") {
        errorstate[item] = "true";
      } else {
        delete errorstate[item];
      }
    }

    if (Object.keys(errorstate).length > 0) {
      setErr(errorstate);
      return;
    } else {
      try {
        let response = await axios.post("/api/addReciver", reciversDetails);
        if (response.status === 200) {
          setErr({});
          next();
          return;
        }
      } catch (error) {
        setServerError(true);
      }
    }
  };

  useEffect(() => {
    // console.log("called useEffect");
    setTimeout(() => setDisplay(true), 1000);
  });

  if (!display) {
    return <Loader />;
  }

  return (
    <>
      {/* {setDisplay(false)} */}
      {/* {console.log("recivers detail :", reciversDetails)} */}
      <div class="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <h4 class="text-lg font-medium text-slate-700 dark:text-navy-100">
          Recivers Details
        </h4>
        {Object.keys(err).length > 0 ? (
          <span class="text-tiny+ text-error">
            Kindly fill all empty fields
          </span>
        ) : serverError ? (
          <span class="text-tiny+ text-error">
            Error conecting to server please kindly check your network and try
            again
          </span>
        ) : (
          ""
        )}
      </div>

      <div class="space-y-4 p-4 sm:p-5">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label class="block">
            <span>first name</span>
            <span class="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.firstName === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="first name"
                type="text"
                name="firstName"
                onChange={(e) => updateReciversDetails(e, "false")}
                value={reciversDetails.firstName}
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i class="far fa-user text-base"></i>
              </span>
            </span>
          </label>

          <label class="block">
            <span>last name</span>
            <span class="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.lastName === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="last name"
                type="text"
                name="lastName"
                onChange={(e) => updateReciversDetails(e, "false")}
                value={reciversDetails.lastName}
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i class="far fa-user text-base"></i>
              </span>
            </span>
          </label>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <label class="block sm:col-span-8">
            <span>Email Address</span>
            <div class="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.email === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="Email address"
                type="text"
                name="email"
                onChange={(e) => updateReciversDetails(e, "false")}
                value={reciversDetails.email}
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i class="fa-regular fa-envelope text-base"></i>
              </span>
            </div>
          </label>
          <label class="block sm:col-span-4">
            <span>Phone number</span>
            <div class="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.phone === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="(999) 999 999"
                type="text"
                name="phone"
                onChange={(e) => updateReciversDetails(e, "false")}
                value={reciversDetails.phone}
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i class="fa-solid fa-map-pin text-base"></i>
              </span>
            </div>
          </label>
        </div>

        <p class="text-base font-small text-slate-500 dark:text-navy-100">
          Address
        </p>

        <div class="rounded-lg border border-slate-300 px-3 py-4">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <label class="block sm:col-span-4">
              <span> Apt Number</span>
              <div class="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.aptNo === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder=" Apt Number"
                  type="text"
                  name="aptNo"
                  onChange={(e) => updateReciversDetails(e, "true")}
                  value={reciversDetails.Address.aptNo}
                />
                <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-map-pin text-base"></i>
                </span>
              </div>
            </label>

            <label class="block sm:col-span-8">
              <span>Street</span>
              <div class="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.street === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder="Street"
                  type="text"
                  name="street"
                  onChange={(e) => updateReciversDetails(e, "true")}
                  value={reciversDetails.Address.street}
                />
                <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-regular fa-envelope text-base"></i>
                </span>
              </div>
            </label>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            <label class="block">
              <span>City</span>
              <span class="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.city === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder="Your City/Town"
                  type="text"
                  name="city"
                  onChange={(e) => updateReciversDetails(e, "true")}
                  value={reciversDetails.Address.city}
                />
                <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-city text-base"></i>
                </span>
              </span>
            </label>
            <label class="block">
              <span>State</span>
              <span class="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.state === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="Your State"
                  type="text"
                  name="state"
                  onChange={(e) => updateReciversDetails(e, "true")}
                  value={reciversDetails.Address.state}
                />
                <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i class="fa-solid fa-flag"></i>
                </span>
              </span>
            </label>
          </div>
        </div>

        <div class="flex justify-end space-x-2">
          <button
            onClick={prev}
            class="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span>Prev</span>
          </button>
          <button
            onClick={ValidateInputs}
            class="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReciverRecord;
