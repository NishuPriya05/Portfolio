import "./Projects.css";
import ProjetsCard from "../ProjetsCard/ProjetsCard";
import blog from "../../assets/blog.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    gsap.from(".prjcts", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".prjcts",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
    gsap.from(".prjctcont", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".prjctcont",
        scroll: "body",
        scrub: 2,
        start: "top 80%",
        end: "top 20%",
      },
    });
  });
  return (
    <div id="projects">
      <center>
        <h1 className="prjcts">PROJECTS</h1>
      </center>
      <div className="prjctcont">
        <ProjetsCard
          title="Mega Blog"
          image={blog}
          main="Developed a dynamic blog application using React and Appwrite, featuring user authentication, real-time post creation with a rich text editor, and seamless functionality for adding and managing content. Integrated Appwrite's backend services for secure and efficient data handling."
          demoLink="https://techworld-blog.netlify.app/"
          sourceCode="https://github.com/NishuPriya05/Mega-Blog"
        />
      </div>
    </div>
  );
};

export default Projects;
