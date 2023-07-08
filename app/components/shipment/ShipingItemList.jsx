import React from "react";
import ShippingItem from "./ShippingItem";

const ShipingItemList = ({ shipmentList, setShipmentList }) => {
  return (
    <>
      {console.log("list :", shipmentList)}
      {shipmentList.map((item) => {
        return (
          <ShippingItem
            key={item}
            itemNumber={item}
            shipmentList={shipmentList}
            setShipmentList={setShipmentList}
          />
        );
      })}
    </>
  );
};

export default ShipingItemList;
