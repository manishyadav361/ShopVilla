import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js";
import productsRoutes from "./Routes/Products.js";
import cartRoutes from "./Routes/Carts.js";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

export const unlink = (image) => {
  fs.unlink(path.resolve("../client/public/uploads") + `/${image}`, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use(
  "/public/uploads",
  express.static(path.resolve("../client") + "/public/uploads")
);
app.use("/auth", authRoutes);
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);

// fs.unlink()

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db ");
    app.listen(PORT, () => {
      console.log("server started at port 5000");
    });
  })
  .catch((err) => console.log(err));
