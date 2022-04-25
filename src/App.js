import React, { useState, useEffect } from "react";
import "./App.css";
import Dropdown from "./components/Dropdown";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
// import Account from "./page/account";
import Home from "./pages/home";
import LogIn from "./pages/logIn";
import Register from "./pages/register";
import Notification from "./pages/notification";
import Random from "./pages/random";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 766 && isOpen) {
        setIsOpen(false);
        console.log("i resizeddd");
      }
    };
    window.addEventListener("resize", hideMenu);
    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/orders" element={<Random />} />
        {/* <Route path="/account" element={<Account />} /> */}
      </Routes>
    </>
  );
}

export default App;
