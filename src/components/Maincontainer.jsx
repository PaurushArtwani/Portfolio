import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbarsection from "./HeaderSection/Navbarsection";
import Introduction from "./Herosection/Introduction";
import Aboutme from "./AboutMe/Aboutme";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Pricing from "./Pricing/Pricing";
import Hiring from "./Hire/Hiring";
import Testmonial from "./Testmonial/Testmonial";
import Blog from "./Blog/Blog";
import Contact from "./ContactMe/Contact";
import Copyright from "./footer/Copyright";

const Maincontainer = () => {
  return (
    <>
      {/* <Navbarsection></Navbarsection> */}

      <Introduction></Introduction>

      <Container fluid>
        <Container>
          <Aboutme></Aboutme>
        </Container>
      </Container>

      <Container>
        <Services></Services>
      </Container>

      <Container>
        <Portfolio></Portfolio>
      </Container>

      <Container>
        <Pricing></Pricing>
      </Container>

      <Container fluid style={{ background: "#695aa6" }}>
        <Container>
          <Hiring></Hiring>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Testmonial></Testmonial>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Blog></Blog>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Contact></Contact>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Copyright></Copyright>
        </Container>
      </Container>
    </>
  );
};

export default Maincontainer;
