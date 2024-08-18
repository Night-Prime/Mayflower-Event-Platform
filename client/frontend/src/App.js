import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./page/LandingPage";
import AdminPage from "./page/AdminPage";
import Dashboard from "./page/Dashboard";
import PageNotFound from "./page/PageNotFound";
import StoreTokenForm from "./helper/StoreToken";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/">
            <Route index element={<LandingPage />} />
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
