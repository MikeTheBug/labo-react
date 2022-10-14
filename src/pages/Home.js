import React, { useState } from "react";
import Annonce from "../components/annonce/annonce";
import Champions from "../components/champion/champions";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";

const Home = () => {

  const [championName, setChampionName] = useState("")

  console.log(championName);
    
  const searchChampion = (c) => {
      setChampionName(c)
  }

  return (
    <div>
      <Header/>
      <Annonce/>
      <Menu onSearchUp={searchChampion}/>
      <Champions championName={championName}/>
    </div>
  );
};

export default Home;
