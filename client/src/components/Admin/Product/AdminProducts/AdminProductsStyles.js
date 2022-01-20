import { makeStyles } from "@material-ui/core";
import svg from "../../../../images/Group 219.png";
export default makeStyles((theme) => ({
  productsContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    background: "white",
  },
  right: {
    width: "100%",
    height: "100vh",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  product: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid whitesmoke",
    padding: "5px",
    width: "96%",
    margin: "0 auto",
    cursor: "pointer",
    "&:hover": {
      // background: "rgba(220,220,220,0.05)",
      background: "rgb(231, 251, 190,0.7)",
      boxShadow: "0px 2px 10px rgba(0,0,0,0.05)",
    },
    [theme.breakpoints.only("md")]: {
      width: "95%",
    },
    zIndex: "100",
  },
  avatar: {
    width: "15%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flex: "1",
    },
  },

  title: {
    width: "45%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    [theme.breakpoints.up("sm")]: {
      padding: "0px 4px",
      width: "50%",
    },
  },
  price: {
    width: "20%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      width: "20%",
    },
  },
  actions: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
  },
  select: {
    [theme.breakpoints.up("sm")]: {
      width: "5%",
      display: "flex",
      justifyContent: "center",
    },
  },
  delete: {
    color: "#E10000",
  },
  head: {
    padding: "10px 5px",
    borderRadius: "0px",
    zIndex: "10",
    background: "whitesmoke",
    "&:hover": {
      background: "whitesmoke",
    },
  },
  titleField: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
