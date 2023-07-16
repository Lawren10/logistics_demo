import React from "react";
import TrackingProgress from "./TrackingProgress";

const TrackingResult = () => {
  return (
    <>
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-light text-success ">Order Placed</h1>
        <h2 className="text-2xl font-light ">Saturday 12/07/2023 at 11:55pm</h2>
      </div>

      <TrackingProgress />

      <div className="grid place-items-center mt-8 w-full">
        <div
          className="flex justify-between items-center"
          style={{ width: "50%" }}
        >
          <div>
            <h5 class="text-sm font-semibold">FROM</h5>
            <h5 class="text-base font-light">Chicago Illinios</h5>
          </div>

          <div>
            <h5 class="text-sm font-semibold">TO</h5>
            <h5 class="text-base font-light">Apapa Lagos</h5>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h4 className="text-sm font-semibold">
          Tracking Number :{" "}
          <span className="text-sm font-light">#000 000 000</span>
        </h4>
      </div>

      <div className="grid place-items-center mt-8 w-full">
        <div className="flex mt-8" style={{ width: "70%" }}>
          <div style={{ width: "30%" }}>
            <h6 className="text-base font-semibold">
              Batch Number:{" "}
              <span className="text-base font-light">#000 000 000</span>
            </h6>
          </div>
          <div style={{ width: "70%" }}>
            <div class="card rounded-2xl px-4 py-4 sm:px-5">
              <div>
                <h2 class="text-base font-medium tracking-wide text-slate-600 line-clamp-1 ">
                  Parcel information
                </h2>
              </div>

              <div class="pt-4">
                <div className="">
                  <h6 className="text-sm font-small text-slate-700 ">Name</h6>
                  <div className="flex rounded-lg border border-slate-300 px-4 py-3 gap-2">
                    <p>item 1 </p>
                    <p>item 1 </p>
                    <p>item 1 </p>
                  </div>
                </div>

                <div className="">
                  <h6 className="text-sm font-small text-slate-700 ">
                    Total Dimensions
                  </h6>
                  <div className="flex rounded-lg border border-slate-300 px-4 py-3 gap-2">
                    <div>
                      <h6 class="text-sm  font-light">Total Lenght</h6>
                      <h6 class="text-sm font-semibold text-center">00</h6>
                    </div>
                    <div>
                      <h6 class="text-sm  font-light">Total Width</h6>
                      <h6 class="text-sm font-semibold text-center">00</h6>
                    </div>
                    <div>
                      <h6 class="text-sm  font-light">Total Height</h6>
                      <h6 class="text-sm font-semibold text-center">00</h6>
                    </div>
                    <div>
                      <h6 class="text-sm  font-light">Total Weight</h6>
                      <h6 class="text-sm font-semibold text-center">00</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingResult;
