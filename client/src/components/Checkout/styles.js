import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  checkout: {
    display: "flex",
    overflowX: "hidden",
    alignItems: "center",
    height: "100vh",

    width: "100%",
  },
  transform: {
    transform: "translateX(-100%)",
    overflow: "visible",
  },
  container: {
    minWidth: "100%",
    padding: "10px",
    margin: "0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  addressField: {
    zIndex: "100",
    display: "grid",
    gridTemplateColumns: "auto",
    width: "90%",
    gridGap: "10px",
    marginBottom: "20px",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "auto auto",
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
    // position: "relative",
  },
  head: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0px",
  },
  image: {
    width: "100px",
    height: "100px",
    background: "whitesmoke",
    objectFit: "contain",
  },
  imageSrc: {
    width: "100%",
    height: "100%",
  },
  summary: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      padding: "10px",
      width: "90%",
      display: "grid",
      gridTemplateColumns: "50% 50%",
      margin: "0 auto",
    },
    marginBottom: "3px",
  },
  order: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    background: "rgba(0,0,0,0.02)",
    marginBottom: "2px",
  },
  info: {
    padding: "0px 10px",
  },
  total: {
    width: "90%",
    background: "rgba(0,0,0,0.015)",
    padding: "10px 0px",
    textAlign: "center",
  },
  cardElement: {
    width: "90%",
    background: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "20px",
    padding: "10px 0px 10px 0px ",
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
  element: {
    width: "90%",
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
  },
  payBtn: {
    width: "100%",
  },
}));
