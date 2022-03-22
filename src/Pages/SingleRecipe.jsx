import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Button,
  DetailWrapper,
  Info,
} from "../Components/StyledComponents/styled.style";

const SingleRecipe = () => {
  let params = useParams();
  const [singleRecipe, setSingleRecipe] = useState({});
  const [active, setActive] = useState("instructions");

  const getRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.recipe}/information?apiKey=9adf169d12924ead98d0e180e8d6e8f1`
    );
    const res = await data.json();
    setSingleRecipe(res);
    console.log(singleRecipe);
  };

  useEffect(() => {
    getRecipe();
  }, []);
  console.log(singleRecipe);

  return (
    <DetailWrapper>
      <div>
        <h2>{singleRecipe.title}</h2>
        <img src={singleRecipe.image} alt="" />
      </div>

      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => {
            setActive("instructions");
          }}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => {
            setActive("ingredients");
          }}
        >
          Ingredients
        </Button>

        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: singleRecipe.summary }}></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: singleRecipe.instructions }}
            ></h3>
          </div>
        )}

        {active === "ingredients" && (
          <ul>
            {singleRecipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default SingleRecipe;
