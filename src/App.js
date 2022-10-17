import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Objets from "./pages/Objets";


const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="objets" element={<Objets />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
