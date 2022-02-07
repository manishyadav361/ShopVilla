import { Box, Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./ProductsStyles";
import { useDispatch } from "react-redux";
import { createCart } from "../../actions/Cart";
import { useNavigate } from "react-router-dom";
function Product({ productId, rating, coverImage, title, price, number, i }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // add items to cart
  const addToCart = () => {
    dispatch(createCart(productId, price, coverImage, price, title));
  };

  // routing to individual product
  const showProduct = () => {
    navigate(`/products/${productId}`);
  };
  return (
    <Box className={classes.product}>
      <Box
        style={{ backgroundImage: `url(${coverImage})` }}
        className={classes.top}
        onClick={showProduct}
      >
        <IconButton className={classes.index}>{number}</IconButton>
      </Box>
      <Box className={classes.bottom}>
        <Box className={classes.productInfo}>
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.price}>₹ {price}</Typography>
        </Box>
        <Button onClick={addToCart} className={classes.cartBtn}>
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}

export default Product;
