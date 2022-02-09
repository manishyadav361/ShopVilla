import React, { useEffect } from "react";
import AdminNavBar from "../../../AdminNavBar/AdminNavBar";
import MobileNav from "../../../AdminNavBar/MobileNav";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../../../actions/Products";
import useStyles from "./AdminStyles";
import { Box } from "@material-ui/core";

function Admin({ user }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <Box className={classes.admin}>
      <AdminNavBar />
      <MobileNav user={user} />
    </Box>
  );
}

export default Admin;
