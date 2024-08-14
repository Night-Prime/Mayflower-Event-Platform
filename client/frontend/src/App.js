import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./page/LandingPage";
import { Navbar } from "./components/navbar";
import {  Footer } from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
