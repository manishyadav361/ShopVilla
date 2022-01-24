import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { getProductsBySearch } from "../../actions/Products";
import Loader from "../Loader";
import Product from "../Products/Product";
import useStyles from "../Products/ProductsStyles";

function SearchProducts() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const classes = useStyles();
  const { searchProducts, loading } = useSelector((state) => state?.Products);
  const query = searchParams?.get("searchString")?.split(" ")?.join("+");

  useEffect(() => {
    if (searchParams.get("searchString")) {
      dispatch(getProductsBySearch(query));
    } else {
      navigate("/products");
    }
  }, [location]);

  return (
    <div>
      <Box className={classes.products}>
        {loading && <Loader />}
        {searchProducts?.map((product) => (
          <Product
            key={product?._id}
            title={product?.title}
            price={product?.price}
            rating={product?.rating}
            coverImage={product?.coverImage}
            productId={product?._id}
          />
        ))}
      </Box>
    </div>
  );
}

export default SearchProducts;
