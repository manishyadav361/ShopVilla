import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  _id: { type: String },
  aptNumber: { type: String },
  aptName: { type: String },
  landmark: { type: String },
  district: { type: String },
  city: { type: String },

  state: { type: String },
  country: { type: String },
  pincode: { type: Number },
});

export default mongoose.model("address", addressSchema);
