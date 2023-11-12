import React from "react";
import $ from "jquery";
import {Link} from 'react-router-dom';
import logo1 from "../img/jaylogo.svg";
import logo2 from "../img/jaylogo.svg";
import '../style.css';
import {motion} from 'framer-motion'
import {withTranslation} from "react-i18next";

import { Icon } from '@iconify/react';
import flagForRomania from '@iconify-icons/emojione/flag-for-romania';

import flagForUnitedKingdom from '@iconify-icons/emojione/flag-for-united-kingdom';

import flagForGermany from '@iconify-icons/emojione/flag-for-germany';

import './navbar.css';


class Navbar extends React.Component {
  constructor() {
    super();
    this.state = { 
      logo: logo1
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });

    $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if (
        window.location.pathname.replace(/^\//, "") ===
          this.pathname.replace(/^\//, "") &&
        window.location.hostname === this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - navHeight + 5
            },
            1000,
            "easeInExpo"
          );
          return false;
        }
      }
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });
  }

  render() {
    const { t, i18n } = this.props;
    const changeLanguage = lng => {          
      i18n.changeLanguage(lng);
    };
    return (
      <nav 
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link to="/" className="nav-brand"
          >
            <motion.img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "150px" }}
              width="1500px"
              height="50px"
            />
          </Link>
          
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
              <Link to="/desprenoi" className="nav-link ">
                  {t('despre_noi')}
                  </Link>
              </li>
              <li className="nav-item">
              <Link to="/contact" className="nav-link ">
                 {t('Contact')}
              </Link>
              </li>
              <li>
                <a href="tel:0040755177060" className="btn btn-primary btn js-scroll px-8" role="button">
                {t('Suna_acum!')}
                </a>
              </li>
              <li>
                <button onClick={() => changeLanguage('ro')} className="buttonlan"><Icon icon={flagForRomania} height="2rem" width="2rem"/></button>
                <button onClick={() => changeLanguage('de')} className="buttonlan"><Icon icon={flagForGermany} height="2rem" width="2rem"/></button>
                <button onClick={() => changeLanguage('en')} className="buttonlan"><Icon icon={flagForUnitedKingdom} height="2rem" width="2rem"/></button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withTranslation()(Navbar);
