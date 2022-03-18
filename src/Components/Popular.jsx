import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/splide.min.css";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=9adf169d12924ead98d0e180e8d6e8f1&number=9`
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
            gap: "5rem",
          }}
        >
          {popular.map((pop) => {
            return (
              <SplideSlide>
                <Card key={pop.id}>
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

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr)); */
  margin: 4rem 0;
`;

const Card = styled.div`
  min-height: 350px;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 20px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1.2rem;
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
export default Popular;
