import { Box, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProduct } from "../../actions/Products";
import useStyles from "./styles";

function RelatedProduct({ id, price, title, coverImage }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getItem = () => {
    dispatch(getProduct(id));
    navigate(`/products/${id}`);
  };

  return (
    <Box className={classes.relatedProduct}>
      <Box
        style={{ backgroundImage: `url(${coverImage})` }}
        className={classes.relatedImage}
        onClick={getItem}
      ></Box>
      <Box className={classes.relatedTitle}>
        <Typography className={classes.relatedText}>{title}</Typography>
        <Typography className={classes.price}>{`₹ ${price}`}</Typography>
      </Box>
    </Box>
  );
}

export default RelatedProduct;
