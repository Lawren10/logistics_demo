import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateShipmentItemRecord,
  deleteShipmentItem,
} from "@/reduxStore/storeSliceies/shipment";

const ShippingItem = ({ itemNumber, shipItemError }) => {
  const shipmentItem = useSelector(
    (state) => state.shipmentRecord.shipmentItem
  );
  const dispatch = useDispatch();
  let itemName = `item${itemNumber}`;
  let errorState = false;

  if (shipItemError[itemName] !== undefined) {
    errorState = true;
  }

  const removeShipmentItem = () => {
    dispatch(deleteShipmentItem({ itemNumber, itemName }));
  };

  const updateShipmentItems = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    dispatch(updateShipmentItemRecord({ name, value, itemName }));
  };

  return (
    <>
      {/* {console.log("item details :", shipmentItems)} */}
      <div
        class="rounded-lg border border-slate-300 px-3 py-4"
        style={{ position: "relative" }}
      >
        <label class="block">
          <span>Item name</span>
          <span class="relative mt-1.5 flex">
            <input
              className={`form-input peer w-full rounded-lg border ${
                !errorState
                  ? "border-slate-300"
                  : shipItemError.empty === "true"
                  ? "border-slate-300"
                  : shipItemError[itemName]["name"] === "true"
                  ? "border-error"
                  : "border-slate-300"
              } bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary `}
              placeholder="Item name"
              type="text"
              onChange={updateShipmentItems}
              name="name"
              value={shipmentItem[itemName]["name"]}
            />
            <span class="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
              <i class="far fa-user text-base"></i>
            </span>
          </span>
        </label>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
          <div class="grid grid-cols-2 gap-4">
            <label class="block">
              <span>Width</span>
              <input
                className={`form-input mt-1.5 w-full rounded-lg border ${
                  !errorState
                    ? "border-slate-300"
                    : shipItemError.empty === "true"
                    ? "border-slate-300"
                    : shipItemError[itemName]["width"] === "true"
                    ? "border-error"
                    : "border-slate-300"
                }  bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary `}
                placeholder="Width"
                type="text"
                onChange={updateShipmentItems}
                name="width"
                value={shipmentItem[itemName]["width"]}
              />
            </label>

            <label class="block">
              <span>Height</span>
              <input
                className={`form-input mt-1.5 w-full rounded-lg border ${
                  !errorState
                    ? "border-slate-300"
                    : shipItemError.empty === "true"
                    ? "border-slate-300"
                    : shipItemError[itemName]["height"] === "true"
                    ? "border-error"
                    : "border-slate-300"
                }  bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary `}
                placeholder="Height"
                type="text"
                onChange={updateShipmentItems}
                name="height"
                value={shipmentItem[itemName]["height"]}
              />
            </label>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <label class="block">
              <span>Lenght</span>
              <input
                className={`form-input mt-1.5 w-full rounded-lg border ${
                  !errorState
                    ? "border-slate-300"
                    : shipItemError.empty === "true"
                    ? "border-slate-300"
                    : shipItemError[itemName]["lenght"] === "true"
                    ? "border-error"
                    : "border-slate-300"
                }  bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary `}
                placeholder="Lenght"
                type="text"
                onChange={updateShipmentItems}
                name="lenght"
                value={shipmentItem[itemName]["lenght"]}
              />
            </label>

            <label class="block">
              <span>Weight</span>
              <input
                className={`form-input mt-1.5 w-full rounded-lg border ${
                  !errorState
                    ? "border-slate-300"
                    : shipItemError.empty === "true"
                    ? "border-slate-300"
                    : shipItemError[itemName]["weight"] === "true"
                    ? "border-error"
                    : "border-slate-300"
                }  bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary `}
                placeholder="Weigh"
                type="text"
                onChange={updateShipmentItems}
                name="weight"
                value={shipmentItem[itemName]["weight"]}
              />
            </label>
          </div>
        </div>
        <button
          class="btn h-5 w-5 rounded-full bg-secondary p-0 font-medium text-white hover:bg-secondary-focus focus:bg-secondary-focus active:bg-secondary-focus/90"
          style={{ position: "absolute", top: "-0.5rem", right: "-0.5rem" }}
          onClick={removeShipmentItem}
        >
          x
        </button>
      </div>
    </>
  );
};

export default ShippingItem;
