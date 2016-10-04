import React from 'react';
import { Link } from 'react-router';

const Header = (props) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to="/" activeClassName="active">Home</Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
