/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import ReactGA from "react-ga4";
import { AuthProvider } from "./components/context/AuthProvider";
import "./App.css";
import { useScrollSense } from "./components/hooks/senseHook/useScrollSense";
import Homepage from "../src/components/Homepage/Homepage";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import Advertising from "./components/Advertising/Advertising";
import Marketing from "./components/Marketing/Marketing";

function App() {
  useScrollSense(() => {
    ReactGA.event(`User scrolled to bottom on [${window.location.pathname}]`);
  });

  return (
    <div className="App">
      {/* {getCookieConsent() && <CookieConsent />} */}
      <header className="App-header">
        <BrowserRouter basename="/">
          <AuthProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/advertising" element={<Advertising />} />
              <Route path="/marketing" element={<Marketing />} />
            </Routes>
            <Footer />
          </AuthProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
