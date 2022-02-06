import express from "express";
import {
  addAddress,
  getAddress,
  updateAddress,
} from "../controllers/Address.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getAddress);
router.post("/", auth, addAddress);
router.patch("/", auth, updateAddress);

export default router;
