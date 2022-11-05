import { useEffect, useState } from "react";

import "./App.css";

import FlightItem from "./components/FlightItem";
import Layout from "./components/Layout";

import FlightsDestination from "./components/FlightDestinations";
import MyPagination from "./components/MyPagination";

import Header from "./components/Header";

function App() {
  const [flyFrom, setFlyFrom] = useState("PRG");
  const [flyTo, setFlyTo] = useState("VLC");
  const [direct_flights, setDirectFlight] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageData, setPageData] = useState([]);

  const API_key = "data4youcbp202106";
  const limit = 15;
  const depart_after = "2022-11-06T00:00";
  const sort = "date";

  const url = `https://api.skypicker.com/flights?fly_from=${flyFrom}&fly_to=${flyTo}&direct_flights=${direct_flights}&limit=${limit}&partner=${API_key}`;

  // this function to set data show in page
  const setDisplayData = (page) => {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + 5;
    setPageData(data.slice(startIndex, endIndex));
    console.log(pageData);
  };
  const FetchData = async () => {
    const response = await fetch(url);
    if (response.ok) {
      const results = await response.json();

      setData(results.data);
      setTotalPage(Math.floor(results.data.length / 5));
      setPageData(results.data.slice(0, 5));
      console.log(pageData);
      // console.log(totalPage);
    } else {
      console.log("fetching failed");
    }
  };

  useEffect(() => {
    FetchData();
  }, [flyFrom, flyTo, direct_flights]);

  let isLoading = true;
  if (data) {
    isLoading = false;
  }

  const handleChangePage = (page) => {
    // console.log(`clicked ${page}`);
    setPage(page);
    setDisplayData(page);
  };
  return (
    <>
      <div className="App">
        {/* <Header /> */}
        <h1>Super duper flight</h1>

        <FlightsDestination
          flights={data}
          setFrom={setFlyFrom}
          setTo={setFlyTo}
          setDirect={setDirectFlight}
        />

        {isLoading && <p>Is Loading</p>}
        {!isLoading &&
          pageData.length > 0 &&
          pageData.map((item, index) => <FlightItem key={index} data={item} />)}
        <MyPagination
          totalPage={totalPage}
          currentPage={page}
          onChangePage={handleChangePage}
        />
      </div>
    </>
  );
}

export default App;
