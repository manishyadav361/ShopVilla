import express from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  getProductsBySearch,
  insertProduct,
  updateProduct,
} from "../controllers/Products.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getProducts);
router.get("/:id", auth, getProduct);
router.get("/search", auth, getProductsBySearch);
router.post("/:id", auth, insertProduct);
router.delete("/:id", auth, deleteProduct);
router.patch("/:id", auth, updateProduct);

export default router;
