import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    margin: "0",
    padding: "0",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    zIndex: "-1",
  },
  textField: {
    width: "300px",
    margin: "8px 0px",
  },
  button: {
    background: "linear-gradient(98.51deg, #3E67FB -25.6%, #DB01FF 94.09%)",
    boxShadow: "10px 11px 22px 4px rgba(0, 0, 0, 0.05)",
    color: "white",
    marginTop: "10px",
  },
  avatar: {
    width: "60px",
    height: "60px",
  },
  box: {
    [theme.breakpoints.up("sm")]: {
      display: "grid",
      gridTemplateColumns: "auto auto",
      gridGap: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto",
    },
  },
  imageFile: {
    border: "1px solid rgba(0,0,0,0.2)",
    borderRadius: "4px",
    padding: "17px 0px",
    width: "300px",
    margin: "8px 0px",
    display: "flex",
    justifyContent: "center",
  },
}));
