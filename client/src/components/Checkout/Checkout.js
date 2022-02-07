import React, { useState } from "react";
import Address from "./Address";
import OrderSummary from "./OrderSummary";
import useStyles from "./styles";

const Checkout = ({ user }) => {
  const [transform, setTransform] = useState(false);
  const classes = useStyles();

  return (
    <div
      className={
        !transform
          ? `${classes.checkout}`
          : `${classes.checkout} ${classes.transform}`
      }
    >
      <Address setTransform={setTransform} />
      {transform && <OrderSummary user={user} transform={transform} />}
    </div>
  );
};

export default Checkout;
