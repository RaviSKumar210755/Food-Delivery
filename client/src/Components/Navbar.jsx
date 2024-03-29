import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="fs-4">Food Kart</span>
        </Link>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link ">
              Order
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link ">
              Add
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
