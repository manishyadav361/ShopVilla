import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  container: {
    width: "100%",
    padding: "0",
    minWidth: "100%",
    margin: "0",
    background: "#2f2d2d",
  },
  index: {
    position: "absolute",
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
    background: "lightblue",
    height: "200px",
    minWidth: "100%",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "5px",
    boxShadow: "4px 4px 25px rgba(0, 0, 0, 0.1s)",
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    cursor: "pointer",
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
    position: "relative",
    padding: "20px 0px",
    minHeight: "100vh",
    width: "100%",
    display: "grid",
    alignItems: "flex-start",
    gridTemplateColumns: "45% 45%",
    justifyContent: "space-around",
    margin: "0px auto",
    gridGap: "10px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "90%",
    },
    [theme.breakpoints.between("sm", "md")]: {
      gridTemplateColumns: "45% 45%",
    },
    [theme.breakpoints.between("md", "xl")]: {
      overflowX: "scroll",
      gridTemplateColumns: "250px 250px 250px 250px ",
    },
    background: "#2f2d2d",
    color: "white",
    overflow: "hidden",
    overflowY: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
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
  filter: {
    width: "100%",
    padding: "20px 0px 10px 0px ",
    display: "flex",
    justifyContent: "center",

    overflowY: "hidden",
    background: "#1a1a1a",
  },
  filterOption: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    zIndex: "90",
  },
  fBtn: {
    margin: "0px 10px",
  },
  closeModal: {
    minHeight: "30vh",
    width: "90%",
    background: "#1a1a1a",
    transform: "translateY(-120%)",
    transition: "0.2s ease-in",
    borderRadius: "3px",
    position: "absolute",
    zIndex: "90",
    boxShadow: "3px 3px 20px rgba(0,0,0,1)",
  },
  openModal: {
    transform: "translateY(0%)",
  },
}));
