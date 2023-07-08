import React, { useState, useEffect } from "react";
import Loader from "../Loader";

const ShipmentSummary = ({ next, prev }) => {
  let [display, setDisplay] = useState(false);

  useEffect(() => {
    console.log("called useEffect");
    setTimeout(() => setDisplay(true), 1000);
  });

  if (!display) {
    return <Loader />;
  }

  return (
    <>
      <div class="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <h4 class="text-lg font-medium text-slate-700 dark:text-navy-100">
          Shipment Sumarry
        </h4>
      </div>

      <div class="space-y-4 p-4 sm:p-5">
        <div class="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 class="text-sm font-medium text-slate-700 dark:text-navy-100">
            Customer Detail
          </h6>
          <p>Name: John Doe</p>
          <p>Address: </p>
        </div>

        <div class="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 class="text-sm font-medium text-slate-700 dark:text-navy-100">
            Recivers Detail
          </h6>
          <p>Name: Jane Doe</p>
          <p>Address: </p>
        </div>

        <div class="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 class="text-sm font-medium text-slate-700 dark:text-navy-100">
            Shipping Item Detail
          </h6>
          <div className="mt-3">
            <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
              Items
            </h6>
            <div className="rounded-lg border border-slate-300 px-4 py-3">
              <p>item1 </p>
              <p>item1 </p>
              <p>item1 </p>
            </div>
          </div>

          <div className="mt-3">
            <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
              Items Total Dimensions
            </h6>
            <div className="rounded-lg border border-slate-300 px-4 py-3">
              <p>Total Lenght: </p>
              <p>Total Width: </p>
              <p>Total Height: </p>
              <p>Total Weight: </p>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 class="text-sm font-medium text-slate-700 dark:text-navy-100">
            Delivery Mode
          </h6>
          <p>Home Delivery</p>
        </div>

        <div class="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 class="text-sm font-medium text-slate-700 dark:text-navy-100">
            Shipment & Delivery Date
          </h6>
          <p className="mt-3">Shiping date: mm/dd/yy</p>

          <label class="block mt-3">
            <span>Estimated delivery date</span>
            <span class="relative mt-1.5 flex">
              <input
                class="form-input peer w-3\/12 rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="delivery date"
                type="date"
              />
            </span>
          </label>
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
            onClick={next}
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

export default ShipmentSummary;
