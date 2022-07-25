import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MangaInfo from "./pages/MangaInfo";
import MangaPage from "./pages/MangaPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Nav />
        <div className="app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse/:search" element={<MangaPage />} />
            <Route path="/manga/:id" element={<MangaInfo />} />
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
