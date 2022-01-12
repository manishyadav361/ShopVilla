import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  coverImage: { type: String },
  images: { type: Array },
  colors: { type: String },
  category: { type: String },
  description: { type: String },
  material: { type: String },
  rating: { type: Number },
  keywords: { type: Array },
  brandName: { type: String },
  offerPercentage: { type: Number },
  createdBy: { type: String },
  quantity: { type: Number },
  warranty: { type: Number },
  shipping: { type: Number },
  inStock: { type: Boolean },
  freeShipping: { type: Boolean },
});

export default mongoose.model("Products", ProductsSchema);
