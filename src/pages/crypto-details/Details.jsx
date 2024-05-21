import React, { useEffect, useState, Component } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../sass/details/Details.css";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crypto, setCrypto] = useState([]);
  useEffect(() => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCrypto(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(crypto);

  return (
    <div className="detaAdmin">
      <div className="detaBig">
        <div>
          {/* <div className="p-3"> */}
          <img
            style={{ width: 200, height: 200 }}
            className="caru-i"
            src={crypto.image}
            alt={crypto.id}
          />
          <h1>{crypto.name}</h1>
          <h6 className="detaP">{crypto.description?.bg.slice(0, 188)}</h6>
          <h4>Rank: {crypto.market_cap_rank}</h4>
          <h4>Current Price: ₹{crypto?.market_data?.current_price.bmd}</h4>
          <h4>Market Cap: ₹{crypto?.market_data?.market_cap.bmd}</h4>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Details;
