import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    margin: "0",
    minWidth: "100%",
    padding: "0px",
    height: "100%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "flex-start",
    },
  },
  bg: {
    width: "100%",
    height: "100vh",
    backgroundPosition: "center",
    zIndex: "100",
  },
  productError: {
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  cart: {
    background: "#1a1a1a",
    color: "white",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flex: "1",
    },
  },
  cartItem: {
    width: "100%",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    padding: "10px 0px",
  },
  imageBox: {
    minWidth: "110px",
    minHeight: "100px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "10px",
    margin: "10px",
    boxShadow: "0px 0px 20px rgba(255,255,255,0.2)",
    cursor: "pointer",
    "&:active": {
      transform: `scale(0.9)`,
      transition: "all 1s ease-in",
    },
  },
  infoBox: {
    width: "100%",
    padding: "10px",
    flex: "1",
  },
  info1: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  info2: {
    display: "flex",
    margin: "4px 0px 10px 0px",
    alignItems: "center",
  },
  quantity: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  total: {
    fontWeight: "bold",
  },
  title: {
    fontSize: "20px",
    overflow: "hidden",
    width: "120px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  btn: {
    margin: "0px 5px",
    color: "white",
  },

  like: {
    color: "red",
    cursor: "pointer",
  },
  cartSummary: {
    width: "100%",
    height: "100%",
    background: "#1a1a1a",
    color: "lightblue",
    display: "flex",
    flexDirection: "column",

    [theme.breakpoints.up("md")]: {
      margin: "10px",
      borderRadius: "5px",
      width: "40%",
      position: "sticky",
      top: "16%",
      right: "0%",
    },
    boxShadow: "4px 4px 10px rgba(0,0,0,0.5)",
  },
  head: {
    width: "100%",
    textAlign: "center",
    padding: "20px 0px",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  totalItems: {
    display: "flex",
    padding: "15px",
  },
  totalPrice: {
    display: "flex",
    padding: "15px",
  },
  checkout: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  checkBtn: {
    color: "lightblue",
    background: "rgba(173, 216, 230,0.2)",
    "&:hover": {
      background: "rgba(173, 216, 230,0.1)",
    },
    padding: "10px 0px",
  },
}));
