import { makeStyles } from "@material-ui/core";
import Logo from "../../images/storeLogo.png";
export default makeStyles((theme) => ({
  container: {
    padding: "0px",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    background: "whitesmoke",
  },
  loader: {
    width: "100%",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    position: "absolute",
    zIndex: "100",
  },
  logo: {
    backgroundImage: `url(${Logo})`,
    cursor: "pointer",

    width: "100px",
    height: "100px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    display: "flex",
    justifyContent: "center",
    margin: "10px auto",
  },
  googleLogo: {
    width: "30px",
    height: "30px",
  },
  google: {
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    background: "#fffff",
    color: "rgba(0,0,0,0.7)",
    fontWeight: "medium",
    border: "none",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.11)",
    margin: "10px 0px",
  },
  textField: {
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "40%",
    },
    display: "flex",
    justifyContent: "center",
    margin: "20px auto",
  },

  authBtn: {
    background: "linear-gradient(98.51deg, #3E67FB -25.6%, #DB01FF 94.09%)",
    color: "#ffffff",
    display: "flex",
    justifyContent: "center",
    margin: "0px auto",
    width: "200px",
  },
  typography: {
    margin: "20px 0px",
    color: "rgba(0,0,0,0.8)",
    cursor: "pointer",
    maxWidth: "80%",
  },
}));
