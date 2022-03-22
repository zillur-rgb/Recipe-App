import React, { useEffect, useState } from "react";
import { Wrapper, Card, Gradient } from "./StyledComponents/styled.style";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=9adf169d12924ead98d0e180e8d6e8f1&number=9&tags=vegetarian`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(popular);
          localStorage.setItem("popular", JSON.stringify(data.recipes));
          setPopular(data.recipes);
          console.log(popular);
        });
    }
  }, []);
  console.log(popular);
  return (
    <div>
      <h1>Popular Picks</h1>
      <Wrapper>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem",
          }}
        >
          {popular.map((pop) => {
            return (
              <SplideSlide key={pop.id}>
                <Card key={pop.id}>
                  <Link to={`/recipe/${pop.id}`}>
                    <p>{pop.title}</p>
                    <img src={pop.image} alt="Food" />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
