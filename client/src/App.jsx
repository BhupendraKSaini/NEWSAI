import React from "react";
import Navbar from "./components/Navbar";
import '@mantine/core/styles.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return(
    <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  )
}

export default App;