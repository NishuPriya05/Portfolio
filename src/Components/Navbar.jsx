import { Link } from "react-scroll";
import "../index.css";
const Navbar = () => {
  return (
    <>
      <div className="container nav_bar">
        <div className="left my_item">PORTFOLIO</div>
        <div className="right">
          <ul>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
