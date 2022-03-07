import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectOriginal } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Originals() {
  const movies = useSelector(selectOriginal);
  console.log(movies);
  return (
    <Container>
      <h4>Originals</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => {
            return (
              <Wrap key={key}>
                <Link to={"detail/" + movie.id}>
                  <img src={movie.cardImg} alt={movie.title} />
                </Link>
              </Wrap>
            );
          })}
      </Content>
    </Container>
  );
}

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  padding: 3rem 0 2.6rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 48em) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0rem 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0rem 1.6rem 1rem -1rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border-radius: 1rem;
  img {
    width: 100%;
    object-fit: cover;
  }
  &: hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0rem 4rem 5.8rem -1.6rem,
      rgb(0 0 0 / 73%) 0rem 3rem 2.2rem -1rem;
  }
`;

export default Originals;
