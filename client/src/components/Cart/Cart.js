import { Box, Container } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./CartStyles";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import { getAllProducts } from "../../actions/Products";

function Cart() {
  const classes = useStyles();

  const state = useSelector((state) => state);
  const cartProducts = state?.Cart?.cart?.products;
  const { loading } = useSelector((state) => state?.Products);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllProducts());
  // }, [dispatch]);

  return (
    <Container className={classes.container}>
      <Box className={classes.cart}>
        {cartProducts?.map((product) => (
          <CartItems
            key={product?.productId}
            id={product?.productId}
            total={product?.total}
            quantity={product?.quantity}
            loading={loading}
          />
        ))}
      </Box>
      <CartSummary cartProducts={cartProducts} />
    </Container>
  );
}

export default Cart;
