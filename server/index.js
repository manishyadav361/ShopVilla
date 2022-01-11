import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/auth", authRoutes);

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
