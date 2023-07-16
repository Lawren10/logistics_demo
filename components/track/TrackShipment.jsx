import React, { useState } from "react";
import TrackingForm from "./TrackingForm";
import Loader from "../Loader";
import TrackingResult from "./trackingResult/TrackingResult";

const TrackShipment = () => {
  let [showTrackingDetail, setShowTrackingDetail] = useState(false);
  let [trackingDetail, setTrackingDetail] = useState(false);
  let [loading, setLoading] = useState(false);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mt-4 text-info">Track Shipment</h1>

      {!showTrackingDetail && (
        <TrackingForm
          setLoading={setLoading}
          setShowTrackingDetail={setShowTrackingDetail}
        />
      )}
      {showTrackingDetail && <TrackingResult />}
    </>
  );
};

export default TrackShipment;
