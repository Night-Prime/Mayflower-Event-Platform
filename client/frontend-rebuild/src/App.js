import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./helper/Errorboundary";
import Preloader from "./components/Preloader";
import LandingPage from "./components/Landingpage";
import Memories from "./components/Memories";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <Router>
          <Routes>
            <Route path="/">
              <Route index element={<LandingPage />} />
              <Route path="memories" element={<Memories />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
