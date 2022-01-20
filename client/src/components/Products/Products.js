import { Box, Container } from "@material-ui/core";
import React from "react";
import useStyles from "./ProductsStyles";
import { useSelector } from "react-redux";
import Product from "./Product";

function Products() {
  const classes = useStyles();
  const state = useSelector((state) => state.Products?.products);

  return (
    <Container className={classes.container}>
      <Box className={classes.products}>
        {state?.map((product) => (
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
