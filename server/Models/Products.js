import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  coverImage: { type: String },
  images: { type: Array },
  colors: { type: Array },
  category: { type: String },
  description: { type: String },
  material: { type: Array },
  rating: { type: Number },
  keywords: { type: Array },
  brandName: { type: String },
  offerPercentage: { type: Number },
  createdBy: { type: String },
  quantity: { type: Number },
  warranty: { type: String },
  shipping: { type: Number },
  inStock: { type: Boolean },
  freeShipping: { type: Boolean },
});

export default mongoose.model("Products", ProductsSchema);
