import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header: {
    margin: "0",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: "0%",
    background: "#2F2D2D",
    minWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "15px",
    },
  },
  container: {
    padding: "10px",
    zIndex: "100",
    margin: "0",
    display: "flex",
    alignItems: "center",
    background: "#2F2D2D",
    [theme.breakpoints.up("sm")]: {
      padding: "18px",
      minWidth: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    position: "sticky",
    top: "0%",
  },
  menu: {
    color: "#6D86F5",
    fontSize: "28px",
  },
  imageBox: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flex: "1",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.up("sm")]: {
      flex: "0",
    },
  },
  logo: {
    objectFit: "contain",
    width: "50px",
    marginRight: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "40px",
    },
  },
  logoName: {
    color: "#6d86f5",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
  },
  searchBar: {
    margin: "0px auto",
    display: "flex",
    alignItems: "center",
    background: "rgba(255,255,255,0.15)",
    width: "50%",

    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },

    borderRadius: "8px",
  },
  mobileSearch: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    [theme.breakpoints.down("sm")]: {
      background: "rgba(255,255,255,0.15)",
      display: "flex",
      width: "70%",
    },
  },

  logout: {
    display: "flex",
    flexDirection: "column",
    color: "#6d86f5",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    "&:hover": {
      background: "rgba(255,255,255,0.05)",
    },
  },
  searchIcon: {
    color: "#6D86F5",
  },
  input: {
    padding: "0px 10px",
    flex: "1",
    color: "rgba(255,255,255,0.8)",
    border: "none",
    outlineStyle: "none",
    background: "transparent",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "10px",
    },
  },
  headerRight: {
    display: "flex",
    marginLeft: "auto",
    alignItems: "center",
  },
  avatar: {
    border: "2px solid #6d86f5",
    background: "white",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  cart: {
    color: " #6d86f5",
  },
  sidebar: {
    padding: "0",
    display: "flex",
    flexDirection: "column",
    margin: "0",
    position: "absolute",
    top: "100%",
    left: "0%",
    height: "100vh",
    background: "#2F2D2D",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    width: "50%",
    transform: `translateX(-100%)`,
    transition: "all 0.5s ease-out",
  },

  toggle: {
    transform: `translateX(0%)`,
  },
  sidebarOption: {
    color: "#6d86f5",
    padding: "14px",
    "&:hover": {
      background: "rgba(255,255,255,0.05)",
    },
  },
}));
