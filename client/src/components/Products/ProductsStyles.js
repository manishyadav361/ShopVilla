import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "0",
    minWidth: "100%",
    margin: "0",
    background: "white",
  },
  product: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px auto",
    minWidth: "100%",
    zIndex: "1",
  },

  top: {
    background: "white",
    height: "200px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "25px",
    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.2 )",

    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imageBox: {
    width: "200px",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  },

  bottom: {
    width: "100%",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productInfo: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    margin: "0px auto",
    justifyContent: "space-between",
  },
  products: {
    // minHeight: "100vh",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "45% 45%",
    justifyContent: "space-around",
    margin: "0px auto",
    padding: "20px 0px",
    gridGap: "10px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      gridTemplateColumns: "45% 45%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      gridTemplateColumns: "250px 250px 250px 250px ",
    },
  },
  title: {
    width: "70%",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("sm")]: {
      width: "180px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "150px",
    },
    fontSize: "20px",
  },
  price: {
    fontSize: "20px",
  },
  cartBtn: {
    background:
      "linear-gradient(92.98deg, #6BE4FF 0%, rgba(12, 255, 36, 0.81) 100%)",
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.19)",
    width: "150px",
    margin: "10px 0px",
    fontWeight: "bold",
    color: "rgba(0,0,0,0.8)",
    textTransform: "capitalize",
  },
}));
