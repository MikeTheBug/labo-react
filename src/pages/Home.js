import React from "react";
import Annonce from "../components/annonce/annonce";
import Champions from "../components/champion/champions";
import Header from "../components/header/header";
import SearchBar from "../components/searchbar/search-bar";

const Home = () => {
  return (
    <div>
      <Header/>
      <Annonce/>
      <SearchBar/>
      <Champions/>
    </div>
  );
};

export default Home;
