import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./page/LandingPage";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Booking } from "./page/Booking";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<LandingPage />} />
            <Route path="/booking" element={<Booking />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
