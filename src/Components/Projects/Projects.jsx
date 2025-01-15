import "./Projects.css";
import ProjetsCard from "../ProjetsCard/ProjetsCard";
import blog from "../../assets/blog.png";

const Projects = () => {
  return (
    <div id="projects">
      <center>
        <h1 className="prjcts">PROJECTS</h1>
      </center>
      <div className="prjctcont" data-aos="flip-right" data-aos-duration="1000">
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
