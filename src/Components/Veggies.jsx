import React from "react";
import { Wrapper, Card, Gradient } from "./StyledComponents/styled.style";
import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Veggies = () => {
  const [veggie, setPopular] = useState([]);
  useEffect(() => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=9adf169d12924ead98d0e180e8d6e8f1&number=9`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(veggie);
          localStorage.setItem("veggie", JSON.stringify(data.recipes));
          setPopular(data.recipes);
          console.log(veggie);
        });
    }
  }, []);
  console.log(veggie);
  return (
    <div>
      <h1>Vegetarian Picks</h1>
      <Wrapper>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((pop) => {
            return (
              <SplideSlide key={pop.id}>
                <Card>
                  <p>{pop.title}</p>
                  <img src={pop.image} alt="Food" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Veggies;
