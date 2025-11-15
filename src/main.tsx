import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Rules from './pages/Rules';
import OpenInApp from "./pages/OpenInApp";
import ContactUs from './pages/ContactUs';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/open/:type/:id" element={<OpenInApp />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  </StrictMode>
);