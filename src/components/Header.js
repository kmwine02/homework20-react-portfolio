import React, { useState } from "react";
import NavSection from "./Nav";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Resume from "../components/pages/Resume";

function Header() {
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
    <div className="header">
      <NavSection
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default Header;
