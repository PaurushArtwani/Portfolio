import Card from "react-bootstrap/Card";
const Pricing = () => {
  return (
    <>
      <div className="text-center p-5">
        <p class="section-subtitle-about">How Much I Charge ?</p>
        <h6 class="section-title-about mb-6 text-center">My Pricing</h6>
      </div>
      <div className="row pricing mb-5">
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
      </div>
    </>
  );
};
export default Pricing;
