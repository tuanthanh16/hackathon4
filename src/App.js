import { useEffect, useState } from "react";

import "./App.css";

import FlightItem from "./components/FlightItem";


import FlightsDestination from "./components/FlightDestinations";

import Header from "./components/Header";

function App() {
  const [flyFrom, setFlyFrom] = useState('PRG')

  const [flyTo, setFlyTo] = useState('VLC')


  const API_key = "data4youcbp202106";
  const limit = 5;
  const depart_after = "2022-11-06T00:00";
  const sort = "date";

  const url = `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&limit=${limit}&partner=${API_key}`;

  const [data, setData] = useState([]);
  const FetchData = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const results = await response.json();

      setData(results.data);
    } else {
      console.log("fetching failed");
    }
  };

  useEffect(() => {
    FetchData();
  }, [flyFrom, flyTo]);

  let isLoading = true;
  if (data) {
    isLoading = false;
  }






  return (
    <>  <div className="App">

      <Header />

      <FlightsDestination flights={data} setFrom={setFlyFrom} setTo={setFlyTo} />

      {isLoading && <p>Is Loading</p>}

      {!isLoading &&
        data.map((item, index) => <FlightItem key={index} data={item} />)}
    </div>


    </>
  );
}

export default App;
