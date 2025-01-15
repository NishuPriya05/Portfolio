import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav data-aos="fade-down" data-aos-duration="1000">
      <h1>PORTFOLIO</h1>
      <ul className="desktop_menu">
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>Home</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>

      {/* Hamburger icon */}
      <div className="bars" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={`mobilemenu ${isMobileMenuOpen ? "open" : ""}`}>
        <Link to="home" activeClass="active" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>Home</li>
        </Link>
        <Link to="about" activeClass="active" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>About</li>
        </Link>
        <Link to="skills" activeClass="active" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>Skills</li>
        </Link>
        <Link to="projects" activeClass="active" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>Projects</li>
        </Link>
        <Link to="contact" activeClass="active" spy={true} smooth={true} duration={500} onClick={toggleMobileMenu}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
