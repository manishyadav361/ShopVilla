import express from "express";
import { signIn, signUp, updateUser } from "../controllers/Auth.js";
import { uploadSingle } from "../Multer.js";
const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.patch("/:id", uploadSingle, updateUser);

export default router;
