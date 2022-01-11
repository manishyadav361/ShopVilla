import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import useStyles from "./HeaderStyles.js";
import MenuIcon from "@material-ui/icons/Menu";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Logo from "../../images/storeLogo.png";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchBar from "../SearchBar/SearchBar";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar.js";

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const state = useSelector((state) => state.Auth);
  const [toggle, setToggle] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [state]);
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }
  }, [location]);

  return (
    <Container className={classes.header}>
      <Container className={classes.container}>
        <Box className={classes.menuBox}>
          <IconButton onClick={() => setToggle(!toggle)}>
            <MenuIcon className={classes.menu} />
          </IconButton>
        </Box>
        <Box className={classes.imageBox}>
          <img
            className={classes.logo}
            src={Logo}
            alt={Logo}
            onClick={() => navigate("/")}
          />
          <Typography variant="h5" color="primary" className={classes.logoName}>
            ShopVilla
          </Typography>
        </Box>

        <SearchBar classname={classes.searchBar} />
        <Box className={classes.headerRight}>
          <Button className={classes.logout} onClick={logout}>
            <PowerSettingsNewIcon />
          </Button>
          <IconButton
            size="small"
            color="primary"
            onClick={() => navigate(`/profile`)}
          >
            <Avatar
              className={classes.avatar}
              variant="circular"
              src={user?.result?.imageUrl}
              alt=""
            />
          </IconButton>
          <IconButton>
            <Badge className={classes.badge} color="error" badgeContent={1}>
              <ShoppingCartIcon className={classes.cart} />
            </Badge>
          </IconButton>
        </Box>
        <Sidebar toggle={toggle} setToggle={setToggle} />
      </Container>
      <SearchBar classname={`${classes.searchBar} ${classes.mobileSearch}`} />
    </Container>
  );
}

export default Header;
