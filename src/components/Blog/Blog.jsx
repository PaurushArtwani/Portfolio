import "../Maincontainer.css";
import { BsHeart, BsChatLeft } from "react-icons/bs";

const Blog = () => {
  return (
    <>
      <div className="text-center p-5">
        <p class="section-subtitle-about">Recent Posts?</p>
        <h6 class="section-title-about mb-6 text-center">Blog</h6>
      </div>

      <div className="row blog ">
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
      </div>

      <div className="row blog ">
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
      </div>
    </>
  );
};
export default Blog;
