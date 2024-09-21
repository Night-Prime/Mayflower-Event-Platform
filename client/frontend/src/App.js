import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";
import ErrorBoundary from "./helper/ErrorBoundary";

const Landingpage = lazy(() => import("./page/Landingpage"));
const Booking = lazy(() => import("./page/Booking"));
const Gallery = lazy(() => import("./components/Gallery"));
const Dashboard = lazy(() => import("./page/Dashboard"));
const AdminLogin = lazy(() => import("./page/AdminLogin"));
const Faq = lazy(() => import("./page/Faq"));
const About = lazy(() => import("./components/About"));
const PageNotFound = lazy(() => import("./page/PageNotFound"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Preloader />}>
        <Router>
          <div>
            <ScrollToTop />
            <Routes>
              <Route path="/">
                <Route index element={<Landingpage />} />
                <Route path="booking" element={<Booking />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="about" element={<About />} />
                <Route path="faq" element={<Faq />} />
              </Route>
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
