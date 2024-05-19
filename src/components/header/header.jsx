import React from "react";
import "../../sass/header/header.css";

const header = () => {
  return (
    <header>
      <div className="container">
        <div className="head-big">
          <h1>CRYPTOFOLIO</h1>
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
