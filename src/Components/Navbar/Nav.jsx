import { Link } from "react-scroll";
import "./Nav.css";
const Navbar = () => {
  return (
    <nav data-aos="fade-down" data-aos-duration="1000">
      <h1>PORTFOLIO</h1>
      <ul className="desktop_menu">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Home</li>
        </Link>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>About</li>
        </Link>
        <Link
          to="skills"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Skills</li>
        </Link>
        <Link
          to="projects"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Projects</li>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          duration={500}
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
