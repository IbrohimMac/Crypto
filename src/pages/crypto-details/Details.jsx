import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../../components/sidebar/context";
import { FaBars } from "react-icons/fa";
const Details = () => {
  //////  Sidebar //////////////////////////////////

  const { openSidebar } = useGlobalContext();

  ////////////////////////////////////////////////////////////////
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
  return (
    <div>
      <div>
        {/* Sidebar */}

        {/* <button className="sidebar-toggle" onClick={openSidebar}>
          <FaBars />
        </button> */}

        {/* Sidebar */}
        <img src={crypto.image} alt="ll" />
        <h1>{crypto.name}</h1>
      </div>
    </div>
  );
};

export default Details;
