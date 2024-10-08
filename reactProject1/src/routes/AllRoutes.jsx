import React from "react";
import Home from "../pages/home/Home";
import NewsLetter from "../pages/Newaletter/NewsLetter";
import CustomerSer from "../pages/customerService/CustomerSer";
import FindStore from "../pages/Find-store/FindStore";
import Cart from "../pages/cart-page/Cart";
import Shopping from "../pages/shopping-page/Shopping";
import { Routes, Route } from "react-router-dom";
import Men from "../pages/Menpage/Men";
import Women from "../pages/WomenPage/Women";
import Kids from "../pages/kidsPage/Kids";
import Baby from "../pages/babyPage/Baby";
import Sport from "../pages/SportsPage/Sport";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newsletter" element={<NewsLetter />} />
        <Route path="/customerservice" element={<CustomerSer />} />
        <Route path="/findstore" element={<FindStore />} />
        <Route path="/favourites" element={<Cart />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/baby" element={<Baby />} />
        <Route path="/sport" element={<Sport />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
