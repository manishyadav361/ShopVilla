import {
  Avatar,
  Box,
  Button,
  Checkbox,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./AdminProductsStyles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { deleteProduct } from "../../../../actions/Products";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Product({ coverImage, title, id, inStock, price }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const classes = useStyles();
  const [select, setSelect] = useState(false);
  const handleSelect = () => {
    setSelect(!select);
  };

  let index = coverImage?.lastIndexOf("/") + 1;
  let imageToUpdate = coverImage?.slice(index);
  const deleteItem = () => {
    dispatch(deleteProduct(id, imageToUpdate));
  };
  return (
    <Box className={classes.product}>
      <Box className={classes.select}>
        {!select ? (
          <IconButton onClick={handleSelect} edge="start" size="small">
            <CheckBoxOutlineBlankIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            size="small"
            edge="start"
            onClick={handleSelect}
          >
            <CheckBoxIcon />
          </IconButton>
        )}
      </Box>
      <Box className={classes.avatar}>
        <Avatar src={coverImage}>a</Avatar>
      </Box>
      <Box className={classes.title}>
        <Typography className={classes.titleField}>{title}</Typography>
      </Box>
      <Box className={classes.price}>
        <Typography>{price}</Typography>
      </Box>

      <Box className={classes.actions}>
        <IconButton
          size="small"
          onClick={() => navigate(`/admin/product/${id}`)}
        >
          <EditOutlinedIcon className={classes.edit} />
        </IconButton>
        <IconButton
          size="small"
          className={classes.delete}
          onClick={deleteItem}
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Product;
