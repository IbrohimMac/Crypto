// ORIGINAL
import React, { useState, useEffect } from "react";
import "../../sass/home/home.css";
import "../../sass/header/header.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImExit } from "react-icons/im";
import { TbEyePlus } from "react-icons/tb";
const Home = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [crypto, setCrypto] = useState([]);
  const [sidebarItems, setSidebarItems] = useState([]);

  useEffect(() => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h";
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

  const addToSidebar = (item) => {
    setSidebarItems((prevItems) => [...prevItems, item]);
    // };
  };

  ///// SEarch //////////////////////////////////////////////////////////////////
  const [search, setSearch] = useState("");
  ////////////////////////////////////////////////////////////////

  //////// Header - Sidebar //////////////////////////////////
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //   //////
  return (
    <div>
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
              <div id="app" className={`sidebar ${isOpen ? "open" : ""}`}>
                <button className="head-exit" onClick={toggleSidebar}>
                  {isOpen ? "" : "WATCHLIST"}
                  <ImExit />
                </button>
                <h2>WATCHLIST</h2>
                {sidebarItems.map((item, index) => (
                  <div className="head-side" key={`${item.id}-${index}`}>
                    <div>
                      <img className="side-img" src={item.image} alt="" />
                      <h3 className="side-h">₹ {item.current_price}</h3>
                      <button className="side-but">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ////////////////////////////////// */}
      <div className="home-big">
        <h1 className="homeBig-h">CRYPTOFOLIO WATCH LIST</h1>
        <p className="homeBig-p">
          Get all the Info regarding your favorite Crypto Currency
        </p>
        {crypto.length > 0 && (
          <div>
            <Carousel responsive={responsive}>
              {crypto.map((crypto, index) => (
                <div key={crypto.id}>
                  <div className="caru">
                    <img
                      style={{ width: 80, height: 80 }}
                      className="caru-i"
                      src={crypto.image}
                      alt={crypto.name}
                    />
                    <div className="caru-pp">
                      <p className="caru-p1">{crypto.symbol.toUpperCase()}</p>
                      <p className="caru-p2">{crypto.price_change_24h}%</p>
                    </div>
                    <p className="caru-p1">₹ {crypto.current_price}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        )}
      </div>
      <div className="home-big2">
        <h1 className="homeBig-h1">Cryptocurrency Prices by Market Cap</h1>
        <div className="search">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search For a Crypto Currency.."
          />
        </div>
        <div className="container">
          <table style={{ borderRadius: 8 }} className="table table-dark">
            <thead>
              <tr>
                <th className="bg-info text-dark" scope="col">
                  Coin
                </th>
                <th className="bg-info text-dark" scope="col">
                  Price
                </th>
                <th className="bg-info text-dark" scope="col">
                  24h Change
                </th>
                <th className="bg-info text-dark" scope="col">
                  Market Cap
                </th>
              </tr>
            </thead>
            <tbody>
              {crypto.length > 0 &&
                crypto
                  .filter(
                    (crypto) =>
                      crypto.name
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                      crypto.symbol.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((crypto, index) => (
                    <tr key={crypto.id}>
                      <th>
                        <div className="tabImg-vme">
                          <Link to={`/details/${crypto.id}`}>
                            <img src={crypto.image} alt={crypto.name} />
                          </Link>
                          <div className="tabImgP">
                            <Link className="link" to={`/details/${crypto.id}`}>
                              <h4 className="tabImgHH">
                                {crypto.symbol.toUpperCase()}
                              </h4>
                            </Link>
                            <Link className="link" to={`/details/${crypto.id}`}>
                              <p className="tabImgPP">{crypto.name}</p>
                            </Link>
                          </div>
                        </div>
                      </th>
                      <td>
                        <p className="tabPPP">₹ {crypto.current_price}</p>
                      </td>
                      <td>
                        <p className="tabPPP">{crypto.price_change_24h}%</p>
                      </td>
                      <td>
                        <p className="tabPPPP">
                          <TbEyePlus
                            style={{
                              cursor: "pointer",
                              width: 26,
                              height: 24,
                            }}
                            onClick={() => addToSidebar(crypto)}
                          />
                          {crypto.market_cap_change_24h}
                        </p>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
