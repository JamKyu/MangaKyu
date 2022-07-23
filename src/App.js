import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MangaInfo from "./pages/MangaInfo";
import Browse from "./pages/Browse";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path=":browse" element={<Browse />}></Route>
            <Route path="/manga/:id" element={<MangaInfo />}></Route>
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
