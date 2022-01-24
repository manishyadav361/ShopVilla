import { Box, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../actions/Products";
import ProductDetail from "./ProductDetail";
import useStyles from "./styles";

function ProductDetails() {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.Products);

  // useEffect(() => {
  //   if (params?.id) {
  //     dispatch(getProduct(params?.id));
  //   }
  // }, [dispatch]);

  return (
    <Container className={classes.container}>
      {loading ? (
        "loading..."
      ) : (
        <>
          <Box
            className={classes.imageBox}
            style={{ backgroundImage: `url(${product?.coverImage})` }}
          ></Box>
          <ProductDetail product={product} />
        </>
      )}
    </Container>
  );
}

export default ProductDetails;
