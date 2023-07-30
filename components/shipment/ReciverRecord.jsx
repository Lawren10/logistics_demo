import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReceiverDetails } from "@/reduxStore/storeSliceies/receiver";
import Loader from "../Loader";

const ReciverRecord = ({ next, prev }) => {
  const receiverRecord = useSelector((state) => state.receiverRecord);
  const dispatch = useDispatch();
  let [err, setErr] = useState({});
  let [display, setDisplay] = useState(false);

  const updateReciver = (e, status) => {
    dispatch(
      updateReceiverDetails({
        name: e.target.name,
        Address: status,
        value: e.target.value,
      })
    );
  };

  const ValidateInputs = () => {
    let errorstate = {};

    for (let item in receiverRecord) {
      if (item === "Address") {
        for (let item in receiverRecord.Address) {
          if (receiverRecord.Address[item] === "") {
            errorstate[item] = "true";
          } else {
            delete errorstate[item];
          }
        }
      } else if (receiverRecord[item] === "") {
        errorstate[item] = "true";
      } else {
        delete errorstate[item];
      }
    }

    if (Object.keys(errorstate).length > 0) {
      setErr(errorstate);
      return;
    } else {
      setErr({});
      next();
    }
  };

  useEffect(() => {
    setTimeout(() => setDisplay(true), 1000);
  });

  if (!display) {
    return <Loader />;
  }

  return (
    <>
      {/* {setDisplay(false)} */}
      {/* {console.log("recivers detail :", reciversDetails)} */}
      <div className="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <h4 className="text-lg font-medium text-slate-700 dark:text-navy-100">
          Recivers Details
        </h4>
        {Object.keys(err).length > 0 ? (
          <span className="text-tiny+ text-error">
            Kindly fill all empty fields
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label className="block">
            <span>first name</span>
            <span className="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.firstName === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="first name"
                type="text"
                name="firstName"
                onChange={(e) => updateReciver(e, false)}
                value={receiverRecord.firstName}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i className="far fa-user text-base"></i>
              </span>
            </span>
          </label>

          <label className="block">
            <span>last name</span>
            <span className="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.lastName === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="last name"
                type="text"
                name="lastName"
                onChange={(e) => updateReciver(e, false)}
                value={receiverRecord.lastName}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i className="far fa-user text-base"></i>
              </span>
            </span>
          </label>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
          <label className="block sm:col-span-8">
            <span>Email Address</span>
            <div className="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.email === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="Email address"
                type="text"
                name="email"
                onChange={(e) => updateReciver(e, false)}
                value={receiverRecord.email}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i className="fa-regular fa-envelope text-base"></i>
              </span>
            </div>
          </label>
          <label className="block sm:col-span-4">
            <span>Phone number</span>
            <div className="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-lg border ${
                  err.phone === "true" ? "border-error" : "border-slate-300"
                }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="(999) 999 999"
                type="text"
                name="phone"
                onChange={(e) => updateReciver(e, false)}
                value={receiverRecord.phone}
              />
              <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i className="fa-solid fa-map-pin text-base"></i>
              </span>
            </div>
          </label>
        </div>

        <p className="text-base font-small text-slate-500 dark:text-navy-100">
          Address
        </p>

        <div className="rounded-lg border border-slate-300 px-3 py-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
            <label className="block sm:col-span-4">
              <span> Apt Number</span>
              <div className="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.aptNo === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder=" Apt Number"
                  type="text"
                  name="aptNo"
                  onChange={(e) => updateReciver(e, true)}
                  value={receiverRecord.Address.aptNo}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-solid fa-map-pin text-base"></i>
                </span>
              </div>
            </label>

            <label className="block sm:col-span-8">
              <span>Street</span>
              <div className="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.street === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder="Street"
                  type="text"
                  name="street"
                  onChange={(e) => updateReciver(e, true)}
                  value={receiverRecord.Address.street}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-regular fa-envelope text-base"></i>
                </span>
              </div>
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
            <label className="block">
              <span>City</span>
              <span className="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.city === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder="Your City/Town"
                  type="text"
                  name="city"
                  onChange={(e) => updateReciver(e, true)}
                  value={receiverRecord.Address.city}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-solid fa-city text-base"></i>
                </span>
              </span>
            </label>
            <label className="block">
              <span>State</span>
              <span className="relative mt-1.5 flex">
                <input
                  className={`form-input peer w-full rounded-lg border ${
                    err.state === "true" ? "border-error" : "border-slate-300"
                  }   bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                  placeholder="Your State"
                  type="text"
                  name="state"
                  onChange={(e) => updateReciver(e, true)}
                  value={receiverRecord.Address.state}
                />
                <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                  <i className="fa-solid fa-flag"></i>
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={prev}
            className="btn space-x-2 bg-slate-150 font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Prev</span>
          </button>
          <button
            onClick={ValidateInputs}
            className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReciverRecord;
