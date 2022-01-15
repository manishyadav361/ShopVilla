import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up("sm")]: {
      maxWidth: "200px",
      height: "100vh",
      background: "white",
      boxShadow: "2px 0px 10px rgba(0,0,0,0.3)",
      margin: "0",
      padding: "0",

      borderTopRightRadius: "8px",
      borderBottomRightRadius: "8px",

      display: "block",
    },

    display: "none",
  },
  top: {
    borderTopRightRadius: "8px",
    width: "100%",
    background: "purple",
    height: "120px",
  },
  bottom: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
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
    position: "absolute",
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
    height: "100vh",
    transition: "all 2s ease-in",
    display: "grid",
    gridTemplateColumns: "100px 100px 100px",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
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
}));
