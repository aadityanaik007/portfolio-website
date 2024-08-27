import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assests/logo.png';
import contact from '../../assests/contact.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="navbar__menu">
        <Link
          className="navbar__item"
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Home
        </Link>
        <Link
          className="navbar__item"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          About
        </Link>
        <Link
          className="navbar__item"
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Experience
        </Link>
        <Link
          className="navbar__item"
          activeClass="active"
          to="certifications"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Certification
        </Link>
        <Link
          className="navbar__item"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          Portfolio
        </Link>
      </div>

      {/* Contact Button */}
      <div className="navbar__contact">
        <button
          className="contact__button"
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img src={contact} alt="Contact" className="contact__icon" />
          Contact Me
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="navbar__toggle" onClick={toggleMobileMenu}>
        <span className={`bar ${isMobileMenuOpen ? 'bar1' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'bar2' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'bar3' : ''}`}></span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile-menu ${
          isMobileMenuOpen ? 'navbar__mobile-menu--active' : ''
        }`}
      >
        <Link
          className="navbar__mobile-item"
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleMobileMenu}
        >
          Home
        </Link>
        <Link
          className="navbar__mobile-item"
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleMobileMenu}
        >
          About
        </Link>
        <Link
          className="navbar__mobile-item"
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleMobileMenu}
        >
          Experience
        </Link>
        <Link
          className="navbar__mobile-item"
          activeClass="active"
          to="certifications"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleMobileMenu}
        >
          Certification
        </Link>
        <Link
          className="navbar__mobile-item"
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={toggleMobileMenu}
        >
          Portfolio
        </Link>
        <button
          className="contact__button" /* Apply the same class here */
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' });
            toggleMobileMenu();
          }}
        >
          <img src={contact} alt="Contact" className="contact__icon" />
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
