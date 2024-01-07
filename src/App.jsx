import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage.jsx';
import { theme } from './data/index.js';
import Dashboard from './pages/dashbord/Dashboard.jsx';
import SignUp from './pages/signup/SignUp.jsx';
const App = () => {
  const [activeBtn, setActiveBtn] = useState(() => {
    const savedValue = localStorage.getItem('activeBtn');
    return savedValue !== null ? parseInt(savedValue, 10) : 0;
  });
  return (
    <>
      <main className={`${theme}  bg-background text-foreground`}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <LandingPage
                  activeBtn={activeBtn}
                  setActiveBtn={setActiveBtn}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard activeBtn={activeBtn} setActiveBtn={setActiveBtn} />
              }
            />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </main>
    </>
  );
};

export default App;
