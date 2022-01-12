import { Container } from "@material-ui/core";
import React from "react";
import useStyles from "./ProductsStyles";

function Products() {
  const classes = useStyles();

  return <Container className={classes.container}>container</Container>;
}

export default Products;
