import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/admin">Admin Dashboard</Link>
          </li>
          <li>
            <Link to="/borrower">Borrower Dashboard</Link>
          </li>
          <li>
            <Link to="/lender">Lender Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
