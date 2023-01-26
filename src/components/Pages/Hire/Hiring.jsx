import styled from "styled-components";

const Hiring = () => {
  return (
    <>
      <Hire className="row align-items-center hiring">
        <div class="row align-items-center">
          <div class="col-sm offset-md-1 mb-4 mb-md-0">
            <h6 class="title text-light">Want to work with me?</h6>
            <p class="m-0 text-light">
              Always feel Free to Contact &amp; Hire me
            </p>
          </div>
          <div class="col-sm offset-sm-2 offset-md-3 hire-button">
            <button class="btn btn-lg my-font btn-light rounded">
              Hire Me
            </button>
          </div>
        </div>
      </Hire>
      ;
    </>
  );
};

const Hire = styled.div`
  .hiring {
    margin: auto;
    text-align: center;
  }
  .hiring p,
  h6 {
    text-align: justify;
  }
  .hire-button {
    text-align: justify;
  }
`;
export default Hiring;
