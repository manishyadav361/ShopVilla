import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  box: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: "10px",
  },
  info: {
    width: "60%",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    height: "70%",
    justifyContent: "space-around",
  },
}));
