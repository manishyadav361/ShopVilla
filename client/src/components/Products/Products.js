import { Box, Container } from "@material-ui/core";
import React from "react";
import useStyles from "./ProductsStyles";
import { useSelector } from "react-redux";
import Product from "./Product";
import Loader from "../Loader";
import FilterOption from "./FilterOption";

function Products() {
  const classes = useStyles();
  const { products, loading } = useSelector((state) => state.Products);

  return (
    <Container className={classes.container}>
      {loading && <Loader />}
      <FilterOption />
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
