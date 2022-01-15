import { Box } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavBar from "../../../AdminNavBar/AdminNavBar";
import MobileNav from "../../../AdminNavBar/MobileNav";
import useStyles from "./AdminProductsStyles";
import Product from "./Product";
import TableHead from "./TableHead";
function AdminProducts({ user }) {
  const classes = useStyles();

  const id = user?.result?._id || user?.result?.googleId;
  const state = useSelector((state) => state);
  const adminProducts = state?.Products?.products?.filter(
    (product) => product?.createdBy === id
  );

  return (
    <div className={classes.productsContainer}>
      <AdminNavBar />
      <MobileNav />
      <Box className={classes.right}>
        <TableHead />
        {adminProducts?.map((product) => (
          <Product
            coverImage={product?.coverImage}
            title={product?.title}
            id={product?._id}
            key={product?._id}
            inStock={product?.inStock}
            price={product?.price}
          />
        ))}
      </Box>
    </div>
  );
}

export default AdminProducts;
