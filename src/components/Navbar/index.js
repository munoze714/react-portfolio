import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


function Navbar() {

  return (
    <nav>
      <Link to="/">
        Portfolio
      </Link>
      <div>
        <ul>
          <li>
            <Link
              to="/">
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
