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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae aliquid ad provident aut fuga animi soluta quae eos non
            cupiditate voluptates dolorem, doloremque quos dicta quibusdam
            impedit iure nemo a iste <br />
            culpa! Quasi quibusdam hic recusandae delectus velit officiis
            explicabo voluptatibus! Nemo esse similique, voluptates labore
            distinctio, placeat explicabo facilis molestias, blanditiis culpa
            iusto voluptatem ratione eligendi a, quia temporibus velit vero ipsa
            sint ex voluptatum expedita aliquid! Debitis, nam!
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
