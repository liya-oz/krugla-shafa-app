import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BasketProvider } from "./context/BasketContext"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Catalogue from "./pages/Catalogue";
import Purchased from "./pages/Purchased"; 
import Contact from "./pages/Contact";
import About from "./pages/About";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <Router>
        <BasketProvider> 
          <ErrorBoundary>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/purchased" element={<Purchased />} /> 
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </ErrorBoundary>
        </BasketProvider>
    </Router>
  );
}

export default App;
