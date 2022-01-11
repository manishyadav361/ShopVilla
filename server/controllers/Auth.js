import UserModel from "../Models/Auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const secret = "test";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const oldUser = await UserModel.findOne({ email });

    if (!oldUser) return res.status(404).send("user does not exists!");

    const check = await bcrypt.compare(password, oldUser.password);

    if (!check) return res.status(400).send("Incorrect password!");

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (error) {
    res.status(500).json({ error: { message: "Something went wrong!" } });
  }
};

export const signUp = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) return res.status(400).send("User already exists!");
    if (password !== confirmPassword)
      return res.status(400).send("password does not match");
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModel.create({
      email,
      username,
      password: hashedPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "10s",
    });
    res.status(200).json({ result, token });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong");
  }
};

export const updateUser = async (req, res) => {
  const { username, imageUrl } = req.body;
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("cannot find user ");
    const result = await UserModel.findByIdAndUpdate(
      id,
      { username, imageUrl, _id: id },
      { new: true }
    );
    const token = jwt.sign({ email: result?.email, id: result?._id }, secret, {
      expiresIn: "1h",
    });
    res.status(200).json({ result: result, token });
  } catch (error) {
    res.status(500).send("something went wrong");
  }
};
