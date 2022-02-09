import { Box, Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNavBar from "../../../AdminNavBar/AdminNavBar";
import MobileNav from "../../../AdminNavBar/MobileNav";
import useStyles from "./AdminProductsStyles";
import Product from "./Product";
import TableHead from "./TableHead";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../../../actions/Products";
function AdminProducts({ user }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const id = user?.result?._id || user?.result?.googleId;
  const state = useSelector((state) => state.Products?.products);
  const adminProducts = state?.filter((product) => product?.createdBy === id);
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <div className={classes.productsContainer}>
      <AdminNavBar />
      <MobileNav />
      <Box className={classes.right}>
        <Button
          onClick={() => navigate("/admin/product")}
          color="primary"
          startIcon={<AddIcon />}
        >
          Add Product
        </Button>
        <TableHead selectAll={selectAll} setSelectAll={setSelectAll} />
        {adminProducts?.map((product) => (
          <Product
            coverImage={product?.coverImage}
            title={product?.title}
            id={product?._id}
            key={product?._id}
            inStock={product?.inStock}
            price={product?.price}
            selectAll={selectAll}
            setSelectAll={setSelectAll}
          />
        ))}
      </Box>
    </div>
  );
}

export default AdminProducts;
