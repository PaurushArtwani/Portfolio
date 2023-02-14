import { BsFacebook, BsGoogle, BsLinkedin, BsInstagram } from "react-icons/bs";
import styled from "styled-components";

const Copyright = () => {
  return (
    <>
      <Footer className="footer row p-4">
        <Footer className="col-12 col-md-6">
          <p className="mb-0">Copyright 2023 © Paurush Artwani</p>
        </Footer>
        <Footer className="col-12 col-md-6 social-links">
          <Footer>
            <a
              classname="social"
              target={"_blank"}
              href="https://www.facebook.com/people/Paurush-Artwani/pfbid0Q6zvzkYCdbzufnuktnkkKWm6Qt2M9euCX2yNpqA4MikDcQWhkWgBPMNNpJFTXtRRl/"
            >
              <BsFacebook />
            </a>
            &nbsp;
            <a
              classname="social"
              target={"_blank"}
              href="https://www.instagram.com/paurush_artwani09/"
            >
              <BsInstagram />
            </a>
            &nbsp;
            <a
              classname="social"
              target={"_blank"}
              href="https://www.linkedin.com/in/paurush-artwani-930648200/?trk=public_profile_browsemap_profile-result-card_result-card_full-click&originalSubdomain=in"
            >
              <BsLinkedin />
            </a>
            &nbsp;
          </Footer>
        </Footer>
      </Footer>
    </>
  );
};
const Footer = styled.div`
  .footer .social-links a {
    padding: 9px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
    border: 2px solid #6c757d;
    color: #6c757d;
  }

  .social-links {
    text-align: end;
  }
  .footer {
    border-top: 2px solid #44444426;
  }
  .footer p {
    font-size: 23px;
    text-align: center;
  }
  .social {
    text-decoration: none;
    color: black;
  }
`;
export default Copyright;
