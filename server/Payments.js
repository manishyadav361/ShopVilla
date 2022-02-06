import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = Stripe(
  "sk_test_51IqyAmSJjNSYuktQ42ghCvMn9e6rru3Z4ZDuR53dD3QvPRC77HN4k99GfhxKQPINOc9qd7mOmUbVq2teybaGlDg800T9CRxgaY"
);
const domain = "http://localhost:3000";

router.post("/", async (req, res) => {
  try {
    const { amount } = req.body;

    const intent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
    });
    res.status(200).send(intent.client_secret);
  } catch (error) {
    console.log(error);
  }
});

export default router;
