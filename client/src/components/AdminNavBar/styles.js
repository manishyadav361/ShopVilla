import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "220px",
      height: "100vh",
      background: "white",
      boxShadow: "2px 0px 8px rgba(0,0,0,0.15)",
      margin: "0",
      padding: "0",

      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",

      display: "block",
    },

    display: "none",
  },
  profile: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  },
  btn: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 30px",
    borderRadius: "0%",
    "&:hover": {
      background: "rgb(88, 0, 255)",
      color: "white",
    },
  },
  active: {
    background: "rgb(88, 0, 255)",
    color: "white",
  },
  top: {
    borderTopRightRadius: "8px",
    width: "100%",
    background: "#E7FBBE",
    height: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // height: "100%",
  },
  mainNav: {
    position: "absolute",
    top: "0%",
    left: "0%",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileNav: {
    // transform: "translateY(100%)",
    height: "100vh",
    display: "none",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  openNav: {
    position: "fixed",
    bottom: "10%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    zIndex: "110",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toggleNav: {
    position: "fixed",
    height: "100vh",
    transition: "all 2s ease-in",
    display: "grid",
    gridTemplateColumns: "100px 100px 100px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // position: "absolute",
    top: "0%",
    boxShadow: "0px 0px 45px rgba(0, 0, 0, 0.25)",
    background: "rgba(255, 255, 255, 0.03)",
    zIndex: "101",
    borderTopRightRadius: "8px",
    backdropFilter: "blur(3px)",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  apps: {
    "&:hover": {
      background: "#E7FBBE",
    },
    background: "#E7FBBE",
    color: "black",
    boxShadow: "4px 4px 8px rgba(0,0,0,0.3)",
  },
}));
