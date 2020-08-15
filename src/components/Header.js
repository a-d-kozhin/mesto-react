import React from 'react';
import logo from '../images/logo-2.svg';

function Header() {
  return (
    <header className="header">
      <a href="#" className="link">
        <img src={logo} alt="Логотип проекта Mesto Russia" className="logo logo_place_header" />
      </a>
    </header>
  );
}

export default Header;