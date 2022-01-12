import Auth from "./components/Auth/Auth";
import useStyles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";
import Product from "./components/Admin/Product/Product";
function App() {
  const classes = useStyles();

  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <Products />
              </>
            }
          />
          <Route path="/admin/product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
