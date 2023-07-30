"use client";
import React from "react";
import axios from "axios";

const Reports = () => {
  const sendSms = async () => {
    console.log("sending mail....");
    try {
      let smsRes = await axios.get("/api/sendEmail");
      console.log(smsRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-semibold mt-4 text-info">Reports</h1>
      <div className="flex justify-center space-x-2 pt-4">
        {/* <button
          className="btn h-11 space-x-2 bg-primary font-medium text-white hover:bg-primary-focus hover:shadow-lg hover:shadow-primary/50 focus:bg-primary-focus focus:shadow-lg focus:shadow-primary/50 active:bg-primary-focus/90"
          onClick={() => sendSms()}
        >
          <span>send sms</span>
          <i class="fa-solid fa-paper-plane"></i>
        </button> */}
      </div>
    </>
  );
};

export default Reports;
