import { Button } from "react-bootstrap";
import "../Maincontainer.css";
import SectionHeading from "../SectionHeading";
const Aboutme = () => {
  return (
    <>
      <div className="row p-5">
        <div className="col-12 col-md-4 about-img-holder">
          <img src="man.png" alt="" />
        </div>
        <div className="col-12 col-md-8 about-caption py-5">
          <SectionHeading
            title={"About Me"}
            subtitle={"Who am I?"}
            align={"center"}
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
      </div>
    </>
  );
};
export default Aboutme;
