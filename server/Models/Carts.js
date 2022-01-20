import mongoose from "mongoose";

const CartSchema = mongoose.Schema({
  userId: { type: String },
  products: [
    {
      quantity: { type: Number },
      total: { type: Number },
      productId: { type: String },
    },
  ],
});

export default mongoose.model("Carts", CartSchema);
