import './Projects.css'
import ProjetsCard from '../ProjetsCard/ProjetsCard';
import css from '../../assets/css.png'

const Projects = () => {
  return (
    <div id="projects">
      <center>
         <h1 className="prjcts">PROJECTS</h1>
      </center>
      <div className='prjctcont' data-aos="flip-right" data-aos-duration="1000">
      <ProjetsCard title="blogging" image={css} main="lorem10dsjhjhsfi,hj,sn,kjsdfhlsuikfdhndns"/>
     
      <ProjetsCard title="blogging" image={css} main="lorem10dsjhjhsfi,hj,sn,kjsdfhlsuikfdhndns"/>
     
      <ProjetsCard title="blogging" image={css} main="lorem10dsjhjhsfi,hj,sn,kjsdfhlsuikfdhndns"/>
      </div>
    </div>
  );
};

export default Projects;
