// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import PatronLogin from "./components/login/PatronLogin";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <BrowserRouter>
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="patronlogin" element={<PatronLogin handleLogin={handleLogin} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
