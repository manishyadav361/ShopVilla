import React, { useEffect } from "react";
import { Box, Button, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../../actions/Products";
function AdminNavBar() {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = user?.result?._id || user?.result?.googleId;
  useEffect(() => {
    if (!user) {
      navigate("/auth");
      alert("You have been logged out!! Please Login again.");
    }
  }, [user, id]);

  return (
    <Container className={classes.container}>
      <Box className={classes.top}>
        <img className={classes.profile} src={user?.result?.imageUrl} alt="" />
        <Typography>{user?.result?.name || user?.result?.username}</Typography>
        <Typography className={classes.email}>{user?.result?.email}</Typography>
      </Box>
      <Box className={classes.bottom}>
        <Button
          onClick={() => navigate("/admin")}
          className={
            location.pathname === "/admin"
              ? `${classes.btn} ${classes.active}`
              : `${classes.btn}`
          }
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button
          onClick={() => navigate(`/admin/products`)}
          className={
            location.pathname === `/admin/products`
              ? `${classes.btn} ${classes.active}`
              : `${classes.btn}`
          }
          startIcon={<CategoryIcon />}
        >
          Products
        </Button>
        <Button
          onClick={() => navigate("/")}
          className={
            location.pathname === "/" ? `${classes.btn} ` : `${classes.btn}`
          }
          startIcon={<StorefrontIcon />}
        >
          Back To Store
        </Button>
      </Box>
    </Container>
  );
}

export default AdminNavBar;
