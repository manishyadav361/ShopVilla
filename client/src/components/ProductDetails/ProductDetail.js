import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import useStyles from "./styles";

function ProductDetail({ product }) {
  const classes = useStyles();

  return (
    <Container className={classes.detailContainer}>
      <Box className={classes.barBox}>
        <Box className={classes.bar}></Box>
      </Box>
      <Box className={classes.title}>
        <Typography className={classes.name} variant="h5">
          Title
        </Typography>
        <Box className={classes.title1}>
          <Typography variant="h6">
            {product?.title}{" "}
            {product?.quantity && `(only ${product?.quantity} left)`}
          </Typography>
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Box>
      <Box className={classes.title}>
        <Typography className={classes.name} variant="h5" color="inherit">
          Price
        </Typography>
        <Typography variant="h6" color="inherit">
          {`₹ ${product?.price} ${
            product?.freeShipping
              ? "(Free Shipping)"
              : `Shipping Charges (${product?.shipping})`
          }`}
        </Typography>
      </Box>
      <Box className={classes.title}>
        <Typography className={classes.name} variant="h5" color="inherit">
          Specification
        </Typography>
        <Box>
          <Typography>{product?.description}</Typography>
        </Box>
      </Box>

      <Box className={classes.title}>
        {product?.material ? (
          <>
            <Typography className={classes.name} variant="h5" color="inherit">
              Material
            </Typography>
            {product?.material.map((m) => (
              <li>{m}</li>
            ))}
          </>
        ) : (
          <Typography className={classes.name} variant="h6" color="inherit">
            None
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default ProductDetail;
