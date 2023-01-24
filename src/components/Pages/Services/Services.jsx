import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
const Services = () => {
  return (
    <>
      <SectionHeading
        subtitle={"What I Do ?"}
        title={"Service"}
      ></SectionHeading>

      <Div className="row p-5 services">
        <div className="col-md-6 col-lg-3 services-items">
          <Card>
            <Card.Body>
              <img src="pencil-case.svg" alt="" />
              <h6 className="tittle text-center">Adipisicing</h6>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 services-items">
          <Card>
            <Card.Body>
              <img src="responsive.svg" alt="" />
              <h6 className="tittle text-center">Sapiente</h6>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 services-items">
          <Card>
            <Card.Body>
              <img src="toolbox.svg" alt="" />
              <h6 className="tittle text-center">Placeat</h6>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-lg-3 services-items">
          <Card>
            <Card.Body>
              <img src="analytics.svg" alt="" />
              <h6 className="tittle text-center">Iusto</h6>
              <p className="service-description">The is the description</p>
            </Card.Body>
          </Card>
        </div>
      </Div>
    </>
  );
};
const Div = styled.div`
  .services-items img {
    margin-top: 40px;
    width: 55px;
    margin-bottom: 25px;
    transition: all 0.65s ease-in;
  }
  .services-items .card-body {
    text-align: center;
  }
  .services-items .card {
    position: relative;
    min-height: 230px;
    border: 1px solid #dee2e6;
    overflow: hidden;
    border-radius: 3px;
  }
  .tittle {
    font-size: calc(15px + (20 - 15) * ((100vw - 300px) / (1300 - 300)));
  }

  .service-description {
    background-color: #fff;
    position: absolute;
    bottom: -100%;
    transition: all 0.65s ease-in;
  }

  .services-items .card:hover .service-description {
    bottom: 0;
  }

  .services-items:hover img {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
export default Services;
