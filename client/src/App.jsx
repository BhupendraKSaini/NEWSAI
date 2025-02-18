import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Preferences from "./pages/Preferences";
import { fetchProduct } from "./redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const {loading, products} = useSelector((state)=>state.product)
  console.log(loading, products)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, []);
  return (
    <>
      <Navbar />
      <Preferences />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default App;
