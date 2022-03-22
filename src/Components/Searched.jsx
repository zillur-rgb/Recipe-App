import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Wrapper, Card } from "./StyledComponents/styled.style";

const Searched = () => {
  const [searchedRecipes, getSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9adf169d12924ead98d0e180e8d6e8f1&number=9&query=${name}`
    );

    const res = await data.json();
    getSearchedRecipes(res.results);
  };

  useEffect(() => {
    getSearched(params.tags);
  }, [params.tags]);

  return (
    <div>
      <h1>Search Result</h1>

      <Wrapper>
        {searchedRecipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <Card key={recipe.id}>
                  <img src={recipe.image} alt="" />
                </Card>
                <h4>{recipe.title}</h4>
              </Link>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Searched;
