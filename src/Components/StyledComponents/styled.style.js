import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr)); */
  margin: 4rem 0;
`;

export const Card = styled.div`
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

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
