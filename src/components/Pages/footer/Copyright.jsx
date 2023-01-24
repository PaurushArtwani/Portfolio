import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsPinterest,
  BsInstagram,
  BsFillRssFill,
} from "react-icons/bs";
import styled from "styled-components";

const Copyright = () => {
  return (
    <>
      <Div className="footer row p-4">
        <Div className="col-12 col-md-6">
          <p className="mb-0">
            Copyright 2023 © DevCRUD Distribution ThemeWagon
          </p>
        </Div>
        <Div className="col-12 col-md-6 social-links">
          <Div>
            <a>
              <BsFacebook />
            </a>
            &nbsp;
            <a>
              <BsTwitter />
            </a>
            &nbsp;
            <a>
              <BsGoogle />
            </a>
            &nbsp;
            <a>
              <BsPinterest />
            </a>
            &nbsp;
            <a>
              <BsInstagram />
            </a>
            &nbsp;
            <a>
              <BsFillRssFill />
            </a>
          </Div>
        </Div>
      </Div>
    </>
  );
};
const Div = styled.div`
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
  .social-links a:hover {
    background: #0d6efd;
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
`;
export default Copyright;
