import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  container: {
    padding: "0px 0px",
    margin: "0",
    minWidth: "100%",
    height: "100vh",
    background: "white",
    color: "#f6f6f6",
  },
  imageBox: {
    minWidth: "300px",
    width: "100%",
    minHeight: "250px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    backgroundSize: "cover",
    background: "lightblue",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      height: "400px",
    },
  },
  detailContainer: {
    minWidth: "100%",
    padding: "0px 15px",
    margin: "0",
    maxHeight: "100vh",
    overflowY: "scroll",
    background: "#1a1a1a",
    borderRadius: "20px 20px 0px 0px",
    transform: `translateY(-20px)`,
    color: "#f5f5f5",
    position: "sticky",
    top: "0%",
    left: "0%",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      transform: `translateY(-10px)`,
    },
  },
  bar: {
    width: "100px",
    padding: "2px",
    background: "lightblue",
    borderRadius: "5px",
  },
  barBox: {
    width: "100%",
    padding: "20px 0px",
    position: "sticky",
    top: "0%",
    left: "0%",
    display: "flex",
    justifyContent: "center",
    background: "#1a1a1a",
  },
  title: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  title1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    marginBottom: "15px",
    padding: "2px 0px",
  },
  tableData: {
    color: "white",
    background: "rgba(255,255,255,0.02)",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  relatedTitle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "0 auto",
    fontSize: "1px",
    marginTop: "5px",
  },
  relatedImage: {
    width: "150px",
    height: "150px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    background: "lightblue",
  },
  relatedProducts: {
    display: "flex",
    overflowY: "scroll",
    alignItems: "center",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  relatedProduct: {
    padding: "10px",
    marginRight: "15px",
    cursor: "pointer",
  },
  relatedText: {
    fontSize: "12px",
    maxWidth: "60%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  price: {
    fontSize: "12px",
  },
}));