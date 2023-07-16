import React from "react";

const Progress = ({ progressPoint }) => {
  return (
    <>
      <div
        class="col-span-12 grid lg:col-span-4 lg:place-items-start "
        style={{ margin: "0px auto" }}
      >
        <div>
          <ol class="steps is-vertical line-space [--size:2.75rem] [--line:.5rem]">
            <li class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500">
              <div class="step-header mask is-hexagon bg-primary text-white ">
                <i class="fa-solid fa-layer-group text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 1</p>
                <h3 class="text-base font-medium text-primary ">
                  Customers Details
                </h3>
              </div>
            </li>
            <li class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500">
              <div
                className={`step-header mask is-hexagon ${
                  progressPoint > 0
                    ? " bg-primary text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                <i class="fa-solid fa-list text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 2</p>
                <h3
                  className={`text-base font-medium ${
                    progressPoint >= 1 ? "text-primary" : ""
                  } `}
                >
                  Recivers Details
                </h3>
              </div>
            </li>
            <li class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500">
              <div
                className={`step-header mask is-hexagon ${
                  progressPoint >= 2
                    ? " bg-primary text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                <i class="fa-solid fa-truck-fast text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 3</p>
                <h3
                  className={`text-base font-medium ${
                    progressPoint >= 2 ? "text-primary" : ""
                  } `}
                >
                  Shipping Items Details
                </h3>
              </div>
            </li>
            <li class="step space-x-4 before:bg-slate-200 dark:before:bg-navy-500">
              <div
                className={`step-header mask is-hexagon ${
                  progressPoint >= 3
                    ? " bg-primary text-white"
                    : "bg-slate-200 text-slate-500"
                }`}
              >
                <i class="fa-solid fa-check text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 4</p>
                <h3
                  className={`text-base font-medium ${
                    progressPoint >= 3 ? "text-primary" : ""
                  } `}
                >
                  Shipment Sumarry & Confirmation
                </h3>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Progress;
