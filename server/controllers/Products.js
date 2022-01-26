import ProductsModel from "../Models/Products.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  if (!req.userId) {
    return res.status(400).send("Access Denied !!");
  }
  try {
    const products = await ProductsModel.find({});
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).send("something went wrong !");
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductsModel.findById(id);
    res.status(200).json({ product: product });
  } catch (error) {
    console.log(error);
    res.status(500).send("something went wrong!!");
  }
};

export const getProductsBySearch = async (req, res) => {
  const { searchString } = req.query;
  const { relatedSearch } = req.body;

  const searchArray = searchString.split(" ") || relatedSearch.split(" ");
  const title = new RegExp(searchString || relatedSearch, "i");
  try {
    const products = await ProductsModel.find({
      $or: [{ title }, { keywords: { $in: searchArray } }, { category: title }],
    });
    res.status(200).json({ products: products });
  } catch (error) {
    res.status(500).send("something went wrong");
    console.log(error);
  }
};

export const insertProduct = async (req, res) => {
  const { data } = req.body;
  const { userId } = req;

  try {
    const product = await ProductsModel.create({ ...data, createdBy: userId });
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

    const product = await ProductsModel.findByIdAndDelete(id);
    res.status(200).json({ product: product });
  } catch (error) {
    res.status(500).send("something went wrong!!");
  }
};

export const updateProduct = async (req, res) => {
  const formData = req.body;
  const { id } = req.params;

  try {
    if (!req.userId) {
      res.status(400).send("Access Denied !!");
    }
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
    console.log(error);
    res.status(500).send("something went wrong!!");
  }
};
