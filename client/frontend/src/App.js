import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landingpage } from "./page/Landingpage";
import { Booking } from "./page/Booking";
import { Gallery } from "./components/Gallery";
import AdminPage from "./page/AdminPage";
import Dashboard from "./page/Dashboard";
import PageNotFound from "./page/PageNotFound";
import StoreTokenForm from "./helper/StoreToken";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
