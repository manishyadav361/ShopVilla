import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import Loader from "../Loader";
import useStyles from "./styles";

const OrderItem = ({ product, products }) => {
  const classes = useStyles();
  const orderItem = products?.filter(
    (item) => item?._id === product?.productId
  )?.[0];

  return (
    <Box className={classes.order}>
      <Box className={classes.image}>
        <img className={classes.imageSrc} src={orderItem?.coverImage} alt="" />
      </Box>
      <Box className={classes.info}>
        <Typography variant="h6">{orderItem?.title}</Typography>
        <Typography>Quantity: {product?.quantity}</Typography>
        <Typography>Price: ₹{product?.price}</Typography>
        <Typography>Total: ₹{product?.total}</Typography>
      </Box>
    </Box>
  );
};

export default OrderItem;
