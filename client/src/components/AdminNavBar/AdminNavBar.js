import React from "react";
import { Box, Button, Container } from "@material-ui/core";
import useStyles from "./styles";
import HomeIcon from "@material-ui/icons/Home";
import CategoryIcon from "@material-ui/icons/Category";
import { useNavigate } from "react-router-dom";

function AdminNavBar() {
  const classes = useStyles();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <Container className={classes.container}>
      <Box className={classes.top}></Box>
      <Box className={classes.bottom}>
        <Button
          onClick={() => navigate("/admin")}
          className={classes.btn}
          startIcon={<HomeIcon />}
        >
          Home
        </Button>
        <Button
          onClick={() =>
            navigate(
              `/admin/products/${user?.result?._id || user?.result?.googleId}`
            )
          }
          className={classes.btn}
          startIcon={<CategoryIcon />}
        >
          Products
        </Button>
      </Box>
    </Container>
  );
}

export default AdminNavBar;
