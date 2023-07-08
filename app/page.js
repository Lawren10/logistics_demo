"use client";

import React from "react";
import Main from "./components/shipment/Main";
import ShipmentContext from "./components/context/ShipmentContext";

const Home = () => {
  return (
    <>
      <ShipmentContext>
        <Main />
      </ShipmentContext>
    </>
  );
};

export default Home;
