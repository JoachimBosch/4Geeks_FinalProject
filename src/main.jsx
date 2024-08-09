import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyProvider } from './Context/context.jsx'
import Navbar from './assets/navbar.jsx';
import Footer from './assets/footer.jsx';
import Login from './assets/login.jsx';
import Marketplace from './assets/marketplace.jsx';
import Profile from './assets/profile.jsx';
import Subscribe from './assets/subscribe.jsx';
import Manage from './assets/manage.jsx';
import ShoppingCart from './assets/cart.jsx';
import Checkout from './assets/checkout.jsx';
import Home from './assets/home.jsx'
import Details from './assets/details.jsx';
import About from './assets/about.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyProvider>
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="subscribe" element={<Subscribe />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="manage" element={<Manage />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="details" element={<Details />} />
          <Route path="cart" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="about" element={<About />} />
        </Routes>

      <Footer />
    </Router>
    </MyProvider>
  </React.StrictMode>,
)
