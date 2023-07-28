"use client";
import React from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";
import { usePathname } from "next/navigation";

const AdminNav = () => {
  const p = usePathname();
  return (
    <>
      {p === "/login" ? "" : p === "/register" ? "" : <Sidebar />}
      {p === "/login" ? "" : p === "/register" ? "" : <TopNav />}
    </>
  );
};

export default AdminNav;
