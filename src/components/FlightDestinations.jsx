import SearchBar from "./SearchBar";

export default function FlightsDestination(props) {
  return (
    <div className="search-content">
      <div className="departure">
        <p>Departures:</p>
        <SearchBar onSetLocation={props.setFrom} />
      </div>

      <div className="destination">
        <p>Destinations:</p>
        <SearchBar onSetLocation={props.setTo} />
      </div>
      <div className="direct-flight">
        <input
          type="checkbox"
          id="direct"
          name="direct"
          onChange={(e) => {
            props.setDirect(e.target.checked);
          }}
        />
        <label htmlFor="direct">Direct Flight</label>
      </div>
    </div>
  );
}
