import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./CartStyles";
import { useNavigate } from "react-router-dom";
function CartSummary({ cartProducts }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const totalPrice = cartProducts?.reduce(
    (acc, curr) => (acc += curr?.total),
    0
  );

  return (
    <Box className={classes.cartSummary}>
      <Typography variant="h5" className={classes.head}>
        Your Cart
      </Typography>
      <Box className={classes.totalItems}>
        <Typography variant="h6">Total Items: </Typography>
        <Typography variant="h6">{cartProducts?.length}</Typography>
      </Box>
      <Box className={classes.totalPrice}>
        <Typography variant="h6">Total Price:</Typography>
        <Typography variant="h6">₹ {totalPrice}</Typography>
      </Box>
      <Box className={classes.checkout}>
        <Button
          size="large"
          className={classes.checkBtn}
          onClick={() => navigate("/checkout")}
        >
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default CartSummary;
