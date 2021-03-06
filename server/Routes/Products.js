import express from "express";
import {
  deleteProduct,
  getProduct,
  getProducts,
  getProductsBySearch,
  insertProduct,
  likePost,
  updateProduct,
} from "../controllers/Products.js";
import auth from "../middleware/auth.js";
import { uploadOptions } from "../Multer.js";

const router = express.Router();

router.get("/", auth, getProducts);
router.get("/product/:id", auth, getProduct);

router.get("/search", auth, getProductsBySearch);
router.post("/:id", uploadOptions.single("coverImage"), auth, insertProduct);
router.delete("/:id", auth, deleteProduct);
router.patch("/:id", auth, updateProduct);
router.post("/product/:productId", auth, likePost);

export default router;
