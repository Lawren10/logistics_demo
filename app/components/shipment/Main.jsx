import React from "react";
import Progress from "./Progress";
import CustomerRecord from "./CustomerRecord";
import { useState } from "react";
import ReciverRecord from "./ReciverRecord";
import ShipmentDetail from "./ShipmentDetail";
import ShipmentSummary from "./ShipmentSummary";

const Main = () => {
  let [progressPoint, setProgressPoint] = useState(0);

  const nextContent = () => {
    if (progressPoint === 3) {
      return;
    }
    setProgressPoint((prevState) => {
      return (prevState += 1);
    });
  };

  const prevContent = () => {
    if (progressPoint === 0) {
      return;
    }
    setProgressPoint((prevState) => {
      return (prevState -= 1);
    });
  };

  return (
    <>
      {/* {console.log(progressPoint)} */}
      <h1 className="text-3xl font-semibold mt-4 text-info">
        {" "}
        Place Shipment Order
      </h1>
      <div
        class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 pt-12 pb-4"
        // style={{ border: "1px solid red" }}
      >
        <Progress progressPoint={progressPoint} />

        <div class="col-span-12 grid lg:col-span-7">
          <div class="card">
            {progressPoint === 0 ? (
              <CustomerRecord next={nextContent} prev={prevContent} />
            ) : progressPoint === 1 ? (
              <ReciverRecord next={nextContent} prev={prevContent} />
            ) : progressPoint === 2 ? (
              <ShipmentDetail next={nextContent} prev={prevContent} />
            ) : progressPoint === 3 ? (
              <ShipmentSummary prev={prevContent} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
