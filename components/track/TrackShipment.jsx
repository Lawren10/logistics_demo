"use client";
import React from "react";
import { useSelector } from "react-redux";
import TrackingForm from "./TrackingForm";
import Loader from "../Loader";
import TrackingResult from "./trackingResult/TrackingResult";

const TrackShipment = () => {
  const trackingDetails = useSelector((state) => state.trackingDetails);
  const { loading, showDetails } = trackingDetails;

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {/* <h1 className="text-3xl font-semibold mt-4 text-info">Track Shipment</h1> */}

      {!showDetails && <TrackingForm />}
      {showDetails && <TrackingResult />}
    </>
  );
};

export default TrackShipment;
