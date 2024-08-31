import { Routes, Route } from "react-router-dom";
import MyContext, { MyProvider } from "../Context/context";
import { ProtectedRoute } from "./protectedroute";
import Home from "../assets/home";
import Login from "../assets/login";
import Subscribe from "../assets/subscribe";
import Marketplace from "../assets/marketplace";
import Details from "../assets/details";
import ShoppingCart from "../assets/cart";
import About from "../assets/about";
import Profile from "../assets/profile";
import ChangePassword from "../assets/changepassword";
import Checkout from "../assets/checkout";
import { useAuth } from "../Context/authcontext";
import CheckoutForm from "../assets/checkoutForm";
import Return from "../assets/return";
import Success from "../assets/success";

const AuthRoutes = () => {
    const { token } = useAuth();

    return (
      <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/about" element={<About />} />
          <Route path="/success" element={<Success />} />

          {/* Protected routes */}
          <Route path="/profile" element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/change-password" element={<ProtectedRoute />}>
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
          <Route path="/checkout" element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
          </Route>
          <Route path="/payment" element={<ProtectedRoute />}>
            <Route path="/payment" element={<CheckoutForm />} />
          </Route>
          <Route path="/return" element={<ProtectedRoute />}>
            <Route path="/return" element={<Return />} />
          </Route>
      </Routes>
  );
};

export default AuthRoutes;