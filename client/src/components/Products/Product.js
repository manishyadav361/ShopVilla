import { Box, Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./ProductsStyles";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { createCart } from "../../actions/Cart";
function Product({ productId, rating, coverImage, title, price }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(createCart(productId, price));
  };

  return (
    <Box className={classes.product}>
      <Box
        style={{ backgroundImage: `url(${coverImage})` }}
        className={classes.top}
      >
        <Box>
          <IconButton>
            <StarIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
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
