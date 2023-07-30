import React from "react";

const ShippingError = ({ prev }) => {
  return (
    <>
      <div className="col-span-12 grid place-items-center w-full h-full">
        <h2 className="text-lg font-medium text-error  lg:text-lg p-4 text-center">
          Unable to proccess shipping request, either there is an error in the
          database connection or the shipping record already exists.
        </h2>
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
          <span>Back</span>
        </button>
      </div>
    </>
  );
};

export default ShippingError;
