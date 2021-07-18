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

      <div className="container__play">
        <button onClick={handleToggle} className="button__play">
          {isActive ? "play" : "back to library"}
        </button>
      </div>
      <div className={`wrapper ${isActive ? "" : "hidden"}`}>
        <CountryFetch />
      </div>
      <div className={`wrapper__play ${isActive ? "hidden" : ""}`}>
        <Play />
      </div>
    </div>
  );
}

export default App;
