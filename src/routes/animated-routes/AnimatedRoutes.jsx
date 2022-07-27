import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "../home/home.component";
import Shop from "../shop/shop.component";
import Authentication from "../authentication/authentication.component";
import Checkout from "../checkout/checkout.component";
import Navigation from "../navigation/navigation.component";

import { AnimatePresence } from "framer-motion";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
