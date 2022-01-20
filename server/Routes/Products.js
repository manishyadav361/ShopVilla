import express from "express";
import {
  deleteProduct,
  getProducts,
  insertProduct,
  updateProduct,
} from "../controllers/Products.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getProducts);
router.post("/:id", auth, insertProduct);
router.delete("/:id", auth, deleteProduct);
router.patch("/:id", auth, updateProduct);

export default router;
