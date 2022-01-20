import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    height: "100vh",
    background: "white",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      // justifyContent: "center",
      display: "flex",
      flexDirection: "row",
    },
    padding: "0",
    margin: "0",
    minWidth: "100%",
    overflow: "hidden",
  },
  form: {
    height: "100vh",
    overflowY: "scroll",
    flex: "1",
  },
  productInfo: {
    padding: "20px 0px",
    display: "grid",
    gridTemplateColumns: "80%",
    justifyContent: "center",
    gridGap: "10px 0px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "300px 300px",
      gridGap: "10px 40px",
    },
  },
  box2: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "40% 40%",
    justifyContent: "center",
    gridGap: "4px 5px",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "280px 280px",
      gridGap: "10px 10px",
    },
    padding: "10px 0px",
  },

  submit: {
    margin: "10px auto",
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(98.51deg, #3E67FB -25.6%, #DB01FF 94.09%)",
    boxShadow: "10px 11px 22px 4px rgba(0, 0, 0, 0.05)",
    color: "white",
  },
  toggle: {
    background: "rgb(50,205,50)",
    "&:hover": {
      background: "rgb(50,205,50)",
    },
  },
}));
