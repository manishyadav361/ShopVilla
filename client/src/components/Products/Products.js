import { Box, Container } from "@material-ui/core";
import React from "react";
import useStyles from "./ProductsStyles";
import { useSelector } from "react-redux";
import Product from "./Product";
import Loader from "../Loader";

function Products() {
  const classes = useStyles();
  const { products, loading } = useSelector((state) => state.Products);

  return (
    <Container className={classes.container}>
      {loading && <Loader />}
      <Box className={classes.products}>
        {products?.map((product, i) => (
          <Product
            number={products.indexOf(product)}
            key={product?._id}
            i={i}
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
