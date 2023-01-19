const SectionHeading = ({ subtitle, title, align }) => {
  return (
    <div
      className="py-5"
      style={{
        textAlign: align === "center" ? "center !important" : "left !important",
      }}
    >
      <p class="section-subtitle-about">{subtitle}</p>
      <h6 class="section-title-about mb-6">{title}</h6>
    </div>
  );
};

export default SectionHeading;
