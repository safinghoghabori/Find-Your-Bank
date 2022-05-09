import { useState, useEffect } from "react";
import axios from "axios";

import BanksListTable from "../components/BanksListTable/BanksListTable";
import NavBar from "../components/NavBar/NavBar";

const WAIT_INTERVAL = 1000;

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("MUMBAI");
  const [selectedCategory, setSelectedCategory] = useState("IFSC");
  const [banksData, setBanksData] = useState([]);
  const [displayedBankData, setDisplayedBankData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    fetchBank();
  }, [selectedCity]);

  //   useEffect(() => {
  //     const delayDebounceFn = setTimeout(() => {
  //       console.log(searchQuery);
  //       // Send Axios request
  //       fetchBank(selectedCity);
  //     }, WAIT_INTERVAL);

  //     return () => clearTimeout(delayDebounceFn);
  //   }, [searchQuery]);

  const fetchBank = async () => {
    setLoading(true);

    try {
      const res = await axios.get(
        `https://vast-shore-74260.herokuapp.com/banks?city=${selectedCity}`
      );
      console.log(res.data);
      setBanksData(res.data);

      // Store data into localStorage
      localStorage.setItem(selectedCity, JSON.stringify(res.data));
    } catch (error) {
      console.log("something went wrong...", error);
    }
  };

  return (
    <>
      <NavBar
        selectedCity={selectedCity}
        selectedCategory={selectedCategory}
        handleCityChange={handleCityChange}
        handleCategoryChange={handleCategoryChange}
        handleSearchQuery={handleSearchQuery}
      />
      <BanksListTable banksData={banksData} loading={loading} />
    </>
  );
};

export default Home;
