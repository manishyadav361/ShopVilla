import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  imageUrl: { type: String },
  address: {
    apartment: { type: String },
    street: { type: String },
    district: { type: String },
    state: { type: String },
    pincode: { type: Number },
  },
});

export default mongoose.model("User", userSchema);
