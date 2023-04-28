import React from "react";
import { Link } from "react-router-dom";
// import '../Header/style.scss';
import './Header.scss';
const Header = () => {
  return (
    <header className="header-container">
      <div className="container">
        <div className="navigate">
          <Link to={"/Issue"} className='link'>Go to Home</Link>
        </div>
        <div className="navigate">
          <Link to={"/Home"} className='link'>View Details</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;