import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FormStyle } from "./StyledComponents/styled.style.js";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setSearchInput("");
    navigate(`/searched/${searchInput}`);
  };
  return (
    <div>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch />
          <input
            onChange={({ target }) => setSearchInput(target.value)}
            type="text"
            value={searchInput}
          />
        </div>
      </FormStyle>
    </div>
  );
};

export default Search;
