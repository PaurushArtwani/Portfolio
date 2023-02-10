import styled from "styled-components";
import SectionHeading from "../../BuildingBlocks/SectionHeading";
const Contact = () => {
  return (
    <>
      <SectionHeading
        subtitle={"How can you communicate?"}
        title={"Contact Me"}
      ></SectionHeading>

      <form className="contact-form col-md-10 col-lg-8 m-auto">
        <ContactMe className="form-row row">
          <div className="form-group col-sm-6">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div className="form-group col-sm-6">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              required=""
            />
          </div>
        </ContactMe>
        <div className="form-text row">
          <div className="form-group col-sm-12">
            <textarea
              name="comment"
              id="comment"
              rows="10"
              className="form-control"
              placeholder="Write Something"
            ></textarea>
          </div>

          <div className="form-group col-sm-12 mt-3 text-center">
            <input
              type="submit"
              value="Send Message"
              className="btn btn-outline-primary rounded"
            />
          </div>
        </div>
      </form>
    </>
  );
};
const ContactMe = styled.div`
  .form-row > .col,
  .form-row > [className*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  .form-row {
    display: flex;
  }
`;
export default Contact;
