import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import About from "./components/pages/About";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="home-page">
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
