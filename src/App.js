import Home from "./pages/Home";
import { BrowserRouter, Route } from "react-router-dom";

// css
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
