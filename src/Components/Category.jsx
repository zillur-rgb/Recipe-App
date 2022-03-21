import { GiHamburger, GiNoodles, GiFullPizza, GiSausage } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FlexDiv, SingleCat } from "./StyledComponents/styled.style";

const Category = () => {
  const NavLinkStyle = {
    textDecoration: "none",
  };

  return (
    <FlexDiv>
      <NavLink to={"/cuisine/American"} style={NavLinkStyle}>
        <SingleCat>
          <GiHamburger />
          <p>American</p>
        </SingleCat>
      </NavLink>

      <NavLink to={"/cuisine/Chinese"} style={NavLinkStyle}>
        <SingleCat>
          <GiNoodles />
          <p>Chinese</p>
        </SingleCat>
      </NavLink>

      <NavLink to={"/cuisine/Italian"} style={NavLinkStyle}>
        <SingleCat>
          <GiFullPizza />
          <p>Italian</p>
        </SingleCat>
      </NavLink>

      <NavLink to={"/cuisine/German"} style={NavLinkStyle}>
        <SingleCat>
          <GiSausage />
          <p>German</p>
        </SingleCat>
      </NavLink>
    </FlexDiv>
  );
};

export default Category;
