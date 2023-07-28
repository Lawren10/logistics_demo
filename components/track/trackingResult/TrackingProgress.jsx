import React from "react";

const TrackingProgress = ({ status }) => {
  return (
    <>
      <div className="grid place-items-center mt-8">
        <ol className="steps line-space steps-tiny " style={{ width: "80%" }}>
          <li className="step before:bg-slate-200 ">
            <div className="step-header rounded-full bg-success text-slate-800 "></div>
            <h3 className="text-xs+ text-slate-600">Proccessing</h3>
          </li>

          <li className="step before:bg-slate-200 dark:before:bg-navy-500">
            <div
              className={`step-header rounded-full ${
                status > 1 ? "bg-success" : "bg-slate-200"
              } text-slate-800`}
            ></div>
            <h3 className="text-xs+ text-slate-600 dark:text-navy-100">
              Shipped
            </h3>
          </li>

          <li className="step before:bg-slate-200 dark:before:bg-navy-500">
            <div
              className={`step-header rounded-full ${
                status > 2 ? "bg-success" : "bg-slate-200"
              } text-slate-800`}
            ></div>
            <h3 className="text-xs+ text-slate-600 dark:text-navy-100">
              Arrivied
            </h3>
          </li>

          <li className="step before:bg-slate-200 dark:before:bg-navy-500">
            <div
              className={`step-header rounded-full ${
                status > 3 && status < 5 ? "bg-success" : "bg-slate-200"
              } text-slate-800`}
            ></div>
            <h3 className="text-xs+ text-slate-600 dark:text-navy-100">
              Delivered
            </h3>
          </li>
        </ol>
      </div>
    </>
  );
};

export default TrackingProgress;
