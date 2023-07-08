import React from "react";
import ShippingItem from "./ShippingItem";
import { GlobalShipmentContext } from "../context/ShipmentContext";

const ShipingItemList = ({ shipItemError }) => {
  const { shipmentList } = GlobalShipmentContext();

  return (
    <>
      {/* {console.log("list :", shipmentList)} */}
      {shipmentList.map((item) => {
        return (
          <ShippingItem
            key={item}
            itemNumber={item}
            shipItemError={shipItemError}
          />
        );
      })}
    </>
  );
};

export default ShipingItemList;
