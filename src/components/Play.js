import React from "react";
import "./Play.css";
import { useState, useEffect } from "react";

export default function Play() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const numArray = Array.from(Array(250).keys());
  const randomNumber = Math.floor(Math.random() * numArray.length);

  const [isActive, setActive] = useState("false");

  const handleClickNew = () => {
    setActive(!isActive);
  };

  function NewCountry(isActive) {
    if (isActive) {
      return items
        .filter((item) => item.name === items[randomNumber].name)
        .map((item) => (
          <li>
            <article className="card" key={item.callingCodes}>
              <div className="card-image">
                <img src={item.flag} alt={item.name} />
              </div>
              <div className="card-content">
                <h2 className="card-name">{item.name}</h2>
                <ol className="card-list">
                  <li>
                    population: <span>{item.population}</span>
                  </li>
                  <li>
                    Region: <span>{item.region}</span>
                  </li>
                  <li>
                    Capital: <span>{item.capital}</span>
                  </li>
                </ol>
              </div>
            </article>
          </li>
        ));
    }
  }

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>loading...</>;
  } else {
    return (
      /* here we map over the element and display each item as a card  */
      <div className="wrapper">
        <div className="div__button__newCard">
          <button className="button__newCard" onClick={handleClickNew}>
            new card
          </button>
        </div>
        <div className="newCard">
          <ul className="ul__NewCountry">
            <NewCountry onClick={handleClickNew} />
          </ul>
        </div>
      </div>
    );
  }
}
