import React from "react";

//React-router
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "../../page/Login/Login";
import CreatePromotion from "../../page/CreatePromotion/CreatePromotion";
import ListPromotion from "../../page/ListPromotion/ListPromotion";
import SimulateCart from "../../page/SimulateCart/SimulateCart";
import Error404 from "../../page/Error404/Error404";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/createPromotion" element={<CreatePromotion />} />
      <Route path="/listPromotion" element={<ListPromotion />} />
      <Route path="/SimulateCart" element={<SimulateCart />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoute;
