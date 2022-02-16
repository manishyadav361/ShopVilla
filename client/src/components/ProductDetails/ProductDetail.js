import {
  Box,
  Container,
  IconButton,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

import useStyles from "./styles";
import RelatedProducts from "./RelatedProducts";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../actions/Products";

function ProductDetail({ product, loading, user }) {
  const [toggle, setToggle] = React.useState(false);
  const state = useSelector((state) => state.Products);
  const [like, setLike] = useState(false);
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();

  const table = [
    { head: "Brand", text: product?.brandName || "N/A" },
    { head: "Category", text: product?.category || "N/A" },
    { head: "Warranty", text: product?.warranty || "N/A" },
  ];

  React.useEffect(() => {
    setToggle(false);
  }, [location]);

  const likeProduct = () => {
    dispatch(likePost(product?._id));
  };

  useEffect(() => {
    const likePresent = product?.like;
    if (likePresent) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [product]);

  return (
    <Container
      className={
        !toggle
          ? `${classes.detailContainer}`
          : `${classes.detailContainer} ${classes.toggle}`
      }
    >
      <Box className={classes.barBox}>
        <Box className={classes.bar} onClick={() => setToggle(!toggle)}></Box>
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
          <Box style={{ display: "flex", alignItems: "center" }}>
            {!like ? (
              <IconButton color="inherit" onClick={likeProduct}>
                <FavoriteBorderIcon />
              </IconButton>
            ) : (
              <IconButton color="inherit" onClick={likeProduct}>
                <FavoriteIcon color={like ? "error" : "inherit"} />
              </IconButton>
            )}
            <Typography variant="h6">{product?.likeCount}</Typography>
          </Box>
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
            {product?.material?.map((m) => {
              if (m) {
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
                <TableCell
                  style={{
                    color: "whitesmoke",
                    background: "rgba(255,255,255,0.02)",
                    borderBottom: "0.5px solid rgba(255,255,255,0.1)",
                  }}
                  align="center"
                  className={classes.tableData}
                >
                  {box.head}
                </TableCell>
                <TableCell
                  style={{
                    color: "whitesmoke",
                    background: "rgba(255,255,255,0.02)",
                    borderBottom: "0.5px solid rgba(255,255,255,0.1)",
                  }}
                  align="center"
                  className={classes.tableData}
                >
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
