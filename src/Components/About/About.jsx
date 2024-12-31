import "./About.css";
function About() {
  return (
    <div id="about">
      <div className="leftabout">
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
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout"></div>
    </div>
  );
}

export default About;
