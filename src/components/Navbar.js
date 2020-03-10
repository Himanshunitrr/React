import React from "react";
import { Link, NavLink ,withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper orange darken-3">
      <div className="container">
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar)
