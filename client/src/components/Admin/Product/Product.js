import {
  Box,
  Button,
  Container,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./ProductStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  getProduct,
  insertProduct,
  updateProduct,
} from "../../../actions/Products";
import { useLocation, useParams } from "react-router-dom";
import MobileNav from "../../AdminNavBar/MobileNav";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";
import FileBase from "react-file-base64";
function Product() {
  const classes = useStyles();
  const params = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Products);
  const user = JSON.parse(localStorage.getItem("profile"));
  // const product = state?.Products?.products?.filter(
  //   (product) => product?._id === params?.id
  // )?.[0];
  const product = state?.product;

  const initialState = {
    title: "",
    coverImage: "",
    price: 0,
    offerPercentage: 0,
    brandName: "",
    description: "",
    quantity: 0,
    colors: "",
    category: "",
    material: "",
    keywords: "",
    warranty: "",
    shipping: "" || 0,
    inStock: false || "",
    freeShipping: false || "",
    imageUrl: "",
  };
  const location = useLocation();

  const [formData, setFormData] = useState(initialState);

  // const form = new FormData();

  // for (const [key, value] of Object.entries(formData)) {
  //   form.append(key, value);
  // }
  // let index = product?.coverImage?.lastIndexOf("/");
  // let imageToUpdate = product?.coverImage?.slice(index + 1);
  // form.append("imageToUpdate", imageToUpdate);
  // form.set("shipping", formData?.shipping);

  const uploadProduct = (e) => {
    e.preventDefault();
    dispatch(
      insertProduct(formData, user?.result?._id || user?.result?.googleId)
    );
  };

  const update = (e) => {
    e.preventDefault();
    dispatch(updateProduct(formData, params?.id));
  };

  useEffect(() => {
    if (product) {
      setFormData({ ...product });
    } else {
      setFormData(initialState);
    }
  }, [product, location]);

  useEffect(() => {
    if (params.id) {
      dispatch(getProduct(params?.id));
    }
  }, [params]);

  return (
    <Container className={classes.container}>
      <Box>
        <AdminNavBar />
        <MobileNav />
      </Box>
      <Box className={classes.form}>
        <Box className={classes.productInfo}>
          <TextField
            label="Title"
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            value={formData?.title ?? ""}
            variant="filled"
          />

          <TextField
            label="Price"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            value={formData?.price || ""}
          />
          <TextField
            label="Offer"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, offerPercentage: e.target.value })
            }
            value={formData?.offerPercentage || ""}
          />
          <TextField
            label="BrandName"
            onChange={(e) =>
              setFormData({ ...formData, brandName: e.target.value })
            }
            value={formData?.brandName || ""}
          />

          <TextField
            label="Description"
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            value={formData?.description || ""}
          />
          <TextField
            label="Quantity"
            type="number"
            onChange={(e) =>
              setFormData({ ...formData, quantity: e.target.value })
            }
            value={formData?.quantity || ""}
          />
          <TextField
            label="Colors"
            placeholder="red,blue,green"
            onChange={(e) =>
              setFormData({ ...formData, colors: e.target?.value?.split(",") })
            }
            value={formData?.colors || ""}
          />
          <TextField
            label="Category"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            value={formData?.category || ""}
          />
          <TextField
            label="Material"
            placeholder="nylon,cotton,fabric,leather"
            onChange={(e) =>
              setFormData({
                ...formData,
                material: e.target?.value?.split(","),
              })
            }
            value={formData?.material || ""}
          />
          <TextField
            label="Keywords"
            placeholder="shoes,tshirt,shirt,watches,laptops"
            onChange={(e) =>
              setFormData({
                ...formData,
                keywords: e.target?.value?.split(","),
              })
            }
            value={formData?.keywords || ""}
          />
          <TextField
            label="Warranty"
            onChange={(e) =>
              setFormData({ ...formData, warranty: e.target?.value })
            }
            value={formData?.warranty || ""}
          />
          <TextField
            label="Shipping Fee"
            // type="number"
            onChange={(e) =>
              setFormData({ ...formData, shipping: e.target?.value })
            }
            value={formData?.shipping || ""}
          />
          {/* <Input
            endAdornment={
              <InputAdornment position="end">
                <input
                  className={classes.file}
                  type="file"
                  name="coverImage"
                  onChange={(e) =>
                    setFormData({ ...formData, coverImage: e.target.files[0] })
                  }
                />
              </InputAdornment>
            }
          /> */}
          <Input
            endAdornment={
              <InputAdornment position="end">
                <FileBase
                  className={classes.file}
                  type="file"
                  name="coverImage"
                  onDone={({ base64 }) =>
                    setFormData({ ...formData, imageUrl: base64 })
                  }
                />
              </InputAdornment>
            }
          />
        </Box>
        <Box className={classes.box2}>
          <Button
            className={formData?.inStock ? `${classes.toggle} ` : ""}
            variant="contained"
            color={!formData?.inStock ? "secondary" : "inherit"}
            onClick={() =>
              setFormData({ ...formData, inStock: !formData.inStock })
            }
          >
            In Stock
          </Button>
          <Button
            variant="contained"
            color={!formData?.freeShipping ? "secondary" : "inherit"}
            className={formData?.freeShipping ? `${classes.toggle} ` : ""}
            onClick={() =>
              setFormData({
                ...formData,
                freeShipping: !formData?.freeShipping,
              })
            }
          >
            Free Shipping
          </Button>
        </Box>
        {!product ? (
          <Button
            onClick={uploadProduct}
            variant="contained"
            className={classes.submit}
            type="submit"
          >
            Submit
          </Button>
        ) : (
          <Button
            onClick={update}
            variant="contained"
            className={classes.submit}
            type="submit"
          >
            Update
          </Button>
        )}
      </Box>
    </Container>
  );
}

export default Product;
