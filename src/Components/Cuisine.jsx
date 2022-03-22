import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Wrapper } from "./StyledComponents/styled.style";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=9adf169d12924ead98d0e180e8d6e8f1&number=9&cuisine=${name}`
    );

    const res = await data.json();
    setCuisine(res.results);
    console.log(res.results);
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <div>
      <h1>{params.type} Cuisine Specialty</h1>

      <Wrapper>
        {cuisine.map((cui) => {
          return (
            <div>
              <Link to={`/recipe/${cui.id}`}>
                <Card key={cui.id}>
                  <img src={cui.image} alt="" />
                </Card>
                <h4>{cui.title}</h4>
              </Link>
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default Cuisine;
