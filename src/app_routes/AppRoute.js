import React from "react";
import { Routes, Route } from "react-router-dom";
import Dishes from "../components/dishes/Dishes";
import Login from "../components/login/Login";
import Result from "../components/result/Result";
import Tabs from "../components/tabs/Tabs";
import { Navigate } from "react-router-dom";
import SelectedDishes from "../components/selected_dishes/SelectedDishes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/main" element={<Tabs />} />
      <Route path="/dishes" element={<Dishes />} />
      <Route path="/selecteddishes" element={<SelectedDishes />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default AppRoutes;
