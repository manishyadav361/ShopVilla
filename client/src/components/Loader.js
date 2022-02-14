import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Oval } from "react-loader-spinner";
import Spinner from "../images/Spinner-1s-200px (2).gif";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "200",
    height: "100vh",
    background: "rgba(0,0,0,0.3)",
    overflow: "hidden",
    top: "0%",
  },
}));
function Loader() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Oval
        heigth="50"
        width="50"
        color="whitesmoke"
        ariaLabel="loading"
        background="black"
      />
    </Box>
  );
}

export default Loader;
