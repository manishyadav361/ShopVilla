import React from "react";
import AdminNavBar from "../../../AdminNavBar/AdminNavBar";
import MobileNav from "../../../AdminNavBar/MobileNav";

function Admin({ user }) {
  return (
    <>
      <AdminNavBar />
      <MobileNav user={user} />
    </>
  );
}

export default Admin;
