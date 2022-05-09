import { useState, useEffect, useCallback } from "react";

import BanksListTable from "../components/BanksListTable/BanksListTable";
import NavBar from "../components/NavBar/NavBar";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("MUMBAI");
  const [selectedCategory, setSelectedCategory] = useState("IFSC");
  const [banksData, setBanksData] = useState([]);
  const [displayedBankData, setDisplayedBankData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchQuery = (query) => {
    console.log(query);
    setSearchQuery(query);
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
      <BanksListTable />
    </>
  );
};

export default Home;
