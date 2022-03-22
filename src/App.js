import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import Category from "./Components/Category";
import Search from "./Components/Search";
import Pages from "./Pages/Pages";
import { GiKnifeFork } from "react-icons/gi";
import { Logo } from "./Components/StyledComponents/styled.style";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo to={"/"}>
          <GiKnifeFork></GiKnifeFork>
          Deliciousss
        </Logo>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
