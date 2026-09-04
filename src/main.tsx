import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import App from "./App.tsx";
import CaseStudy from "./pages/CaseStudy.tsx";
import "./index.css";

// Handles two things React Router doesn't do automatically:
// scrolling to a #section on the homepage after navigating from another
// page, and scrolling to the top on a plain page change.
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Wait a tick so the target page has rendered before scrolling.
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
