import Card from "react-bootstrap/Card";
const Portfolio = () => {
  return (
    <>
      <div className="text-center p-3">
        <p class="section-subtitle-about">What I Do ?</p>
        <h6 class="section-title-about mb-6 text-center">Portfolio</h6>
      </div>

      <div className="row p-5">
        <div className="col-md-4 portfolio-card">
          <Card>
            <img src="folio-1.jpg" alt="" />
          </Card>
        </div>
        <div className="col-md-4 portfolio-card">
          <Card>
            <img src="folio-2.jpg" alt="" />
          </Card>
        </div>
        <div className="col-md-4 portfolio-card">
          <Card>
            <img src="folio-3.jpg" alt="" />
          </Card>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
