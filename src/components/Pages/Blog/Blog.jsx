import "../../Maincontainer.css";
import { BsHeart, BsChatLeft } from "react-icons/bs";
import SectionHeading from "../SectionHeading";
import styled from "styled-components";

const Blog = () => {
  return (
    <>
      <SectionHeading
        subtitle={"Recent Posts?"}
        title={"Blog"}
      ></SectionHeading>

      <Div className="row blog ">
        <div className="col-md-4 blog-img">
          <img src="img-1.jpg" alt="" />
        </div>
        <div className="col-md-8 blog-content">
          <h5 className="blog-card-title">Consectetur adipisicing elit</h5>
          <p className="blog-card-caption">
            <a>By: Admin</a>
            <a className="social-media-logos" href="#">
              <BsHeart className="heart" />
              &nbsp; 234
            </a>
            <a href="#" className="social-media-logos">
              <BsChatLeft />
              &nbsp;123
            </a>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id
            deleniti. Rerum debitis facilis accusantium neque numquam mollitia
            modi quasi distinctio.
          </p>
          <p>
            <b>
              Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid
              consequuntur repudiandae.
            </b>
          </p>
          <p>
            Magnam in repellat enim harum omnis aperiam! Explicabo illo,
            commodi, dolor blanditiis cupiditate harum nisi vero accusamus
            laudantium voluptatibus dolores quae obcaecati.
          </p>
          <a href="#" class="blog-card-link">
            Read more>>
          </a>
        </div>
      </Div>

      <Div className="row blog ">
        <div className="col-md-4 blog-img">
          <img src="img-2.jpg" alt="" />
        </div>
        <div className="col-md-8 blog-content">
          <h5 className="blog-card-title">Explicabo illo</h5>
          <p className="blog-card-caption">
            <a>By: Admin</a>
            <a className="social-media-logos" href="#">
              <BsHeart className="heart" />
              &nbsp; 234
            </a>
            <a href="#" className="social-media-logos">
              <BsChatLeft />
              &nbsp;123
            </a>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
            nesciunt qui sit velit delectus voluptates, repellat ipsum culpa id
            deleniti. Rerum debitis facilis accusantium neque numquam mollitia
            modi quasi distinctio.
          </p>
          <p>
            <b>
              Necessitatibus nihil impedit! Ex nisi eveniet, dolor aliquid
              consequuntur repudiandae.
            </b>
          </p>
          <p>
            Magnam in repellat enim harum omnis aperiam! Explicabo illo,
            commodi, dolor blanditiis cupiditate harum nisi vero accusamus
            laudantium voluptatibus dolores quae obcaecati.
          </p>
          <a href="#" class="blog-card-link">
            Read more>>
          </a>
        </div>
      </Div>
    </>
  );
};
const Div = styled.div`
  .blog-img img {
    width: 100%;
    height: 100%;
  }
  .blog-img {
    padding: 0px;
  }
  .blog {
    margin-bottom: 20px;
  }
  .blog-card-title {
    font-weight: 100 !important;
    margin-top: 20px;
  }
  .blog {
    border: 1px solid #dee2e6;
  }
  .blog-card-caption {
    margin: 15px 0 15px !important;
  }
  .blog-card-caption a {
    margin-right: 10px;
    color: #444;
    text-decoration: none;
    display: inline-block;
    font-weight: 600;
    opacity: 0.7;
    font-size: 13px;
  }
  .social-media-logos svg path {
    color: red;
    font-size: 23px;
    background: transparent;
  }
  .blog-card-link {
    text-decoration: none;
    margin-top: 20px;
    display: block;
    font-size: 13px;
    color: #444;
  }
`;
export default Blog;
