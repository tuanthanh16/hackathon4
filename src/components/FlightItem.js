import { DateTime } from "luxon";
const FlightItem = ({ data }) => {
  const aTime = DateTime.fromSeconds(data.aTime).toISO();
  const dTime = DateTime.fromSeconds(data.dTime).toISO();
  return (
    <div className="flight-item">
      <p className="title">{`Flight : from ${data.flyFrom} to ${data.flyTo}`}</p>

      <p>Arrival Time: {aTime}</p>
      <p>Departure Time: {dTime}</p>
      <p className="price">Price: EUR {data.price}</p>
    </div>
  );
};

export default FlightItem;
