import {
  Box,
  Container,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import useStyles from "./styles";
import RelatedProducts from "./RelatedProducts";

function ProductDetail({ product }) {
  const classes = useStyles();
  const table = [
    { head: "Brand", text: product?.brandName || "N/A" },
    { head: "Category", text: product?.category || "N/A" },
    { head: "Warranty", text: product?.warranty || "N/A" },
  ];

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
          Description
        </Typography>
        <Box>
          <Typography>{product?.description || "None"}</Typography>
        </Box>
      </Box>

      <Box className={classes.title}>
        {product?.material ? (
          <>
            <Typography className={classes.name} variant="h5" color="inherit">
              Material
            </Typography>
            {product?.material.map((m) => {
              if (m !== "") {
                return <li key={product?.material.indexOf(m)}>{m}</li>;
              }
            })}
          </>
        ) : (
          <Typography className={classes.name} variant="h6" color="inherit">
            None
          </Typography>
        )}
      </Box>
      <Box className={classes.title}>
        <Typography className={classes.name} variant="h5" color="inherit">
          Specification's
        </Typography>
        <Table aria-label="simple table" className={classes.table}>
          <TableHead>
            {table.map((box) => (
              <TableRow className={classes.tableRow} key={table.indexOf(box)}>
                <TableCell align="center" className={classes.tableData}>
                  {box.head}
                </TableCell>
                <TableCell align="center" className={classes.tableData}>
                  {box.text}
                </TableCell>
              </TableRow>
            ))}
          </TableHead>
        </Table>
      </Box>
      <Box className={classes.title}>
        <Typography className={classes.name} variant="h5" color="inherit">
          Related Products
        </Typography>
        <RelatedProducts product={product} />
      </Box>
    </Container>
  );
}

export default ProductDetail;
