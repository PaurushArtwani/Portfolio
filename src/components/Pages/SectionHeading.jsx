import styled from "styled-components";

const SectionHeading = (props) => {
  return (
    <div className="py-5">
      <SectionHeadingContainer align={props.align}>
        <p class="section-subtitle-about ">{props.subtitle}</p>
        <h6 class="section-title-about mb-6">{props.title}</h6>
      </SectionHeadingContainer>
    </div>
  );
};

export default SectionHeading;

const SectionHeadingContainer = styled.div`
  text-align: ${(props) =>
    props.align && props.align === "left" ? "left" : "center"};
  .section-subtitle-about {
    margin-bottom: 6px;
    font-weight: 400;
    opacity: 0.6;
  }
  .section-title-about {
    font-size: calc(20px + (35 - 20) * ((100vw - 300px) / (1300 - 300)));
    font-weight: 1000;
    font-family: "Baloo Paaji", cursive;
    color: #695aa6;
  }
`;
