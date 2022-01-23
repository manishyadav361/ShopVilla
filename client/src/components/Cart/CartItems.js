import { Box, Button, IconButton, Typography } from "@material-ui/core";
import React from "react";
import "react-loading-skeleton/dist/skeleton.css";

import { useDispatch, useSelector } from "react-redux";
import useStyles from "./CartStyles";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AddBoxIcon from "@material-ui/icons/AddBox";
import DeleteIcon from "@material-ui/icons/Delete";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import { createCart, removeCartItem, removeProduct } from "../../actions/Cart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CartSkeleton from "../Skeleton/CartSkeleton";
function CartItems({ id, total, quantity, loading }) {
  const classes = useStyles();
  const [like, setLike] = React.useState(false);
  const { products } = useSelector((state) => state?.Products);
  const cartItem = products?.filter((product) => product?._id === id)?.[0];
  const dispatch = useDispatch();

  const incrementQuantity = () => {
    dispatch(createCart(id, cartItem?.price));
  };
  const decrementQuantity = () => {
    dispatch(removeProduct(id, cartItem?.price));
  };
  const removeItem = () => {
    dispatch(removeCartItem(id));
  };
  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <Box className={classes.cartItem}>
      {loading ? (
        <CartSkeleton />
      ) : (
        <>
          <Box
            className={classes.imageBox}
            style={{ backgroundImage: `url(${cartItem?.coverImage})` }}
          ></Box>
          <Box className={classes.infoBox}>
            <Box className={classes.info1}>
              <Typography className={classes.title}>
                {cartItem?.title}
              </Typography>
              {like ? (
                <IconButton
                  size="small"
                  onClick={toggleLike}
                  className={classes.like}
                >
                  <FavoriteIcon />
                </IconButton>
              ) : (
                <IconButton color="inherit" onClick={toggleLike} size="small">
                  <FavoriteBorderIcon />
                </IconButton>
              )}
            </Box>
            <Box className={classes.info2}>
              <Typography className={classes.total}>₹ {total}</Typography>
              <Box className={classes.quantity}>
                <IconButton
                  onClick={decrementQuantity}
                  className={classes.btn}
                  disabled={quantity > 1 ? false : true}
                  fontSize="small"
                >
                  <IndeterminateCheckBoxIcon />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton className={classes.btn} onClick={incrementQuantity}>
                  <AddBoxIcon />
                </IconButton>
              </Box>
            </Box>
            <Box className={classes.remove}>
              <Button
                variant="contained"
                endIcon={<DeleteIcon />}
                color="secondary"
                onClick={removeItem}
              >
                Remove
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}

export default CartItems;
