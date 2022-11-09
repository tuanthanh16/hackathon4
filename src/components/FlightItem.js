import { Card } from "react-bootstrap";
import { DateTime } from "luxon";
const FlightItem = ({ data }) => {
  const aTime = DateTime.fromSeconds(data.aTime).toLocaleString(
    DateTime.DATETIME_SHORT
  );
  const dTime = DateTime.fromSeconds(data.dTime).toLocaleString(
    DateTime.DATETIME_SHORT
  );
  return (
    <Card className="flight-item">
      <Card.Img variant="top" src="https://via.placeholder.com/150" />
      <Card.Body>
        <Card.Title className="flight-title">{`Flight : from ${data.cityFrom} to ${data.cityTo}`}</Card.Title>
        <Card.Text>
          {/* <div className="flight-item"> */}
          {/* <p className="title">{`Flight : from ${data.cityFrom} to ${data.cityTo}`}</p> */}

          {data.route && data.route.length > 1 ? (
            data.route.map((route, index) => {
              return data.route.length - 1 != index ? (
                <p>Via: {route.cityTo}</p>
              ) : (
                ""
              );
            })
          ) : (
            <p>Direct</p>
          )}

          <p>Arrival Time: {aTime}</p>
          <p>Departure Time: {dTime}</p>
          <p className="price">Price: EUR {data.price}</p>
        </Card.Text>
        {/* </div> */}
      </Card.Body>
    </Card>
  );
};

export default FlightItem;
