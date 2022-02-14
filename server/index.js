import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js";
import productsRoutes from "./Routes/Products.js";
import cartRoutes from "./Routes/Carts.js";
import paymentRoutes from "./Payments.js";
import addressRoutes from "./Routes/Address.js";
import path from "path";
import fs from "fs";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

export const unlink = (image) => {
  let filePath = path.resolve("../client/public/uploads") + `/${image}`;
  fs.access(filePath, (err) => {
    if (err) {
      console.log("cant find file");
      return;
    }
    fs.unlink(filePath, (err) => {
      if (err) {
        return;
      }
    });
  });
};

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(
  "/public/uploads",
  express.static(path.resolve("../client") + "/public/uploads")
);
app.get("/", (req, res) => {
  res.send("welcome to shopvilla's api.");
});
app.use("/auth", authRoutes);
app.use("/products", productsRoutes);
app.use("/cart", cartRoutes);
app.use("/payment", paymentRoutes);
app.use("/address", addressRoutes);

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
