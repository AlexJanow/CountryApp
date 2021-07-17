import "./App.css";
import CountryFetch from "./components/CountryFetch";
import { useState, useEffect } from "react";
import { div } from "prelude-ls";

function App() {
  return (
    <div>
      <CountryFetch />
    </div>
  );
}

export default App;
