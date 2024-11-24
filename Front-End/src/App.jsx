// import Signup from "./components/SignUpPage/Signup";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Signup from './components/SignUpPage/Signup';
import Payment from "./components/Payments/Stripe";
import Dishes from "./components/MarketPlace/dishes";
import Chefs from "./components/MarketPlace/chefs";
import Details from "./components/MarketPlace/details";
import Checkout from "./components/Payments/Checkout";
import Success from "./components/Payments/Success";
import Cancel from "./components/Payments/Cancel";
import Home from "./components/HomePage/HomePage";
import Recipe from "./components/RecipePage/Recipe";
import ContactUs from "./components/ContactUs/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/LogIn";
import UserProfilePage from "./pages/UserProfile";
import OurStory from "./components/OurStory/OurStory";
import ReelsList from "./pages/ReelsList";
import CheckoutPage from "./pages/CheckOut";
import SignUpChef from "./pages/ShefRegister";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<SignIn />} />
          <Route path="/profile" element={<UserProfilePage />} />

          <Route path="/" element={<Home />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Payment" element={<Payment />} />
          <Route path="/dishes/:id" element={<Dishes />} />
          <Route path="/MarketPlace" element={<Chefs />} />
          <Route path="/details" element={<Details />} />
          <Route path="/about" element={<OurStory />} />
          <Route path="/ReelsList" element={<ReelsList />} />
          <Route path="/CheckoutPage" element={<CheckoutPage />} />
          <Route path="/SignUpChef" element={<SignUpChef />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
