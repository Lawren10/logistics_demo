import React from "react";
import ShippingItem from "./ShippingItem";
import { useSelector } from "react-redux";

const ShipingItemList = ({ shipItemError }) => {
  const shipmentList = useSelector(
    (state) => state.shipmentRecord.shipmentList
  );

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
