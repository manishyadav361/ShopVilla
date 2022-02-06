import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
  userId: { type: String },
  products: [
    {
      quantity: { type: Number },
      total: { type: Number },
      productId: { type: String },
      price: { type: Number },
    },
  ],
});

export default mongoose.model("Carts", CartSchema);
