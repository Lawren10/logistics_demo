import React from "react";
import { GlobalShipmentContext } from "../context/ShipmentContext";

const ShippingItem = ({ itemNumber, shipmentList, setShipmentList }) => {
  const { shipmentItems, setShipmentItems } = GlobalShipmentContext();
  let itemName = `item${itemNumber}`;

  const removeShipmentItem = () => {
    let newList = [...shipmentList];
    let itemIndex = newList.indexOf(itemNumber);
    newList.splice(itemIndex, 1);
    setShipmentList(newList);
  };

  const updateShipmentItems = (e) => {
    let name = e.target.name;

    setShipmentItems((prevState) => {
      return {
        ...prevState,
        [itemName]: { ...prevState.itemName, [name]: e.target.value },
      };
    });
  };

  return (
    <>
      {console.log("item details :", shipmentItems)}
      <div
        class="rounded-lg border border-slate-300 px-3 py-4"
        style={{ position: "relative" }}
      >
        <label class="block">
          <span>Item name</span>
          <span class="relative mt-1.5 flex">
            <input
              class="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
              placeholder="Item name"
              type="text"
              onChange={updateShipmentItems}
              name="name"
              value={
                shipmentItems.itemName["name"]
                  ? shipmentItems.itemName["name"]
                  : ""
              }
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
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Width"
                type="text"
                onChange={updateShipmentItems}
                name="width"
                value={shipmentItems.itemName.width}
              />
            </label>

            <label class="block">
              <span>Height</span>
              <input
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Height"
                type="text"
                onChange={updateShipmentItems}
                name="height"
                value={shipmentItems.itemName.height}
              />
            </label>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <label class="block">
              <span>Lenght</span>
              <input
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Lenght"
                type="text"
                onChange={updateShipmentItems}
                name="lenght"
                value={shipmentItems.itemName.lenght}
              />
            </label>

            <label class="block">
              <span>Weight</span>
              <input
                class="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                placeholder="Weigh"
                type="text"
                onChange={updateShipmentItems}
                name="weight"
                value={shipmentItems.itemName.weight}
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
