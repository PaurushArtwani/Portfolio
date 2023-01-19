import { Button } from "react-bootstrap";
import "../Maincontainer.css";
<link
  href="https://fonts.googleapis.com/css?family=Bungee+Inline"
  rel="stylesheet"
></link>;
const Introduction = () => {
  return (
    <>
      <div className="row hero-section">
        <div className="col-12 col-md-12  p-5">
          <div className="my-introduction">
            <span className="up">HI!</span>
            <span className="down">I am Paurush</span>
            <span className="down">Artwani</span>
            <span className="header-subtitle">FRONTEND WEB DESIGNER</span>
            <div>
              <Button className="my-works" type="primary">
                Visit My Works
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Introduction;
