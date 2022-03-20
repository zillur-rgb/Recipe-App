import { GiHamburger, GiNoodles, GiFullPizza, GiSausage } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FlexDiv, SingleCat } from "./StyledComponents/styled.style";

const Category = () => {
  return (
    <FlexDiv>
      <NavLink to={"/cuisine/american"}>
        <SingleCat>
          <GiHamburger />
          <p>American</p>
        </SingleCat>
      </NavLink>

      <NavLink to={"/cuisine/chinese"}>
        <SingleCat>
          <GiNoodles />
          <p>Chinese</p>
        </SingleCat>
      </NavLink>

      <NavLink to={"/cuisine/italian"}>
        <SingleCat>
          <GiFullPizza />
          <p>Italian</p>
        </SingleCat>
      </NavLink>

      <NavLink to={"/cuisine/german"}>
        <SingleCat>
          <GiSausage />
          <p>German</p>
        </SingleCat>
      </NavLink>
    </FlexDiv>
  );
};

export default Category;
