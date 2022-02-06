import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

const OrderItem = ({ product }) => {
  const classes = useStyles();
  return (
    <Box className={classes.order}>
      <Box className={classes.image}>
        <img src="" alt="" />
      </Box>
      <Box className={classes.info}>
        <Typography variant="h6">title</Typography>
        <Typography>Quantity: {product?.quantity}</Typography>
        <Typography>Price: ₹{product?.price}</Typography>
        <Typography>Total: ₹{product?.total}</Typography>
      </Box>
    </Box>
  );
};

export default OrderItem;
