import { useState, useEffect } from "react";
import axios from "axios";

import BanksListTable from "../components/BanksListTable/BanksListTable";
import NavBar from "../components/NavBar/NavBar";

const WAIT_INTERVAL = 1000;

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("AHMEDABAD");
  const [selectedCategory, setSelectedCategory] = useState("IFSC");
  const [banksData, setBanksData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isDataFound, setIsDataFound] = useState(true);

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

  useEffect(() => {
    if (searchQuery.length === 0) {
      const isAvailable = localStorage.getItem(selectedCity);
      if (isAvailable === null) {
        fetchBank();
      } else {
        setBanksData(JSON.parse(isAvailable));
      }

      setIsDataFound(true);
    }

    const delayDebounceFn = setTimeout(() => {
      console.log(searchQuery);

      if (searchQuery && searchQuery.length !== 0) {
        filterBanks(selectedCategory, searchQuery);
      }
    }, WAIT_INTERVAL);

    return () => clearTimeout(delayDebounceFn);
  }, [selectedCity, selectedCategory, searchQuery]);

  const fetchBank = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://vast-shore-74260.herokuapp.com/banks?city=${selectedCity}`
      );
      setBanksData(res.data);

      // Cache data into localStorage
      localStorage.setItem(selectedCity, JSON.stringify(res.data));
    } catch (error) {
      console.log("something went wrong...", error);
    }
  };

  const filterBanks = (selectedCategory, searchQuery) => {
    setLoading(true);

    let tempBanks = [];
    if (selectedCategory === "IFSC") {
      tempBanks = banksData?.filter((bank) =>
        bank.ifsc.includes(searchQuery.toUpperCase())
      );
      console.log("ifsc...", tempBanks);
    } else if (selectedCategory === "Branch") {
      tempBanks = banksData?.filter((bank) =>
        bank.branch.includes(searchQuery.toUpperCase())
      );
      console.log("Branch...", tempBanks);
    } else if (selectedCategory === "Bank Name") {
      tempBanks = banksData?.filter((bank) =>
        bank.bank_name.includes(searchQuery.toUpperCase())
      );
      console.log("Bank Name...", tempBanks);
    } else {
      console.log("inside else");
      tempBanks = banksData;
    }
    console.log(tempBanks);

    if (tempBanks.length === 0) {
      setIsDataFound(false);
      setFilteredData([]);
    } else {
      setIsDataFound(true);
    }

    // Set filtered list into state
    setFilteredData(tempBanks);
  };

  // Get current banks list
  const indexOfLastBank = currentPage * banksPerPage;
  const indexOfFirstBank = indexOfLastBank - banksPerPage;
  const currentBanks =
    filteredData.length == 0
      ? banksData.slice(indexOfFirstBank, indexOfLastBank)
      : filteredData.slice(indexOfFirstBank, indexOfLastBank);

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
      {isDataFound ? (
        <BanksListTable
          selectedCity={selectedCity}
          banksData={currentBanks}
          loading={loading}
          banksPerPage={banksPerPage}
          totalBanks={banksData.length}
          handlePageChange={handlePageChange}
        />
      ) : (
        <h1>No data found...</h1>
      )}
    </>
  );
};

export default Home;
