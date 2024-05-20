import React from "react";
import "../../sass/header/header.css";
import { Link } from "react-router-dom";
const header = () => {
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
            <button>WATCH LIST</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
