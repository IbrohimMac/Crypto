// import React, { useState, useEffect } from "react";
// import "../../sass/home/home.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// ///// Loading /////

// ///////

// /////// CArousel ////// //
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// ///
// const home = () => {
//   //////  Carousel //////////////////////////////////
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//     },
//   };
//   ////////////////////////////////////////////////////////////////

//   ////// API FETCH //////////////////////////////////
//   const [crypto, setCrypto] = useState([]);
//   useEffect(() => {
//     const url =
//       "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h";
//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         setCrypto(data);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchData();
//   }, []);
//   ///////////////////////
//   const backgroundImage = {
//     backgroundImage:
//       "url(https://s3-alpha-sig.figma.com/img/caf5/016f/97f154adfd88d0e48d9a7fc87e5ab035?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YKFT1pH7jc~vfigaOM6LA5TsF8Jx2DnThyDOxr~-0kIkaUSdQYERDUs4IW7GOcI87ZgxZbjSpRzmg0ZqEtQngMWq-hjOM~zV3o2L-uCzKO23l6O3U7OTpBZHLr-oy1tZAspVdHceVuToOx10gkKjnHFYygcskVNodkZDGtH2WNCZJ~6b7gwTpYd~nhZ3s7lcyEzcS6EFHxvfFCs6uAXMf0oCwh4XdfBztkjtEu4q-jAFFYyZoIiRc1ByUOWquvfh~KFrBy-dvViTf~dp0ugW~jKdNVqB58SDXaCZekvMqfdwvOGV8MP7ReMABS7XXZGIkfULQESwOtevsH1AnK5Myg__)",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: 500,
//   };

//   //////////  Search //////////////////////////////////

//   const [search, setSearch] = useState("");

//   ////////////////////////////////////////////////////////////////

//   /////////// ADD //////////////////////////////////

//   //////////////

//   return (
//     <div>
//       <div className="home-big">
//         <h1 className="homeBig-h">CRYPTOFOLIO WATCH LIST</h1>
//         <p className="homeBig-p">
//           Get all the Info regarding your favorite Crypto Currency
//         </p>
//         {crypto.length > 0 && (
//           <div>
//             <Carousel responsive={responsive}>
//               {crypto.map((crypto) => (
//                 <div>
//                   <div className="caru">
//                     <img
//                       style={{ width: 80, height: 80 }}
//                       className="caru-i"
//                       src={crypto.image}
//                       alt=""
//                     />
//                     <div className="caru-pp">
//                       <p className="caru-p1">{crypto.symbol.toUpperCase()}</p>
//                       <p className="caru-p2">{crypto.price_change_24h}%</p>
//                     </div>
//                     <p className="caru-p1">₹ {crypto.current_price}</p>
//                   </div>
//                 </div>
//               ))}
//             </Carousel>
//           </div>
//         )}
//       </div>
//       <div className="home-big2">
//         <h1 className="homeBig-h1">Cryptocurrency Prices by Market Cap</h1>
//         <div className="search">
//           <input
//             onChange={(e) => setSearch(e.target.value)}
//             type="search"
//             placeholder="Search For a Crypto Currency.."
//           />
//         </div>
//         <div className="container">
//           <table className="table table-dark">
//             <thead>
//               <tr>
//                 <th className="bg-info text-dark" scope="col">
//                   Coin
//                 </th>
//                 <th className="bg-info text-dark" scope="col">
//                   Price
//                 </th>
//                 <th className="bg-info text-dark" scope="col">
//                   24h Change
//                 </th>
//                 <th className="bg-info text-dark" scope="col">
//                   Market Cap
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th>
//                   {crypto.length > 0 && (
//                     <div>
//                       {crypto
//                         .filter(
//                           (crypto) =>
//                             crypto.name
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase()) ||
//                             crypto.symbol
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase())
//                         )
//                         .map((crypto) => (
//                           <div className="tabImg-vme ">
//                             <Link to={`/details/${crypto.id}`}>
//                               <img src={crypto.image} alt="" />
//                             </Link>
//                             <div className="tabImgP">
//                               <Link
//                                 className="link"
//                                 to={`/details/${crypto.id}`}
//                               >
//                                 <h4 className="tabImgHH">
//                                   {crypto.symbol.toUpperCase()}
//                                 </h4>
//                               </Link>
//                               <button>ADD</button>
//                               <Link
//                                 className="link"
//                                 to={`/details/${crypto.id}`}
//                               >
//                                 <p className="tabImgPP">{crypto.name}</p>
//                               </Link>
//                             </div>
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </th>
//                 <td>
//                   {crypto.length > 0 && (
//                     <div>
//                       {crypto
//                         .filter(
//                           (crypto) =>
//                             crypto.name
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase()) ||
//                             crypto.symbol
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase())
//                         )
//                         .map((crypto) => (
//                           <div>
//                             <p className="tabPPP">₹ {crypto.current_price}</p>
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </td>
//                 <td>
//                   {crypto.length > 0 && (
//                     <div>
//                       {crypto
//                         .filter(
//                           (crypto) =>
//                             crypto.name
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase()) ||
//                             crypto.symbol
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase())
//                         )
//                         .map((crypto) => (
//                           <div>
//                             <p className="tabPPP">{crypto.price_change_24h}%</p>
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </td>
//                 <td>
//                   {crypto.length > 0 && (
//                     <div>
//                       {crypto
//                         .filter(
//                           (crypto) =>
//                             crypto.name
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase()) ||
//                             crypto.symbol
//                               ?.toLowerCase()
//                               .includes(search.toLowerCase())
//                         )
//                         .map((crypto) => (
//                           <div>
//                             <p className="tabPPP">
//                               ₹ {crypto.market_cap_change_24h}
//                             </p>
//                           </div>
//                         ))}
//                     </div>
//                   )}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default home;

// ORIGINAL
import React, { useState, useEffect } from "react";
import "../../sass/home/home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImExit } from "react-icons/im";

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
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h";
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
  };

  const backgroundImage = {
    backgroundImage:
      "url(https://s3-alpha-sig.figma.com/img/caf5/016f/97f154adfd88d0e48d9a7fc87e5ab035?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YKFT1pH7jc~vfigaOM6LA5TsF8Jx2DnThyDOxr~-0kIkaUSdQYERDUs4IW7GOcI87ZgxZbjSpRzmg0ZqEtQngMWq-hjOM~zV3o2L-uCzKO23l6O3U7OTpBZHLr-oy1tZAspVdHceVuToOx10gkKjnHFYygcskVNodkZDGtH2WNCZJ~6b7gwTpYd~nhZ3s7lcyEzcS6EFHxvfFCs6uAXMf0oCwh4XdfBztkjtEu4q-jAFFYyZoIiRc1ByUOWquvfh~KFrBy-dvViTf~dp0ugW~jKdNVqB58SDXaCZekvMqfdwvOGV8MP7ReMABS7XXZGIkfULQESwOtevsH1AnK5Myg__)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 500,
  };

  const [search, setSearch] = useState("");
  //   ////// Sidebar /////////
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //   //////
  return (
    <div>
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
                            <button onClick={() => addToSidebar(crypto)}>
                              ADD
                            </button>
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
                        <p className="tabPPP">
                          ₹ {crypto.market_cap_change_24h}
                        </p>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          {sidebarItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

export default Home;
