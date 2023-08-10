import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCustomer } from "@/reduxStore/storeSliceies/customersList";
import Loader from "../Loader";

const CustomersList = () => {
  const allCustomers = useSelector((state) => state.customerList);
  const { customerList, loading } = allCustomers;
  const dispatch = useDispatch();

  useEffect(() => {
    if (customerList.length > 0) {
      return;
    }
    dispatch(getAllCustomer());
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (customerList === "server error") {
    return (
      <div
        style={{
          width: "100%",
          height: "90%",
          display: "grid",
          placeContent: "center",
          position: "absolute",
        }}
      >
        <h1 className="text-3xl font-semibold mt-4 text-info">
          Unable to connect with the database.
        </h1>
      </div>
    );
  }

  if (customerList.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          height: "90%",
          display: "grid",
          placeContent: "center",
          position: "absolute",
        }}
      >
        <h1 className="text-3xl font-semibold mt-4 text-info ">
          Nothing to display
        </h1>
      </div>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-semibold mt-4 text-info">Customers</h1>

      <div className="card mt-12">
        <div className="is-scrollbar-hidden min-w-full overflow-x-auto">
          <table className="is-hoverable w-full text-left">
            <thead>
              <tr>
                <th className="whitespace-nowrap rounded-tl-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  #
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  First Name
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Last Name
                </th>

                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Email
                </th>
                <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Phone Number
                </th>
                <th className="whitespace-nowrap rounded-tr-lg bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Address
                </th>
              </tr>
            </thead>

            <tbody>
              {customerList &&
                customerList.map((item, index) => {
                  return (
                    <tr
                      className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                      key={item.id}
                    >
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 font-medium text-slate-700 dark:text-navy-100 sm:px-5">
                        {item.firstName}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {" "}
                        {item.lastName}
                      </td>

                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.phone}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.address}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5">
          <div
            role="status"
            aria-live="polite"
            className="gridjs-summary"
            title="Page 1 of 2"
          >
            Showing <b>1</b> to <b>10</b> of <b>15</b> results
          </div>
          <div className="gridjs-pages " style={{ alignItems: "center" }}>
            <button
              tabIndex="0"
              role="button"
              disabled=""
              title="Previous"
              aria-label="Previous"
              className=""
            >
              Previous
            </button>
            <button
              tabIndex="0"
              role="button"
              className="gridjs-currentPage"
              title="Page 1"
              aria-label="Page 1"
            >
              1
            </button>
            <b>OF</b>
            <button
              tabIndex="0"
              role="button"
              className=""
              title="Page 2"
              aria-label="Page 2"
            >
              2
            </button>
            <button
              tabIndex="0"
              role="button"
              title="Next"
              aria-label="Next"
              className=""
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersList;
