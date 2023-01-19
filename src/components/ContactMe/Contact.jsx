const Contact = () => {
  return (
    <>
      <div className="text-center p-5">
        <p class="section-subtitle-about">How can you communicate?</p>
        <h6 class="section-title-about mb-6 text-center">Contact Me</h6>
      </div>
      <form className="contact-form col-md-10 col-lg-8 m-auto">
        <div className="form-row">
          <div className="form-group col-sm-6">
            <input
              type="text"
              class="form-control"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div className="form-group col-sm-6">
            <input
              type="email"
              class="form-control"
              placeholder="Enter Email"
              required=""
            />
          </div>
        </div>
        <div className="form-text row">
          <div className="form-group col-sm-12">
            <textarea
              name="comment"
              id="comment"
              rows="10"
              class="form-control"
              placeholder="Write Something"
            ></textarea>
          </div>

          <div class="form-group col-sm-12 mt-3 text-center">
            <input
              type="submit"
              value="Send Message"
              class="btn btn-outline-primary rounded"
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default Contact;
