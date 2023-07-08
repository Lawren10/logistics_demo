import React, { useState, useEffect } from "react";
import ShipingItemList from "./ShipingItemList";
import Loader from "../Loader";
import { uuid } from "uuidv4";
import { GlobalShipmentContext } from "../context/ShipmentContext";

const ShipmentDetail = ({ next, prev }) => {
  const {
    shipmentDetails,
    setShipmentDetails,
    setShipmentItems,
    shipmentItems,
    shipmentList,
    setShipmentList,
  } = GlobalShipmentContext();

  let [err, setErr] = useState({});
  let [shipItemErr, setShipItemErr] = useState({});
  let [display, setDisplay] = useState(false);

  const updateShipmentDetails = (e) => {
    let name = e.target.name;
    setShipmentDetails((prevState) => {
      return { ...prevState, [name]: e.target.value };
    });
  };

  const ValidateInputs = () => {
    let errorstate = {};
    let shipItemError = {};
    let isShipItemError = false;
    let isShipmentItemEmpty = false;

    for (let item in shipmentDetails) {
      if (shipmentDetails[item] === "") {
        errorstate[item] = "true";
      } else {
        delete errorstate[item];
      }
    }

    if (Object.keys(shipmentItems).length > 0) {
      for (let key in shipmentItems) {
        shipItemError[key] = {};
        for (let item in shipmentItems[key]) {
          if (shipmentItems[key][item] === "") {
            isShipItemError !== true ? (isShipItemError = true) : "";
            shipItemError[key][item] = "true";
          } else {
            shipItemError[key][item] = "false";
          }
        }
      }
      shipItemError["empty"] = "false";
    } else {
      isShipmentItemEmpty = true;
      shipItemError["empty"] = "true";
    }

    if (
      Object.keys(errorstate).length > 0 ||
      isShipItemError ||
      isShipmentItemEmpty
    ) {
      setErr(errorstate);
      setShipItemErr(shipItemError);
      return;
    } else {
      setErr({});
      setShipItemErr({});
      next();
    }
  };

  const addShipmentItem = () => {
    let num = shipmentList.length;
    num = num + 1;
    let itemslist = {
      name: "",
      width: "",
      height: "",
      lenght: "",
      weight: "",
    };
    let itemSet = `item${num}`;

    setShipmentList((prev) => {
      return [...prev, num];
    });

    setShipmentItems((prevState) => {
      return {
        ...prevState,
        [itemSet]: itemslist,
      };
    });
  };

  const generateBatchNum = () => {
    let id = uuid();
    setShipmentDetails((prevState) => {
      return { ...prevState, batchNumber: id };
    });
  };

  useEffect(() => {
    setTimeout(() => setDisplay(true), 1000);
  });

  if (!display) {
    return <Loader />;
  }

  return (
    <>
      {/* {console.log("error state", err)} */}
      {/* {console.log("ship error", shipItemErr)} */}
      <div class="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <h4 class="text-lg font-medium text-slate-700 dark:text-navy-100">
          Shipment Details
        </h4>
        {Object.keys(err).length > 0 || shipItemErr.empty === "false" ? (
          <span class="text-tiny+ text-error">
            Kindly fill all empty fields
          </span>
        ) : shipItemErr.empty === "true" ? (
          <span class="text-tiny+ text-error">
            please Kindly add items for shipping
          </span>
        ) : (
          ""
        )}
      </div>

      <div class="space-y-4 p-4 sm:p-5">
        <label class="block">
          <span>shipping batch number</span>
          <div class="relative flex -space-x-px mt-1.5">
            <input
              className={`form-input peer w-full rounded-l-lg border ${
                err.batchNumber === "true" ? "border-error" : "border-slate-300"
              } bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
              placeholder="batch number"
              type="text"
              disabled
              value={shipmentDetails.batchNumber}
            />

            <button
              className="btn rounded-l-none bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
              onClick={generateBatchNum}
            >
              Generate
            </button>
          </div>
        </label>

        <p class="text-base font-small text-slate-500 dark:text-navy-100">
          Shipping item/s
        </p>

        <ShipingItemList shipItemError={shipItemErr} />

        <button
          className="btn h-6 rounded bg-primary px-3 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 "
          onClick={addShipmentItem}
        >
          Add Item
        </button>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label class="block">
            <span>shipping date</span>
            <span class="relative mt-1.5 flex">
              <input
                className={`form-input peer w-full rounded-l-lg border ${
                  err.shippingDate === "true"
                    ? "border-error"
                    : "border-slate-300"
                } bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:z-10 hover:border-slate-400 focus:z-10 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent`}
                placeholder="shipping date"
                type="date"
                onChange={updateShipmentDetails}
                name="shippingDate"
                value={shipmentDetails.shippingDate}
              />
              <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                <i class="far fa-user text-base"></i>
              </span>
            </span>
          </label>
          <label class="block">
            <span>delivery mode</span>
            <select
              className={`form-select mt-1.5 w-full rounded-lg border ${
                err.shippingDate === "true"
                  ? "border-error"
                  : "border-slate-300"
              } bg-white px-3 py-2 hover:border-slate-400 focus:border-primary`}
              onChange={updateShipmentDetails}
              name="deliveryMode"
              value={shipmentDetails.deliveryMode}
            >
              <option>home delivery</option>
              <option>office pickup</option>
            </select>
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
            onClick={ValidateInputs}
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

export default ShipmentDetail;
