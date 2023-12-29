import React from "react";
import "./App.css";
import ImageGenerator from "./pages/image-generator/ImageGenerator.jsx";
import Chat from "./pages/chat/Chat.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/search/Search.jsx";
import LandingPage from "./pages/landing-page/LandingPage.jsx";
import { theme } from "./data/index.js";
function App() {
  console.log(theme);
  return (
    <>
      <main className={`${theme} text-foreground bg-background`}>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/image" element={<ImageGenerator />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/search" element={<Search />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
