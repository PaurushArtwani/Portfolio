import Card from "react-bootstrap/Card";
const Services = () => {
  return (
    <>
      <div className="text-center p-3">
        <p class="section-subtitle-about">What I Do ?</p>
        <h6 class="section-title-about mb-6 text-center">Service</h6>
      </div>
      <div className="row p-5 services">
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
      </div>
    </>
  );
};

export default Services;
