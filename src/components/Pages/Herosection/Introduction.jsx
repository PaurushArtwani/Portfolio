import { Button } from "react-bootstrap";
import styled from "styled-components";
import "../../Maincontainer.css";
import "../../../style/color.css";

const Introduction = () => {
  return (
    <>
      <div
        className="row hero-section"
        style={{
          backgroundImage: `url("header.jpg")`,
          height: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-12 col-md-12  p-5">
          <MyIntroduction className="my-introduction">
            <span className="up">HI!</span>
            <span className="down">I am Paurush</span>
            <span className="down">Artwani</span>
            <span className="header-subtitle">FRONTEND WEB DESIGNER</span>
            <div>
              <Button className="my-works" type="primary">
                <a
                  href="mailto:paurushartwani09@hmail.com"
                  className="custom-button"
                >
                  Email Me
                </a>
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button className="my-works" type="primary">
                <a href="tel:+917023933047" className="custom-button">
                  Call Me
                </a>
              </Button>
            </div>
          </MyIntroduction>
        </div>
      </div>
    </>
  );
};

const MyIntroduction = styled.div`
  max-width: 550px;
  padding-top: 10%;
  padding-bottom: 10%;
  color: white;
  margin: auto;

  .up {
    font-size: 70px;
    font-weight: 1000;
    color: var(--heading);
    margin-bottom: 5px;
    position: relative;
    display: block;
    font-family: "Baloo Paaji ", cursive;
    opacity: 0.8;
  }
  .down {
    font-size: 70px;
    margin-bottom: 0;
    position: relative;
    display: block;
    font-weight: 1000;
    opacity: 0.8;
    font-family: "Baloo Paaji ", cursive;
    color: var(--heading);
  }
  .header-subtitle {
    letter-spacing: 0.4em;
    font-size: 25px;
    opacity: 0.8;
    margin-top: -10px;
    margin-bottom: 20px;
    font-weight: 100;
    color: var(--heading);
  }
  .hero-section {
    background-image: url(header.jpg);
  }
  .my-works {
    position: relative;
    margin-top: 20px;
    border-radius: 20px;
    padding: 8px 15px;
  }
  .custom-button {
    color: white !important;
    text-decoration: none;
  }
`;

export default Introduction;
