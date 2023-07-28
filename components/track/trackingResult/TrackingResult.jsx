import React from "react";
import TrackingProgress from "./TrackingProgress";
import { useSelector } from "react-redux";

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const TrackingResult = () => {
  const trackingData = useSelector((state) => state.trackingDetails);
  const { trackingDetail } = trackingData;
  const { id, shipingProcess, shipment } = trackingDetail;
  const { customer, receiverDetail, shipmentBatch } = shipment;
  const { items } = shipmentBatch;

  const getShipmentStatus = (process) => {
    if (process === 1) {
      return "processing";
    }
    if (process === 2) {
      return "shipped";
    }
    if (process === 3) {
      return "arrived";
    }
    if (process === 4) {
      return "delivered";
    }
  };

  const getLocation = (address) => {
    let adr = address.split(",");
    return `${adr[2]} ${adr[3]}`;
  };

  const statusDate = (date) => {
    let d = new Date(date);
    let dS = d.toLocaleString("en-GB", { timeZone: "UTC" });
    let time = d.toLocaleTimeString("en-Us");
    let dayWeekIndex = d.getDay();
    let t = time.split(" ")[1];
    let s = time.split(":");
    let timeString = `${parseInt(s[0]) - 1}:${s[1]} ${t}`;
    let DateString = dS.split(",")[0];
    let fullDateTime = `${daysOfTheWeek[dayWeekIndex]} ${DateString} at ${timeString}`;

    return fullDateTime;
  };

  let trackingStatus = getShipmentStatus(shipingProcess);

  const getItemsName = () => {
    let itemNames = [];
    for (let item in items) {
      itemNames.push(<p key={item}>{items[item]["name"]} </p>);
    }

    return itemNames;
  };

  const getTotalLenght = () => {
    let total = 0;
    for (let item in items) {
      let num = parseInt(items[item]["lenght"]);

      total += num;
    }

    return total;
  };

  const getTotalWidth = () => {
    let total = 0;
    for (let item in items) {
      let num = parseInt(items[item]["width"]);

      total += num;
    }

    return total;
  };

  const getTotalHeight = () => {
    let total = 0;
    for (let item in items) {
      let num = parseInt(items[item]["height"]);

      total += num;
    }

    return total;
  };

  const getTotalWeight = () => {
    let total = 0;
    for (let item in items) {
      let num = parseInt(items[item]["weight"]);

      total += num;
    }

    return total;
  };

  return (
    <>
      {/* {console.log(getShipmentStatus(shipingProcess))}
      {console.log(shipingProcess)} */}
      <div className="mt-8 text-center">
        <h1
          className="text-3xl font-light text-success"
          style={{ textTransform: "capitalize" }}
        >
          {trackingStatus}
        </h1>
        <h2 className="text-2xl font-light ">
          {statusDate(trackingDetail[trackingStatus])}
        </h2>
      </div>

      <TrackingProgress status={shipingProcess} />

      <div className="grid place-items-center mt-8 w-full">
        <div
          className="flex justify-between items-center"
          style={{ width: "50%" }}
        >
          <div>
            <h5 class="text-sm font-semibold">FROM</h5>
            <h5 class="text-base font-light">
              {getLocation(customer.address)}
            </h5>
          </div>

          <div>
            <h5 class="text-sm font-semibold">TO</h5>
            <h5 class="text-base font-light">
              {getLocation(receiverDetail.address)}
            </h5>
          </div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <h4 className="text-sm font-semibold">
          Tracking Number : <span className="text-sm font-light">{id}</span>
        </h4>
      </div>

      <div className="grid place-items-center mt-8 w-full">
        <div className="flex mt-8" style={{ width: "70%" }}>
          <div style={{ width: "30%" }}>
            <h6 className="text-base font-semibold">
              Batch Number: <br />
              <span className="text-base font-light">{shipmentBatch.id}</span>
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
                    {getItemsName()}
                  </div>
                </div>

                <div className="">
                  <h6 className="text-sm font-small text-slate-700 ">
                    Total Dimensions
                  </h6>
                  <div className="flex rounded-lg border border-slate-300 px-4 py-3 gap-4">
                    <div>
                      <h6 class="text-sm  font-light">Total Lenght</h6>
                      <h6 class="text-sm font-semibold text-center">
                        {getTotalLenght()}
                      </h6>
                    </div>
                    <div>
                      <h6 class="text-sm  font-light">Total Width</h6>
                      <h6 class="text-sm font-semibold text-center">
                        {getTotalWidth()}
                      </h6>
                    </div>
                    <div>
                      <h6 class="text-sm  font-light">Total Height</h6>
                      <h6 class="text-sm font-semibold text-center">
                        {getTotalHeight()}
                      </h6>
                    </div>
                    <div>
                      <h6 class="text-sm  font-light">Total Weight</h6>
                      <h6 class="text-sm font-semibold text-center">
                        {getTotalWeight()}
                      </h6>
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
