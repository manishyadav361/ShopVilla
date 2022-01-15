import ProductsModel from "../Models/Products.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await ProductsModel.find({});
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).send("something went wrong !");
  }
};

export const insertProduct = async (req, res) => {
  const { data } = req.body;
  const { id } = req.params;

  try {
    const product = await ProductsModel.create({ ...data, createdBy: id });
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).send("something went wrong!!");
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("Cannot find product with id ", productId);

    const product = await ProductsModel.findOneAndDelete({ id });
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).send("something went wrong!!");
  }
};

export const updateProduct = async (req, res) => {
  const formData = req.body;
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("cannot find product with id:", productId);
    const product = await ProductsModel.findByIdAndUpdate(
      id,
      { ...formData, _id: id },
      {
        new: true,
      }
    );
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).send("something went wrong!!");
  }
};