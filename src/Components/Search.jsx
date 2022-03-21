import { FaSearch } from "react-icons/fa";
import { FormStyle } from "./StyledComponents/styled.style.js";

const Search = () => {
  return (
    <div>
      <FormStyle>
        <div>
          <FaSearch />
          <input type="text" />
        </div>
      </FormStyle>
    </div>
  );
};

export default Search;
