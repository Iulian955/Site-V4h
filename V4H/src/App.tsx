/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import ReactGA from "react-ga4";
import { AuthProvider } from "./components/context/AuthProvider";
import "./App.css";
import { useScrollSense } from "./components/hooks/senseHook/useScrollSense";
import Homepage from "../src/components/Homepage/Homepage";

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
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
