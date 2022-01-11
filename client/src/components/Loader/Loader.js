import { Box, makeStyles } from "@material-ui/core";
import loader from "../../images/Spinner-1s-200px (2).gif";
const useStyles = makeStyles((theme) => ({
  box: {
    background: "rgba(0,0,0,0.4)",
    position: "absolute",
    height: "100vh",
    width: "100%",
    top: "0%",
    zIndex: "100",
    backgroundImage: `url(${loader})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

function Loader() {
  const classes = useStyles();

  return <Box className={classes.box}></Box>;
}

export default Loader;
