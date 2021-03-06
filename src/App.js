import "./App.css";
import CountryFetch from "./components/CountryFetch";
import { useState, useEffect } from "react";
import Play from "./components/Play";
import Header from "./components/Header";

function App() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="wrapper__main">
      <Header />
      <Play />
      <div className="container__play">
        <button onClick={handleToggle} className="button__play">
          play
        </button>
      </div>
      <div className={`wrapper ${isActive ? "hidden" : ""}`}>
        <CountryFetch />
      </div>
    </div>
  );
}

export default App;
