import React, { useState } from "react";
import NavSection from "./Nav";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Portfolio from "../components/pages/Portfolio";
import Resume from "../components/pages/Resume";

function Header() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <NavSection
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </>
  );
}

export default Header;
