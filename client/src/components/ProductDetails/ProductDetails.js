import useStyles from "./styles";
import { Box, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct, getProductsBySearch } from "../../actions/Products";
import ProductDetail from "./ProductDetail";
import RelatedProducts from "./RelatedProducts";

function ProductDetails() {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, loading, searchProducts } = useSelector(
    (state) => state.Products
  );
  const relatedSearch = product?.keywords?.join(" ") + " " + product?.brandName;

  useEffect(() => {
    if (params?.id) {
      dispatch(getProduct(params?.id));
    }
  }, [dispatch]);
  useEffect(() => {
    if (relatedSearch) {
      dispatch(getProductsBySearch(relatedSearch));
    }
  }, [dispatch, relatedSearch]);

  return (
    <Container className={classes.container}>
      {loading ? (
        "loading..."
      ) : (
        <>
          <Box
            className={`${classes.imageBox}`}
            style={{
              backgroundImage: `url(${product?.coverImage})`,
            }}
          ></Box>
          <ProductDetail product={product} />
        </>
      )}
    </Container>
  );
}

export default ProductDetails;
