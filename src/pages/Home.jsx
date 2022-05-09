import { useState, useEffect } from "react";
import axios from "axios";

import BanksListTable from "../components/BanksListTable/BanksListTable";
import NavBar from "../components/NavBar/NavBar";

const WAIT_INTERVAL = 1000;

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("AHMEDABAD");
  const [selectedCategory, setSelectedCategory] = useState("IFSC");
  const [banksData, setBanksData] = useState([]);
  const [displayedBankData, setDisplayedBankData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [banksPerPage, setBanksPerPage] = useState(10);

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
    const isAvailable = localStorage.getItem(selectedCity);

    if (isAvailable === null) {
      fetchBank();
    } else {
      setBanksData(JSON.parse(isAvailable));
    }
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
      setBanksData(res.data);

      // Store data into localStorage
      localStorage.setItem(selectedCity, JSON.stringify(res.data));
    } catch (error) {
      console.log("something went wrong...", error);
    }
  };

  // Get current banks list
  const indexOfLastBank = currentPage * banksPerPage;
  const indexOfFirstBank = indexOfLastBank - banksPerPage;
  const currentBanks = banksData.slice(indexOfFirstBank, indexOfLastBank);

  const handlePageChange = (number) => setCurrentPage(number);

  return (
    <>
      <NavBar
        selectedCity={selectedCity}
        selectedCategory={selectedCategory}
        handleCityChange={handleCityChange}
        handleCategoryChange={handleCategoryChange}
        handleSearchQuery={handleSearchQuery}
      />
      <BanksListTable
        banksData={currentBanks}
        loading={loading}
        banksPerPage={banksPerPage}
        totalBanks={banksData.length}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Home;
