import { Box, CircularProgress, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./ProductsStyles";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { getAllProducts } from "../../actions/Products";
import Loader from "../Loader";

function Products() {
  const classes = useStyles();
  const { products, loading } = useSelector((state) => state.Products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  return (
    <Container className={classes.container}>
      {loading && <Loader />}
      <Box className={classes.products}>
        {products?.map((product) => (
          <Product
            key={product?._id}
            title={product?.title}
            price={product?.price}
            rating={product?.rating}
            coverImage={product?.coverImage}
            productId={product?._id}
          />
        ))}
      </Box>
    </Container>
  );
}

export default Products;
