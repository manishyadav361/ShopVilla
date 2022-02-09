import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  admin: {
    minWidth: "100%",
    heigth: "100vh",
    [theme.breakpoints.down("lg")]: {
      background: "#2f2d2d",
    },
  },
}));
