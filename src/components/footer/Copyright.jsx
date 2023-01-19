import {
  BsFacebook,
  BsTwitter,
  BsGoogle,
  BsPinterest,
  BsInstagram,
  BsFillRssFill,
} from "react-icons/bs";

const Copyright = () => {
  return (
    <>
      <div className="footer row p-4">
        <div className="col-12 col-md-6">
          <p className="mb-0">
            Copyright 2023 © DevCRUD Distribution ThemeWagon
          </p>
        </div>
        <div className="col-12 col-md-6 social-links">
          <div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Copyright;
