import React, { useState } from "react";
import { Box, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Payment = ({ billingDetails }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const handleCardDetailsChange = (ev) => {
    ev.error ? setCheckoutError(ev.error.message) : setCheckoutError();
  };
  const stripe = useStripe();
  const elements = useElements();

  const onSuccessfulCheckout = () => {
    navigate("/payment/success");
  };

  const { Cart } = useSelector((state) => state);
  const grandTotal = Cart?.cart?.products?.reduce(
    (acc, curr) => acc + curr?.total,
    0
  );

  const pay = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    try {
      const { data: client_secret } = await axios.post(
        "http://localhost:5000/payment",
        {
          amount: grandTotal * 100,
        }
      );
      const cardElement = elements.getElement("card");

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });
      console.log(paymentMethodReq);

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessing(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(client_secret, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessing(false);
        return;
      }
      onSuccessfulCheckout();
    } catch (err) {
      setCheckoutError(err.message);
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: "18px",
      },
      invalid: {
        color: "red",
      },
    },
    hidePostalCode: true,
  };
  console.log(checkoutError);

  return (
    <form
      onSubmit={pay}
      className={classes.cardElement}
      style={{ width: "90%" }}
    >
      <Box className={classes.element}>
        <CardElement
          options={cardElementOptions}
          onChange={handleCardDetailsChange}
        />
      </Box>
      <Button onClick={pay} disabled={processing ? true : false}>
        {processing ? "Processing..." : "Pay"}
      </Button>
      {checkoutError && (
        <Typography color="secondary">{checkoutError}</Typography>
      )}
    </form>
  );
};

export default Payment;
