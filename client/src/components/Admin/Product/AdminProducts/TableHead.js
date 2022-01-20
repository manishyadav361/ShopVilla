import { Box, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./AdminProductsStyles";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

function TableHead({ selectAll, setSelectAll }) {
  const classes = useStyles();
  // const [select, setSelect] = useState(false);
  const handleSelect = () => {
    setSelectAll(!selectAll);
  };
  return (
    <Box className={`${classes.product} ${classes.head}`}>
      <Box className={classes.select}>
        {!selectAll ? (
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
        <Typography>Image</Typography>
      </Box>
      <Box className={classes.title}>
        <Typography>Name</Typography>
      </Box>
      <Box className={classes.price}>
        <Typography>Price</Typography>
      </Box>
      <Box className={classes.actions}>
        <Typography>Actions</Typography>
      </Box>
    </Box>
  );
}

export default TableHead;
