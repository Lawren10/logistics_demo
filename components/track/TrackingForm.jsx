import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTrackingDetail,
  updateNumber,
} from "@/reduxStore/storeSliceies/trackingSlice";

const TrackingForm = () => {
  const tracking = useSelector((state) => state.trackingDetails);

  const { trackingNumberError, trackingNumber } = tracking;

  const dispatch = useDispatch();

  const setNumber = (e) => {
    dispatch(updateNumber({ name: e.target.name, value: e.target.value }));
  };
  const getDetail = () => {
    dispatch(getTrackingDetail(trackingNumber));
    // console.log(trackingNum);
  };
  return (
    <>
      <div className="grid place-items-center">
        <div className="card mt-20 w-full max-w-xl p-4 sm:p-5">
          <div className="relative mx-auto -mt-20 h-40 w-72 rounded-lg text-white shadow-xl transition-transform hover:scale-110 lg:h-48 lg:w-80">
            <div className=" creditCardUI h-full w-full rounded-lg bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-4 sm:p-5">
              <div className="flex justify-center">
                <img src="/parcel.png" alt="parcel" style={{ width: "50%" }} />
              </div>
              <div className="">
                <p className="text-xs+ font-light">Shipment Tracking</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <label className="block">
              <span>Tracking Number/Id</span>
              <input
                className="form-input h-12 mt-1.5 w-full rounded-lg bg-slate-150 px-3 py-2 ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90"
                type="text"
                name={"trackingNumber"}
                onChange={setNumber}
                value={trackingNumber}
              />
            </label>
            {trackingNumberError && (
              <small className="text-error">
                Sorry no shipment related to this tracking number
              </small>
            )}
          </div>

          <div className="flex justify-center space-x-2 pt-4">
            <button
              className="btn h-11 space-x-2 bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90"
              onClick={getDetail}
            >
              <span>Track</span>
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingForm;
