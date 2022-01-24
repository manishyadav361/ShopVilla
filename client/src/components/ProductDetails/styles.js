import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    padding: "0px 0px",
    margin: "0",
    minWidth: "100%",
    height: "100vh",
    background: "white",
  },
  imageBox: {
    minWidth: "300px",
    height: "250px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
    background: "lightblue",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
    },
    "&:hover": {
      zIndex: "100",
    },
  },
  detailContainer: {
    minWidth: "100%",
    padding: "0px 15px",
    margin: "0",
    height: "100vh",
    background: "#1a1a1a",
    borderRadius: "20px 20px 0px 0px",
    transform: `translateY(-20px)`,
    color: "#f5f5f5",
    [theme.breakpoints.up("sm")]: {
      transform: `translateY(-10px)`,
    },
  },
  bar: {
    width: "100px",
    padding: "2px",
    background: "lightblue",
    borderRadius: "5px",
    margin: "0 auto",
  },
  barBox: {
    width: "100%",
    padding: "20px 0px",
  },
  title: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  title1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    marginBottom: "15px",
    padding: "2px 0px",
  },
}));
