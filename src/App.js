import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Pages from "./Pages/Pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
