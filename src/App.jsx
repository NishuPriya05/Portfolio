import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Nav";
import "./index.css";

import Skills from "./Components/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />

      <Skills />
    </>
  );
};

export default App;
