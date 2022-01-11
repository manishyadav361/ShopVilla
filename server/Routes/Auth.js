import express from "express";
import { signIn, signUp, updateUser } from "../controllers/Auth.js";

const router = express.Router();

router.post("/signin", signIn);
router.post("/signup", signUp);
router.patch("/:id", updateUser);

export default router;
