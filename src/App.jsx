import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage.jsx";
import { theme } from "./data/index.js";
import Dashboard from "./pages/dashbord/Dashboard.jsx";
function App() {
  return (
    <>
      <main className={`${theme} text-foreground bg-background`}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
