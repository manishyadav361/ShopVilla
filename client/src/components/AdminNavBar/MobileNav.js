import { Box, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./styles";
import CategoryIcon from "@material-ui/icons/Category";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import { useNavigate } from "react-router-dom";
function MobileNav() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id || user?.result?.googleId;

  return (
    <Box className={classes.mainNav}>
      <Box className={classes.openNav}>
        <IconButton onClick={() => setOpenNav(!openNav)}>
          <AppsIcon />
        </IconButton>
      </Box>
      <Box
        className={openNav ? `${classes.toggleNav} ` : `${classes.mobileNav}`}
      >
        <Box className={classes.link}>
          <IconButton
            onClick={() => {
              navigate("/admin");
              setOpenNav(!openNav);
            }}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography>Home</Typography>
        </Box>
        <Box className={classes.link}>
          <IconButton
            onClick={() => {
              navigate(`/admin/products/${id}`);
              setOpenNav(!openNav);
            }}
          >
            <CategoryIcon fontSize="large" />
          </IconButton>
          <Typography>Products</Typography>
        </Box>
        <Box className={classes.link}>
          <IconButton>
            <CategoryIcon fontSize="large" />
          </IconButton>
          <Typography>Products</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MobileNav;
