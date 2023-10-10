import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Home from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Admin from "./admin/AdminPage";
import Page404 from "./pages/Page404";
import Checkout from "./pages/Checkout";

function App() {
  const { user } = useAuthContext();

  const userData = localStorage.getItem("user");
  const usercheck = JSON.parse(userData);
  const userEmail = user ? usercheck.email : "";

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            {user && <Route path="/shop" element={<Shop />} />}
            {user && <Route path="/cart" element={<Cart />} />}
            {userEmail === "admin@gmail.com" && (
              <Route path="/admin" element={<Admin />} />
            )}
            {user && <Route path="/checkout" element={<Checkout />} />}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
