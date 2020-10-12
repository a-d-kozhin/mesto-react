import React from 'react';
import logo from '../images/logo-2.svg';
import { Link } from 'react-router-dom';
import { Route } from "react-router-dom";


function Header(props) {
  const { email, onLogOut } = props;
  return (
    <header className="header">
      <a href="# " className="link">
        <img src={logo} alt="Логотип проекта Mesto Russia" className="logo logo_place_header" />
      </a>
      <div className="navbar">
        <Route path="/sign-up">
          <Link to="./sign-in" className="button navbar__button">Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link to="./sign-up" className="button navbar__button">Регистрация</Link>
        </Route>
        <Route exact path="/">
          <p className="navbar__email">{email}</p>
          <Link to="./sign-in" onClick={onLogOut} className="button navbar__button navbar__button_type_logout">Выйти</Link>
        </Route>
      </div>
    </header>
  )
}

export default Header;