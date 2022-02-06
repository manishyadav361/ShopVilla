import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySearch } from "../../actions/Products";
import RelatedProduct from "./RelatedProduct";
import useStyles from "./styles";
import CartSkeleton from "../Skeleton/CartSkeleton";

function RelatedProducts() {
  const { product, searchProducts, loading } = useSelector(
    (state) => state.Products
  );

  // creating a search pattern string
  const relatedSearch = product?.keywords.join(" ") + " " + product?.brandName;

  const classes = useStyles();
  const dispatch = useDispatch();

  // searches for related products
  useEffect(() => {
    dispatch(getProductsBySearch(relatedSearch));
  }, [dispatch, relatedSearch]);

  return (
    <Box className={classes.relatedProducts}>
      {loading ? (
        <CartSkeleton />
      ) : (
        <>
          {searchProducts?.map((product) => (
            <RelatedProduct
              key={product?._id}
              price={product?.price}
              title={product?.title}
              coverImage={product?.coverImage}
              id={product?._id}
            />
          ))}
        </>
      )}
    </Box>
  );
}

export default RelatedProducts;
