import CartsModel from "../Models/Carts.js";

export const getCart = async (req, res) => {
  const { userId } = req;

  try {
    if (!userId) return res.status(400).send("Access Denied, Login again !!");

    const cart = await CartsModel.findOne({ userId });

    res.status(200).json({ cart: cart });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

export const createCart = async (req, res) => {
  const { productId, price } = req.body;
  const { userId } = req;
  let cart = await CartsModel.findOne({ userId });
  const existingProduct = cart?.products?.filter((product) => {
    return product?.productId === productId;
  });

  try {
    if (cart) {
      if (existingProduct[0]) {
        cart?.products?.map((product) => {
          if (product?.productId === productId) {
            product.total = product.total + price;
            product.quantity = product.quantity + 1;
          }
        });
      } else {
        cart.products.push({
          productId: productId,
          quantity: 1,
          total: price,
        });
      }
      cart = await cart.save();
      return res.status(200).json({ cart });
    } else {
      const newCart = await CartsModel.create({
        userId,
        products: [
          {
            productId: productId,
            total: price,
            quantity: 1,
          },
        ],
      });
      return res.status(200).json({ newCart });
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateCart = async (req, res) => {
  const { userId } = req;
  const { productId, price } = req.body;
};

export const removeCart = async (req, res) => {
  const { userId } = req;
  const { productId, price } = req.body;
  let cart = await CartsModel.findOne({ userId });

  try {
    if (cart) {
      if (cart?.products) {
        cart.products.map((product) => {
          if (product.productId === productId) {
            product.quantity = product.quantity - 1;
            product.total = product.total - price;
          }
        });
        cart = await cart.save();
        res.status(200).json(cart);
      }
    }
  } catch (error) {
    res.status(500).send("something went wrong!!");
    console.log(error);
  }
};

// try {
//   if (!userId) return res.status(400).send("Access Denied!!");

//   const cart = await CartsModel.create({
//     _id: userId,
//     products: {
//       productId,
//       total: price,
//       quantity: 1,
//     },
//   });
//   res.status(200).json({ cart: cart });
// } catch (error) {
//   res.status(500).send();
//   console.log(error);
// }
