import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Nav";
import "./index.css";

import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    Aos.init();
    
  }, [])
  
  return (
    <>
    
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
    </>
  );
};

export default App;
