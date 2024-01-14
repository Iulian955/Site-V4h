import React, { useEffect, useRef, useState } from "react";
import styles from "../Navbar/Navbar.module.scss";
import images from "../../data/images";
import { FaTimes, FaBars } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [infiintareDropdown, setInfiintareDropdown] = useState(false);
  const [pfaDropdown, setPfaDropdown] = useState(false);
  const [srlDropdown, setSrlDropdown] = useState(false);
  const [acteDropdown, setActeDropdown] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.header}>
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
