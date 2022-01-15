import Auth from "./components/Auth/Auth";
import useStyles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";
import Product from "./components/Admin/Product/Product";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "./actions/Products";
import AdminProducts from "./components/Admin/Product/AdminProducts/AdminProducts";
import Admin from "./components/Admin/Product/Admin/Admin";
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
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
          <Route exact path="/admin/product/:id" element={<Product />} />
          <Route
            path={`/admin/products/${
              user?.result?._id || user?.result?.googleId
            }`}
            element={<AdminProducts user={user} />}
          />
          <Route path="/admin" element={<Admin user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
