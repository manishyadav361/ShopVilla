import Auth from "./components/Auth/Auth";
import useStyles from "./styles";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Products from "./components/Products/Products";
import Product from "./components/Admin/Product/Product";
import AdminProducts from "./components/Admin/Product/AdminProducts/AdminProducts";
import Admin from "./components/Admin/Product/Admin/Admin";
import Cart from "./components/Cart/Cart";
import SearchProducts from "./components/SearchProducts/SearchProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Checkout from "./components/Checkout/Checkout";
import Success from "./components/Checkout/Success";
import Alan from "./components/Alan/Alan";

function App() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  return (
    <BrowserRouter>
      <div className={classes.app}>
        {/* <Alan user={user} /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Alan />
              </>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route
            exact
            path="/profile"
            element={
              <>
                <Header />
                <Profile />
              </>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <>
                <Header />
                <Products />
              </>
            }
          />
          <Route
            exact
            path="/products/search"
            element={
              <>
                <Header /> <SearchProducts />
              </>
            }
          />

          <Route exact path="/admin/product" element={<Product />} />
          <Route exact path="/admin/product/:id" element={<Product />} />
          <Route
            exact
            path={`/admin/products`}
            element={<AdminProducts user={user} />}
          />
          <Route path="/admin" element={<Admin user={user} />} />
          <Route
            exact
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
          <Route
            exact
            path={"/products/:id"}
            element={
              <>
                <ProductDetails />
              </>
            }
          />
          <Route path="/checkout" element={<Checkout user={user} />} />
          <Route path="/payment/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
