import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import CreateFood from "./Pages/CreateFood";
import OrderFood from "./Pages/OrderFood";
import PriceList from "./Pages/PriceList";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

function App() {
  // const navigate = useNavigate();
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   if (data.length) {
  //     navigate("/price");
  //   }
  // }, [data, navigate]);
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/create" element={<CreateFood />} />
          <Route
            path="/"
            element={<OrderFood data={data} setData={setData} />}
          />
          {/* <Route path="/price" element={<PriceList data={data} />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
