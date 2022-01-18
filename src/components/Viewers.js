import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  padding: 3rem 0 2.6rem;
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 2.5rem;
`;
const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  cursor: pointer;
  border-radius: 1rem;
  box-shadow: rgb(0 0 0 / 69%) 0rem 2.6rem 3rem -1rem,
    rgb(0 0 0 / 73%) 0rem 1.6rem 1rem -1rem;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

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
export default Viewers;
