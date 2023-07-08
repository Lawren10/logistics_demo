import React from "react";

const Progress = () => {
  return (
    <>
      <div class="col-span-12 grid lg:col-span-3 lg:place-items-center">
        <div>
          <ol class="steps is-vertical line-space [--size:2.75rem] [--line:.5rem]">
            <li class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500">
              <div class="step-header mask is-hexagon bg-primary text-white dark:bg-accent">
                <i class="fa-solid fa-layer-group text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 1</p>
                <h3 class="text-base font-medium text-primary dark:text-accent-light">
                  General
                </h3>
              </div>
            </li>
            <li class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500">
              <div class="step-header mask is-hexagon bg-slate-200 text-slate-500 dark:bg-navy-500 dark:text-navy-100">
                <i class="fa-solid fa-list text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 2</p>
                <h3 class="text-base font-medium">Description</h3>
              </div>
            </li>
            <li class="step space-x-4 pb-12 before:bg-slate-200 dark:before:bg-navy-500">
              <div class="step-header mask is-hexagon bg-slate-200 text-slate-500 dark:bg-navy-500 dark:text-navy-100">
                <i class="fa-solid fa-truck-fast text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 3</p>
                <h3 class="text-base font-medium">Shipping</h3>
              </div>
            </li>
            <li class="step space-x-4 before:bg-slate-200 dark:before:bg-navy-500">
              <div class="step-header mask is-hexagon bg-slate-200 text-slate-500 dark:bg-navy-500 dark:text-navy-100">
                <i class="fa-solid fa-check text-base"></i>
              </div>
              <div class="text-left">
                <p class="text-xs text-slate-400 dark:text-navy-300">Step 4</p>
                <h3 class="text-base font-medium">Confirm</h3>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Progress;
