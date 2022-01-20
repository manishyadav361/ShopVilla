import express from "express";
import {
  createCart,
  getCart,
  removeCart,
  updateCart,
} from "../controllers/Carts.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getCart);
router.post("/", auth, createCart);
router.patch("/", auth, removeCart);
export default router;
