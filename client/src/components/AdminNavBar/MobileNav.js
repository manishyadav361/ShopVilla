import { Box, IconButton, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import CategoryIcon from "@material-ui/icons/Category";
import StorefrontIcon from "@material-ui/icons/Storefront";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import { useNavigate } from "react-router-dom";
function MobileNav() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (!user) {
      navigate("/auth");
      alert("You have been logged out!! Please Login again.");
    }
  }, []);

  return (
    <Box className={classes.mainNav}>
      <Box className={classes.openNav}>
        <IconButton
          className={classes.apps}
          onClick={() => setOpenNav(!openNav)}
        >
          <AppsIcon />
        </IconButton>
      </Box>
      <Box
        className={openNav ? `${classes.toggleNav}  ` : `${classes.mobileNav}`}
      >
        {/* <Box className={classes.link}>
          <IconButton
            color="inherit"
            onClick={() => {
              navigate("/admin");
              setOpenNav(!openNav);
            }}
          >
            <HomeIcon fontSize="large" />
          </IconButton>
          <Typography>Home</Typography>
        </Box> */}
        <Box className={classes.link}>
          <IconButton
            color="inherit"
            onClick={() => {
              navigate(`/admin/products`);
              setOpenNav(!openNav);
            }}
          >
            <CategoryIcon fontSize="large" />
          </IconButton>
          <Typography>Products</Typography>
        </Box>
        <Box className={classes.link}>
          <IconButton
            color="inherit"
            onClick={() => {
              navigate("/");
              setOpenNav(!openNav);
            }}
          >
            <StorefrontIcon fontSize="large" />
          </IconButton>
          <Typography>Store</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default MobileNav;
