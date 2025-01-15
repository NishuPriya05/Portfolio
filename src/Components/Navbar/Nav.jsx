import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Nav.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  
  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" }
  ];

  return (
    <nav data-aos="fade-down" data-aos-duration="1000">
      <h1>PORTFOLIO</h1>
      {/* Desktop menu */}
      <ul className="desktop_menu">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
          >
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>

      {/* Hamburger icon */}
      <div className="bars" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={`mobilemenu ${isMobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            onClick={toggleMobileMenu} 
          >
            <li>{item.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
