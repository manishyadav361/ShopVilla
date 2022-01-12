import express from "express";
import {
  deleteProduct,
  getProducts,
  insertProduct,
  updateProduct,
} from "../controllers/Products.js";

const router = express.Router();

router.get("/:id", getProducts);
router.post("/:id", insertProduct);
router.delete("/:productId", deleteProduct);
router.patch("/:productId", updateProduct);

export default router;
