import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  productsContainer: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
    background: "#2f2d2d",
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
    borderBottom: "0.2px solid rgba(255,255,255,0.08)",
    padding: "5px",
    width: "96%",
    margin: "0 auto",
    cursor: "pointer",
    "&:hover": {
      background: "rgba(255,255,255,0.1)",
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
    color: "whitesmoke",
  },

  title: {
    width: "45%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "whitesmoke",
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
    color: "whitesmoke",
  },
  actions: {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    color: "whitesmoke",
  },
  select: {
    [theme.breakpoints.up("sm")]: {
      width: "5%",
      display: "flex",
      justifyContent: "center",
    },
  },
  edit: {
    color: "whitesmoke",
  },
  delete: {
    color: "rgba(255,0,0,0.7)",
  },
  head: {
    padding: "10px 5px",
    borderRadius: "0px",
    zIndex: "10",
    background: "rgba(255,255,255,0.1)",
  },
  titleField: {
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));
