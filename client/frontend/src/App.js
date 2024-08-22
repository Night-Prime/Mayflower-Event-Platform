import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landingpage } from "./page/Landingpage";
import { Booking } from "./page/Booking";
import { Gallery } from "./components/Gallery";
import Dashboard from "./page/Dashboard";
import PageNotFound from "./page/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";
import AdminLogin from "./page/AdminLogin";

function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route exact path="/">
            <Route index element={<Landingpage />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
