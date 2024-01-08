import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage.jsx';
import Dashboard from './pages/dashbord/Dashboard.jsx';
import SignUp from './pages/signup/SignUp.jsx';
import MyContext from './data/index.js';
const App = () => {
  const [activeBtn, setActiveBtn] = useState(() => {
    const savedValue = localStorage.getItem('activeBtn');
    return savedValue !== null ? parseInt(savedValue, 10) : 0;
  });
  const [themeValue, setThemeValue] = useState('dark');
  return (
    <>
      <MyContext.Provider value={{ themeValue, setThemeValue }}>
        <main className={`bg-background text-foreground`}>
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
                  <Dashboard
                    activeBtn={activeBtn}
                    setActiveBtn={setActiveBtn}
                  />
                }
              />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </Router>
        </main>
      </MyContext.Provider>
    </>
  );
};

export default App;
