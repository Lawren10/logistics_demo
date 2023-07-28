import React from "react";

const ThankYou = ({ trackingNumber }) => {
  return (
    <>
      <div className="col-span-12 grid place-items-center w-full h-full">
        <h2 className="text-xl font-medium text-primary  lg:text-2xl">
          Thank you the shipment will be processed and sent
        </h2>
        <h6 className="text-center text-sm leading-6">
          Here is your tracking number{" "}
          <span className="font-semibold underline decoration-info decoration-double decoration-2">
            {trackingNumber}
          </span>{" "}
          to track your shipment order.
        </h6>
      </div>
    </>
  );
};

export default ThankYou;
