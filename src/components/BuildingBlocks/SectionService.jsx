import Card from "react-bootstrap/Card";
const SectionService = (props) => {
  return (
    <Card>
      <Card.Body>
        <img src={props.serviceimage} alt="" />
        <h6 className="tittle text-center">{props.tittle}</h6>
      </Card.Body>
    </Card>
  );
};

export default SectionService;
