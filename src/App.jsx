import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Homepage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import VehicleSearch from "./pages/VehicleSearch";
import PaymentGateway from "./pages/PaymentGateway";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/vehicle-search" element={<VehicleSearch />} />
          <Route path="/payment" element={<PaymentGateway />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
