import { Button } from "react-bootstrap";
import styled from "styled-components";
import "../../Maincontainer.css";
import SectionHeading from "../../BuildingBlocks/SectionHeading";
const Aboutme = () => {
  return (
    <>
      <AboutMe className="row p-5">
        <div className="col-12 col-md-4 about-img-holder">
          <img src="man.png" alt="" />
        </div>
        <div className="col-12 col-md-8 about-caption py-5">
          <SectionHeading
            title={"About Me"}
            subtitle={"Who am I?"}
            align="left"
          ></SectionHeading>
          <p className="section-description-about">
            My name is Paurush Artwani, I am a computer technician with a great
            passion for programming. I am passionate about delivering solutions
            that add to people's lives and at the same time challenge me.
            Improved my skills as a Front-End Developer. I develop websites and
            applications using React, HTML, CSS, and JavaScript. I am familiar
            with developing layouts that are provided to me. I'm always
            improving myself with each project put in my hands. I am a dedicated
            person who pursues his dreams, hardworking and results oriented, I
            always seek to achieve my best version.
          </p>
          <div>
            <Button>Download CV</Button>
          </div>
        </div>
      </AboutMe>
    </>
  );
};
const AboutMe = styled.div`
  .about-img-holder img {
    width: 100%;
  }

  .section-description-about {
    font-size: 1em;
    font-weight: 100;
    opacity: 1;
    color: #111;
    letter-spacing: 0.6px;
  }
  .about-caption button {
    border-radius: 100px;
    background: transparent;
    color: #695aa6;
  }
`;
export default Aboutme;
