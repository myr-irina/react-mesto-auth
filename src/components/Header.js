import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import burgerMenu from '../images/Line.svg';
import closeMenuIcon from '../images/close-icon-mobile.svg';

function Header(props) {
  return (
    <div>
      <MobileMenu
        email={props.email}
        handleLogout={props.onSignOut}
        isMobileMenuOpen={props.isMobileMenuOpen}
      />
      <header className="header page__header">
        <a className="logo" href="#" target="_self" />
        <Switch>
          <Route exact path="/sign-in">
            <Link to="/sign-up" className="header__link">
              Регистрация
            </Link>
          </Route>
          <Route exact path="/sign-up">
            <Link to="/sign-in" className="header__link">
              Войти
            </Link>
          </Route>
          <Route exact path="/">
            <div className="header__user-info">
              <p className="header__email">{props.email}</p>
              <Link
                to="/sign-in"
                className="header__link"
                onClick={props.onSignOut}
              >
                Выйти
              </Link>
            </div>
          </Route>
        </Switch>
        <button
          className="header__burger"
          type="button"
          onClick={props.handleClickOpenMobileMenu}
          style={{
            backgroundImage: `url(${
              props.isMobileMenuOpen ? closeMenuIcon : burgerMenu
            })`,
          }}
        ></button>
      </header>
    </div>
  );
}

export default Header;
