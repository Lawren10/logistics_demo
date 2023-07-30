"use client";
import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { usePathname } from "next/navigation";

const regex = /(\/admin\/.*)/;

const AdminNav = () => {
  const p = usePathname();

  const showAdminNAv = (path) => {
    return regex.test(path);
  };

  return (
    <>
      {!showAdminNAv(p) ? "" : <Sidebar />}
      {!showAdminNAv(p) ? "" : <TopNav />}
    </>
  );
};

export default AdminNav;
