import { useEffect, useState } from "react";
import axios from "axios";

const SearchBar = ({ onSetLocation }) => {
  const [location, setLocation] = useState("");
  const [airports, setAirports] = useState([]);

  const url = `https://api.skypicker.com/locations?term=${location}&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name`;
  const fetchLocation = async () => {
    try {
      const res = await axios.get(url);
      //   console.log(res.data);
      setAirports(res.data.locations);
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setLocation(e.target.value);
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value);
    onSetLocation(e.target.value);
  };
  useEffect(() => {
    fetchLocation();
  }, [location]);
  return (
    <div className="search-bar">
      <input type="text" name="location" onChange={handleInputChange} />
      <select name="airport" id="airport" onChange={handleSelectChange}>
        <option value="0">Please choose one</option>
        {airports.map((item, index) => (
          <option key={index} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      <div className="results"></div>
    </div>
  );
};

export default SearchBar;
