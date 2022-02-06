import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Payment from "./Payment";

const stripePromise = loadStripe(
  "pk_test_51IqyAmSJjNSYuktQbv3z4Spbo0Hqh9Fw2tsfji0SAjpc44CaT57NgtrKKZBZ3ZqjfjIALUFbYPyvVxZgcqtIUGMO00XaloTCpL"
);

const Layout = ({ billingDetails }) => {
  return (
    <Elements stripe={stripePromise}>
      <Payment billingDetails={billingDetails} />
    </Elements>
  );
};

export default Layout;
