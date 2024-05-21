import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../../sass/details/Details.css";
import "../../sass/header/header.css";
import ApexChart from "../../components/apexchart";
import axios from "axios";
import { ImExit } from "react-icons/im";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crypto, setCrypto] = useState([]);
  ///// APEX ////
  const [chartData, setChartData] = useState([]);
  ////
  useEffect(() => {
    const api = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`;
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const res = await axios.get(api);
        const data = await response.data;
        setChartData(res.data?.prices);
        setCrypto(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [id]);
  console.log(chartData);
  //////// Header - Sidebar //////////////////////////////////

  ////// Delete //////////////////////////////////
  const deleteItem = (item, e) => {
    e.stopPropagation();
    // removeItem(item.id);
    toast.success(item.name + " removed from watchlist");
    console.log(item);
  };
  ////////

  const [sidebarItems, setSidebarItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //   //////
  return (
    <>
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
              <button onClick={toggleSidebar}>
                {isOpen ? "" : "WATCHLIST"}
              </button>
            </div>
            <div className="App">
              <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="head-exit" onClick={toggleSidebar}>
                  {isOpen ? "" : "WATCHLIST"}
                  <ImExit />
                </button>
                <h2>WATCHLIST</h2>
                {sidebarItems.map((item, index) => (
                  <div className="head-side" key={`${item.id}-${index}`}>
                    <div>
                      <img className="side-img" src={item.image} alt="" />
                      <h3>₹ {item.current_price}</h3>
                      <button
                        onClick={(e) => deleteItem(item, e)}
                        className="side-but"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="detaAdmin">
        <div className="detaBig">
          <div>
            {/* <div className="p-3"> */}
            <img
              style={{ width: 200, height: 200 }}
              className="caru-i"
              src={crypto.image?.large}
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
        <div className="apexChart">
          <ApexChart dates={chartData} />
        </div>
      </div>
    </>
  );
};

export default Details;
