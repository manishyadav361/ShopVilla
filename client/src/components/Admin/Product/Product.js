import {
  Box,
  Button,
  Container,
  Input,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./ProductStyle";
import FileBase from "react-file-base64";
function Product() {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    title: "",
    coverImage: "",
    price: 0,
    offerPercentage: 0,
    brandName: "",
    description: "",
    quantity: "",
    colors: null,
    category: "",
    material: "",
    keywords: null,
    warranty: 0,
    shipping: 0,
    inStock: false,
    freeShipping: false,
  });

  const uploadProduct = () => {
    console.log(formData);
  };

  return (
    <Container className={classes.container}>
      <Box className={classes.productInfo}>
        <TextField
          label="Title"
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        {/* <TextField
          label="Image"
          onChange={(e) =>
            setFormData({ ...formData, coverImage: e.target.value })
          }
        /> */}
        <TextField
          label="Price"
          type="number"
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
        <TextField
          label="Offer"
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, offerPercentage: e.target.value })
          }
        />
        <TextField
          label="BrandName"
          onChange={(e) =>
            setFormData({ ...formData, brandName: e.target.value })
          }
        />

        <TextField
          label="Description"
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <TextField
          label="Quantity"
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, quantity: e.target.value })
          }
        />
        <TextField
          label="Colors"
          placeholder="red,blue,green"
          onChange={(e) =>
            setFormData({ ...formData, colors: e.target?.value?.split(",") })
          }
        />
        <TextField
          label="Category"
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
        />
        <TextField
          label="Material"
          placeholder="nylon,cotton,fabric,leather"
          onChange={(e) =>
            setFormData({ ...formData, material: e.target?.value?.split(",") })
          }
        />
        <TextField
          label="Keywords"
          placeholder="shoes,tshirt,shirt,watches,laptops"
          onChange={(e) =>
            setFormData({ ...formData, keywords: e.target?.value?.split(",") })
          }
        />
        <TextField
          label="Warranty"
          onChange={(e) =>
            setFormData({ ...formData, warranty: e.target?.value })
          }
        />
        <TextField
          label="Shipping Fee"
          type="number"
          onChange={(e) =>
            setFormData({ ...formData, shipping: e.target?.value })
          }
        />
        <Input
          endAdornment={
            <InputAdornment position="end">
              <FileBase
                className={classes.file}
                type="file"
                onDone={({ base64 }) =>
                  setFormData({ ...formData, coverImage: base64 })
                }
              />
            </InputAdornment>
          }
        />
      </Box>
      <Box className={classes.box2}>
        <Button
          className={formData.inStock ? `${classes.toggle} ` : ""}
          variant="contained"
          color={!formData.inStock ? "secondary" : "inherit"}
          onClick={() =>
            setFormData({ ...formData, inStock: !formData.inStock })
          }
        >
          In Stock
        </Button>
        <Button
          variant="contained"
          color={!formData.freeShipping ? "secondary" : "inherit"}
          className={formData.freeShipping ? `${classes.toggle} ` : ""}
          onClick={() =>
            setFormData({ ...formData, freeShipping: !formData.freeShipping })
          }
        >
          Free Shipping
        </Button>
      </Box>
      <Button
        onClick={uploadProduct}
        variant="contained"
        className={classes.submit}
      >
        Submit
      </Button>
    </Container>
  );
}

export default Product;
