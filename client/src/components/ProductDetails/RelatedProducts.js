import { Box } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import RelatedProduct from "./RelatedProduct";
import useStyles from "./styles";

function RelatedProducts() {
  const { searchProducts } = useSelector((state) => state.Products);
  const classes = useStyles();
  console.log(searchProducts);

  return (
    <Box className={classes.relatedProducts}>
      {searchProducts?.map((product) => (
        <RelatedProduct
          key={product?._id}
          price={product?.price}
          title={product?.title}
          coverImage={product?.coverImage}
          id={product?._id}
        />
      ))}
    </Box>
  );
}

export default RelatedProducts;
