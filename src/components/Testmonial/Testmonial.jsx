import "../Maincontainer.css";
const Testmonial = () => {
  return (
    <>
      <div className="text-center p-5">
        <p class="section-subtitle-about">What Think Client About Me ?</p>
        <h6 class="section-title-about mb-6 text-center">Testmonial</h6>
      </div>

      <div className="row testmonial-section">
        <div className="col-md-6 ">
          <div class="testimonial-card">
            <div class="testimonial-card-img-holder">
              <img src="avatar2.jpg" class="testimonial-card-img" alt="" />
            </div>
            <div class="testimonial-card-body">
              <p class="testimonial-card-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                doloribus autem aperiam earum nostrum omnis blanditiis corporis
                perspiciatis adipisci nihil.
              </p>
              <h6 class="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div class="testimonial-card">
            <div class="testimonial-card-img-holder">
              <img src="avatar3.jpg" class="testimonial-card-img" alt="" />
            </div>
            <div class="testimonial-card-body">
              <p class="testimonial-card-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                doloribus autem aperiam earum nostrum omnis blanditiis corporis
                perspiciatis adipisci nihil.
              </p>
              <h6 class="testimonial-card-title">Emily Reb</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testmonial;
