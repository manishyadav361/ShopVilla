import express from "express";
import { signIn, signUp, updateUser } from "../controllers/Auth.js";
import { uploadOptions } from "../Multer.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.patch("/:id", uploadOptions.single("image"), updateUser);

export default router;
