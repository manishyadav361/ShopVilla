import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "220px",
      height: "100vh",
      background: "#2f2d2d",
      boxShadow: "5px 0px 20px rgba(0,0,0,0.5)",
      margin: "0",
      padding: "0",

      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",

      display: "block",
      color: "white",
    },

    display: "none",
  },
  profile: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    objectFit: "contain",
    border: "2px solid whitesmoke",
  },
  btn: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 30px",
    borderRadius: "0%",
    color: "whitesmoke",
    "&:hover": {
      background: "rgba(88, 0, 255,0.2)",
      color: "white",
    },
  },
  active: {
    background: "rgba(88, 0, 255,0.2)",
    color: "white",
  },
  top: {
    borderTopRightRadius: "8px",
    width: "100%",
    background: "rgba(88, 0, 255,0.1)",

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
    height: "100vh",
    display: "none",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
  },
  openNav: {
    position: "fixed",
    bottom: "10%",
    left: "50%",
    transform: `translateX(-50%)`,

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
