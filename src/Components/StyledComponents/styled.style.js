import styled from "styled-components";
import { Link } from "react-router-dom";

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
  background-color: #565656;
  color: #fff;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border: 1px solid #565656;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  :hover {
    background-color: #fff;
    svg {
      color: #565656;
    }

    p {
      color: #565656;
    }
    border: 1px solid #565656;
  }

  svg {
    width: 40px;
    height: 40px;
  }

  p {
    margin: 0;
  }
`;

export const FormStyle = styled.form`
  margin: 1.5rem 20rem;
  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background-color: #565656;
    font-size: 1.5rem;
    color: #fff;
    padding: 1rem 3rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    font-size: 1.2rem;
    transform: translate(100%, -50%);
    color: #fff;
  }
`;

export const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background-color: #565656;
    color: #fff;
  }

  h2 {
    margin-bottom: 2rem;
  }

  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  ul {
    margin-top: 2rem;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: #565656;
  background-color: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

export const Info = styled.div`
  margin-left: 10rem;
  text-align: left;
`;

export const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #565656;
  font-family: cursive;
`;
