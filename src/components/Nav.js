import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/mangakyu-logo.svg";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

function Nav() {
  function openMenu() {
    document.body.classList += " menu--open";
  }
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={Logo} className="logo click" alt="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/browse/Manga" className="nav__link link__hover">
              Browse Manga
            </Link>
          </li>
          <li className="nav__list click">
            <Link to="/" className="nav__link nav__link--btn no-cursor">
              Contact
            </Link>
          </li>
        </ul>
        <button className="btn__menu" onClick={openMenu}>
          <MenuIcon />
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close">
            <XIcon onClick={closeMenu} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link
                to="/browse/Manga"
                className="menu__link"
                onClick={closeMenu}
              >
                Browse Manga
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__link no-cursor" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
