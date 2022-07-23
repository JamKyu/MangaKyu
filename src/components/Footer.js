import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/mangakyu-logo.svg";

function Footer() {
  return (
    <footer>
      <div className="row row__column">
        <Link to="/">
          <figure className="footer__logo click">
            <img src={Logo} alt="" className="footer__logo--img" />
          </figure>
        </Link>
        <div className="footer__list">
          <Link to="/Browse" className="footer__link link__hover">
            Manga
          </Link>
          <Link to="" className="footer__link link__hover no-cursor">
            Contact
          </Link>
        </div>
        <div className="footer__copyright">&copy; 2022 MangaKyu</div>
      </div>
    </footer>
  );
}

export default Footer;
