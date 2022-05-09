import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// css
import "./App.css";
import BankDetails from "./components/BankDetails/BankDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/bank-details/:bank/:ifsc" element={<BankDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
