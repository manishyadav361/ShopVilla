import useStyles from "./styles";
import { Box, Container, IconButton } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../actions/Products";
import ProductDetail from "./ProductDetail";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Loader from "../Loader";
function ProductDetails({ user }) {
  const classes = useStyles();
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // products state
  const { product, loading } = useSelector((state) => state.Products);

  // searches the requested product whenever the page is refreshed
  useEffect(() => {
    if (params?.id) {
      dispatch(getProduct(params?.id));
    }
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      {loading && <Loader />}
      {product && (
        <>
          <Box
            className={`${classes.imageBox}`}
            style={{
              backgroundImage: `url(${product?.coverImage})`,
            }}
          >
            <IconButton
              onClick={() => navigate("/products")}
              className={classes.backBtn}
            >
              <ArrowBackIcon />
            </IconButton>
          </Box>

          <ProductDetail user={user} product={product} loading={loading} />
        </>
      )}
    </Container>
  );
}

export default ProductDetails;
