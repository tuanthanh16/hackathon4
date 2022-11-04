export default function FlightsDestination(props) {
  return (
    <>
      <div className="departure">
        <h1>Departures:</h1>
        <select
          onChange={(e) => {
            props.setFrom(e.target.value);
          }}
          name="departure"
          id=""
        >
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </select>
      </div>

      <div className="destination">
        <h1>Destinations:</h1>
        <select
          onChange={(e) => {
            props.setTo(e.target.value);
          }}
          name="destination"
          id=""
        >
          <option value="VLC">Valencia</option>
          <option value="MAD">Madrid</option>
          <option value="MXP">Milano</option>
          <option value="ATH">Athens</option>
        </select>
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

      {/* {console.log(props.flights)} */}
    </>
  );
}
