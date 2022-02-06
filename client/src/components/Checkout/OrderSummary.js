import { Box, Container, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../actions/Cart";
import OrderItem from "./OrderItem";
import Layout from "./Layout";
import Loader from "../Loader";
const OrderSummary = ({ user, transform }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { cart, loading } = useSelector((state) => state.Cart);
  const grandTotal = cart?.products?.reduce(
    (acc, curr) => acc + curr?.total,
    0
  );

  const address = useSelector((state) => state.Address.address);
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const billingDetails = {
    name: user?.username,
    email: user?.email,
    address: {
      line1: address?.aptNumber + " " + address?.aptName + " ",
      state: address?.state,
      city: address?.city,
      postal_code: address?.pincode,
    },
  };
  if (loading) {
    return <Loader />;
  }

  return (
    <Container className={classes.container}>
      <Box className={classes.head}>
        <Typography variant="h6">Order Detail's</Typography>
      </Box>
      <Box className={classes.summary}>
        {cart?.products?.map((product) => (
          <OrderItem key={product?._id} product={product} />
        ))}
      </Box>
      <Typography className={classes.total}>
        Grand Total: ₹{grandTotal}
      </Typography>

      <Layout billingDetails={billingDetails} />
    </Container>
  );
};

export default OrderSummary;
