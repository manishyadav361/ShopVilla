import express from "express";
import {
  deleteProduct,
  getProducts,
  insertProduct,
  updateProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/", getProducts);
router.post("/:id", insertProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
