import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <div className="navbar-brand">
        <a
          href="#about"
          onClick={() => props.handlePageChange("About")}
          className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          Shayla Stevenson
        </a>

        
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
         </button>
      </div>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">  
      <ul className="navbar-nav">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => props.handlePageChange("About")}
            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Navbar;
