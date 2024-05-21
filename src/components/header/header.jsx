import React, { useState } from "react";
import "../../sass/header/header.css";
import { Link } from "react-router-dom";
import { ImExit } from "react-icons/im";
const header = () => {
  ////// Sidebar /////////
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //////
  return (
    <header>
      <div className="container">
        <div className="head-big">
          <Link className="Link" to={"/"}>
            <h1>CRYPTOFOLIO</h1>
          </Link>
          <div className="head-end">
            <select name="" id="">
              <option value="USD">USD</option>
              <option value="SUM">SUM</option>
              <option value="RUB">RUB</option>
            </select>
            <button onClick={toggleSidebar}>{isOpen ? "" : "WATCHLIST"}</button>
          </div>
          <div className="App">
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
              <button className="head-exit" onClick={toggleSidebar}>
                {isOpen ? "" : "WATCHLIST"}
                <ImExit />
              </button>
              <h2>WATCHLIST</h2>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
