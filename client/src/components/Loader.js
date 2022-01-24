import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import Spinner from "../images/Spinner-1s-200px (2).gif";
const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "100",
    height: "100vh",
    background: "rgba(0,0,0,0.5)",
    overflow: "hidden",
    top: "0%",
  },
}));
function Loader() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <img width="120" src={Spinner} alt="" />
    </Box>
  );
}

export default Loader;
