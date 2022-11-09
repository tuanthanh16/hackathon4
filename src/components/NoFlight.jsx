import { Card } from "react-bootstrap";
const NoFlight = () => {
  return (
    <Card bg="warning" className="info">
      <Card.Body>
        <Card.Title>Information</Card.Title>
        <Card.Text>No flight had been found</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default NoFlight;
