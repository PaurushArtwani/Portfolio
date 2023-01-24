import Card from "react-bootstrap/Card";
import styled from "styled-components";
import SectionHeading from "../SectionHeading";
const Pricing = () => {
  return (
    <>
      <SectionHeading
        subtitle={"How Much I Charge ?"}
        title={"My Pricing"}
      ></SectionHeading>

      <Div className="row pricing mb-5">
        <div className="col-md-4 pricing-items">
          <Card className="p-4">
            <div className="pricing-card-header text-center">
              <img src="scooter.svg" alt="" />
            </div>

            <div className="pricing-card-body text-center">
              <h6 class="pricing-card-title text-center">Free</h6>
              <div class="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>X</p>
                <p>X</p>
              </div>

              <div class="pricing-card-footer">
                <span>$</span>
                <span>0.00/Month</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary mt-3">
              Subscribe
            </a>
          </Card>
        </div>
        <div className="col-md-4 pricing-items">
          <Card className="p-4">
            <div className="pricing-card-header text-center">
              <img src="scooter.svg" alt="" />
            </div>

            <div className="pricing-card-body text-center">
              <h6 class="pricing-card-title text-center">Basic</h6>
              <div class="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>X</p>
                <p>X</p>
              </div>

              <div class="pricing-card-footer">
                <span>$</span>
                <span>0.00/Month</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary mt-3">
              Subscribe
            </a>
          </Card>
        </div>
        <div className="col-md-4 pricing-items">
          <Card className="p-4">
            <div className="pricing-card-header text-center">
              <img src="scooter.svg" alt="" />
            </div>

            <div className="pricing-card-body text-center">
              <h6 class="pricing-card-title text-center">Premium</h6>
              <div class="pricing-card-list">
                <p>accusamus reprehenderit</p>
                <p>provident dolorem </p>
                <p>quos neque</p>
                <p>fugiat quibusdam</p>
                <p>X</p>
                <p>X</p>
              </div>

              <div class="pricing-card-footer">
                <span>$</span>
                <span>0.00/Month</span>
              </div>
            </div>
            <a href="#" class="btn btn-primary mt-3">
              Subscribe
            </a>
          </Card>
        </div>
      </Div>
    </>
  );
};
const Div = styled.div`
  .pricing-card-header img {
    width: 70px;
    margin-bottom: 25px;
  }
  .pricing-card-title {
    font-size: calc(18px + (35 - 18) * ((100vw - 300px) / (1300 - 300)));
    margin-bottom: 15px;
  }

  .pricing-card-footer {
    margin: 15px 0;
  }
  .pricing-card-footer span:first-child {
    position: relative;
    right: -6px;
    top: -6px;
    font-size: calc(15px + (25 - 15) * ((100vw - 300px) / (1300 - 300)));
  }
  .pricing-card-footer span {
    font-size: calc(18px + (35 - 18) * ((100vw - 300px) / (1300 - 300)));
    font-weight: 600;
    opacity: 0.8;
    margin-right: 5px;
  }
  .pricing-items .card a {
    width: 50%;
    margin: auto;
  }
`;

export default Pricing;
