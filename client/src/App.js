import Auth from "./components/Auth/Auth";
import useStyles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
