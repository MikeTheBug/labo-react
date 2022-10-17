import React, { useState } from "react";
import Annonce from "../components/annonce/annonce";
import Champions from "../components/champion/champions";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";

const Home = () => {

  const [championName, setChampionName] = useState("")
  const [championRole, setChampionRole] = useState()

  console.log(championName);
    
  const searchChampion = (c) => {
      setChampionName(c)
      setChampionRole(undefined)
  }

  const roleChampion = (r) => {
      setChampionRole(r)
  }

  return (
    <div>
      <Header/>
      <Annonce/>
      <Menu onSearchUp={searchChampion} role={roleChampion}/>
      <Champions championName={championName} championRole={championRole}/>
    </div>
  );
};

export default Home;
