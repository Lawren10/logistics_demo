import React, { useContext, createContext, useState } from "react";

const AllShipmentContext = createContext("");

import {
  customerDetail,
  reciversDetail,
  shipmentDetail,
  shipmentItem,
} from "./contextData";

const ShipmentContext = ({ children }) => {
  let [customersDetails, setCustomersDetails] = useState(customerDetail);
  let [reciversDetails, setReciversDetaills] = useState(reciversDetail);
  let [shipmentDetails, setShipmentDetails] = useState(shipmentDetail);
  let [shipmentItems, setShipmentItems] = useState(shipmentItem);
  let [shipmentList, setShipmentList] = useState([]);

  return (
    <>
      <AllShipmentContext.Provider
        value={{
          customersDetails,
          setCustomersDetails,
          reciversDetails,
          setReciversDetaills,
          shipmentDetails,
          setShipmentDetails,
          shipmentItems,
          setShipmentItems,
          shipmentList,
          setShipmentList,
        }}
      >
        {children}
      </AllShipmentContext.Provider>
    </>
  );
};

export const GlobalShipmentContext = () => {
  return useContext(AllShipmentContext);
};

export default ShipmentContext;
