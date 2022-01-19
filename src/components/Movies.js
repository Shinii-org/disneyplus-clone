import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C872C32AD77DB34E0AB742A1279A1866956AB37D462E5AF877703478ABDCCE6E/scale?width=1200&aspectRatio=1.78"></img>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C872C32AD77DB34E0AB742A1279A1866956AB37D462E5AF877703478ABDCCE6E/scale?width=1200&aspectRatio=1.78"></img>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C872C32AD77DB34E0AB742A1279A1866956AB37D462E5AF877703478ABDCCE6E/scale?width=1200&aspectRatio=1.78"></img>
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C872C32AD77DB34E0AB742A1279A1866956AB37D462E5AF877703478ABDCCE6E/scale?width=1200&aspectRatio=1.78"></img>
        </Wrap>
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

export default Movies;
