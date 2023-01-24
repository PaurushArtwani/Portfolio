import Card from "react-bootstrap/Card";
import SectionHeading from "../SectionHeading";
const Portfolio = () => {
  return (
    <>
      <SectionHeading
        subtitle={"What I Do ?"}
        title={"Portfolio"}
      ></SectionHeading>

      {/* <div className="text-center p-3">
        <p class="section-subtitle-about"></p>
        <h6 class="section-title-about mb-6 text-center"></h6>
      </div> */}

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
