import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";
import Details from "./pages/crypto-details/Details";
////

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/sidebar" element={<Sidebar />} /> */}
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
