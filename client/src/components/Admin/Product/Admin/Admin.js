import React, { useEffect } from "react";
import AdminNavBar from "../../../AdminNavBar/AdminNavBar";
import MobileNav from "../../../AdminNavBar/MobileNav";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../../actions/Products";
function Admin({ user }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <>
      <AdminNavBar />
      <MobileNav user={user} />
    </>
  );
}

export default Admin;
