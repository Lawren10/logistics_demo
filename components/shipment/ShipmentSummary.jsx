import React, { useState, useEffect } from "react";
import Loader from "../Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  updateShipment,
  resetShipmentDetails,
} from "@/reduxStore/storeSliceies/shipment";
import { resetReceiversDetails } from "@/reduxStore/storeSliceies/receiver";
import axios from "axios";
import ThankYou from "./ThankYou";
import ShippingError from "./ShippingError";

const ShipmentSummary = ({ prev }) => {
  const customerRecord = useSelector((state) => state.customerRecord);
  const receiverRecord = useSelector((state) => state.receiverRecord);
  const shipmentRecord = useSelector((state) => state.shipmentRecord);
  const { shipmentItem } = shipmentRecord;
  const dispatch = useDispatch();
  let [display, setDisplay] = useState(false);
  let [thankYou, setThankYou] = useState(false);
  let [err, setErr] = useState(false);
  let [trackingNumber, setTrackingNumber] = useState("");

  const getItemsName = () => {
    let itemNames = [];
    for (let item in shipmentItem) {
      itemNames.push(<p key={item}>{shipmentItem[item]["name"]} </p>);
    }

    return itemNames;
  };

  const getTotalLenght = () => {
    let total = 0;
    for (let item in shipmentItem) {
      let num = parseInt(shipmentItem[item]["lenght"]);

      total += num;
    }

    return total;
  };

  const getTotalWidth = () => {
    let total = 0;
    for (let item in shipmentItem) {
      let num = parseInt(shipmentItem[item]["width"]);

      total += num;
    }

    return total;
  };

  const getTotalHeight = () => {
    let total = 0;
    for (let item in shipmentItem) {
      let num = parseInt(shipmentItem[item]["height"]);

      total += num;
    }

    return total;
  };

  const getTotalWeight = () => {
    let total = 0;
    for (let item in shipmentItem) {
      let num = parseInt(shipmentItem[item]["weight"]);

      total += num;
    }

    return total;
  };

  const updateDeliveryDate = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(updateShipment({ name, value }));
  };

  const validate = async () => {
    if (!shipmentRecord.deliveryDate) {
      return;
    }
    setDisplay(false);

    try {
      let shipmentData = {
        ...shipmentRecord,
        customerId: customerRecord.id,
        receiverDetail: {
          name: `${customerRecord.firstName} ${customerRecord.lastName}`,
          phone: customerRecord.phone,
          address: `${customerRecord.Address.aptNo}, ${customerRecord.Address.street}, ${customerRecord.Address.city}, ${customerRecord.Address.state}`,
        },
      };

      let shipmentRes = await axios.post(
        "/api/shipmentRecord/addShipment",
        shipmentData
      );

      setDisplay(true);
      setThankYou(true);
      setTrackingNumber(shipmentRes.data.trackingNum);
      dispatch(resetReceiversDetails());
      dispatch(resetShipmentDetails());

      // console.log(receiverRecord);

      // console.log(shipmentRes.data);
    } catch (error) {
      setDisplay(true);
      setErr(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setDisplay(true), 1000);
  }, []);

  if (!display) {
    return <Loader />;
  }

  if (err) {
    return <ShippingError prev={prev} />;
  }

  if (thankYou) {
    return <ThankYou trackingNumber={trackingNumber} />;
  }

  return (
    <>
      <div className="border-b border-slate-200 p-4 dark:border-navy-500 sm:px-5">
        <h4 className="text-lg font-medium text-slate-700 dark:text-navy-100">
          Shipment Sumarry
        </h4>
      </div>
      <div className="space-y-4 p-4 sm:p-5">
        <div className="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
            Customer Detail
          </h6>
          <p>
            Name: {`${customerRecord.firstName} ${customerRecord.lastName}`}
          </p>
          <p>
            Address:{" "}
            {`${customerRecord.Address.aptNo}, ${customerRecord.Address.street}, ${customerRecord.Address.city}, ${customerRecord.Address.state}`}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
            Recivers Detail
          </h6>
          <p>
            Name: {`${receiverRecord.firstName} ${receiverRecord.lastName}`}
          </p>
          <p>
            Address:{" "}
            {`${receiverRecord.Address.aptNo}, ${receiverRecord.Address.street}, ${receiverRecord.Address.city}, ${receiverRecord.Address.state}`}
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
            Shipping Item Detail
          </h6>
          <div className="mt-3">
            <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
              Items
            </h6>
            <div className="rounded-lg border border-slate-300 px-4 py-3">
              {getItemsName()}
            </div>
          </div>

          <div className="mt-3">
            <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
              Items Total Dimensions
            </h6>
            <div className="rounded-lg border border-slate-300 px-4 py-3">
              <p>Total Lenght: {getTotalLenght()}</p>
              <p>Total Width: {getTotalWidth()}</p>
              <p>Total Height: {getTotalHeight()}</p>
              <p>Total Weight: {getTotalWeight()}</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
            Delivery Mode
          </h6>
          <p>{shipmentRecord.deliveryMode}</p>
        </div>

        <div className="rounded-lg bg-slate-50 px-4 py-2.5">
          <h6 className="text-sm font-medium text-slate-700 dark:text-navy-100">
            Shipment & Delivery Date
          </h6>
          <p className="mt-3">Shiping date: {shipmentRecord.shippingDate}</p>

          <label className="block mt-3">
            <span>Estimated delivery date</span>
            <span className="relative mt-1.5 flex">
              <input
                className="form-input peer w-3\/12 rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="delivery date"
                type="date"
                name="deliveryDate"
                onChange={updateDeliveryDate}
                value={shipmentRecord.deliveryDate}
              />
            </span>
            {shipmentRecord.deliveryDate ? (
              ""
            ) : (
              <span className="text-tiny+ text-error">
                Kindly provide an estimated delivery date.
              </span>
            )}
          </label>
        </div>

        <div className="flex justify-end space-x-2">
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
            <span>Prev</span>
          </button>
          <button
            onClick={validate}
            className="btn space-x-2 bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
          >
            <span>Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ShipmentSummary;
