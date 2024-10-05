import React from "react";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ratnagiri from "./components/Tehsils/Ratnagiri";
import Tehsil from "./components/Tehsils/Tehsil";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ratnagiri" element={<Ratnagiri/>}/>
        </Routes>
        
      </Router>
    </>
  );
}

export default App;

{
  /* <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tehsils" element={<Tehsil />} />
        <Route path="/beaches" element={<Beaches />} />
        <Route path="/temples" element={<Temples />} />
      </Routes> */
}
