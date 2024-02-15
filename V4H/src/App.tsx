/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState, lazy, Suspense } from "react";
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
import Loading from "./components/Loading/Loading";
import Cookie from "./components/Cookie/Cookie";
import Terms from "./components/Terms/Terms";
import Policy from "./components/Policy/Policy";
import CookieComponent from "./components/CookieComponent/CookieComponent";

function App() {
  useScrollSense(() => {
    ReactGA.event(`User scrolled to bottom on [${window.location.pathname}]`);
  });

  const handleConsentAccepted = () => {
    console.log("Consent accepted");
  };

  const handleRejectCookies = () => {
    console.log("Cookies rejected by user.");
  };

  return (
    <div>
      <CookieComponent onAccept={handleConsentAccepted} onReject={handleRejectCookies} />
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
