import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export const Card = styled.div`
  margin: 1rem;
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

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SingleCat = styled.div`
  background-color: coral;
  color: #fff;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border: 1px solid coral;
  text-decoration: none;

  :hover {
    color: #565656;
    background-color: #fff;
    border: 1px solid coral;
  }
`;
