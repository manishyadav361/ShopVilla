import express from "express";
import {
  createCart,
  getCart,
  removeCart,
  removeCartProduct,
  updateCart,
} from "../controllers/Carts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getCart);
router.post("/", auth, createCart);
router.patch("/", auth, removeCart);
router.patch("/remove", auth, removeCartProduct);
export default router;
