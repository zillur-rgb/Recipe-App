import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Category from "./Components/Category";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
