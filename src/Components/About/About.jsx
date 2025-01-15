import "./About.css";
function About() {
  return (
    <div id="about">
       <center>
        <h1 className="abt">ABOUT</h1>
      </center>
      <div className="leftabout" data-aos="zoom-in" data-aos-duration="1000">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : NISHU PRIYA
              </li>
              <li>
                <span>AGE</span> : 21 YEARS
              </li>
              <li>
                <span>GENDER</span> : FEMALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>EDUCATION</h1>
            <ul>
              <li>
                <span>DEGREE</span> : BTECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE AND ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 8.4
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
