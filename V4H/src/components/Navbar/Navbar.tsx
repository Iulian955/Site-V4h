import React, { useEffect, useRef, useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import images from "../../data/images";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const location = useLocation();
  const { pathname } = useLocation();

  return (
    <div
      className={
        location.pathname === "/advertising" || location.pathname === "/marketing"
          ? styles.advertisingHeader
          : styles.header
      }
    >
      <div className={styles.headerContainer}>
        <HashLink className={styles.logoDiv} to="/">
          <img src={images.homepage.logoAlb} alt="/" />
        </HashLink>

        <nav className={isMenuOpen ? styles.responsiveNavbar : " "}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">IT Services</a>
            </li>
            <li>
              <a href="/marketing">Digital Marketing</a>
            </li>
            <li>
              <a href="/advertising">Street Advertising</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        {isMenuOpen ? (
          <FaTimes className={styles.hamburger} onClick={handleOnClick} />
        ) : (
          <FaBars className={styles.hamburger} onClick={handleOnClick} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
