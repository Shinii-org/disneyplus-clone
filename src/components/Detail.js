import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9D8AEB7DE234898392BFD20E7D9B112B841E920AF9A3F54CCFB966722AFF3461/scale?width=1920&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImgTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EF737B93E2F2ABE27C74CBBEB322F18A421E7986129E9989587CEF2295B0447F/scale?width=1344&aspectRatio=1.78&format=png" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span> Play </span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span> Trailer </span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 ◾ 7m ◾ Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        change at motherhood when one of her dumplings springs to life. But she
        finds nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  min-height: 17rem;
  min-width: 20rem;
  width: 35vw;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  span {
    text-transform: uppercase;
  }
  button:not(:last-child) {
    margin-right: 2.2rem;
  }
`;

const PlayButton = styled.button`
  border-radius: 5px;
  border: none;
  padding: 0 2.4rem;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  height: 5.6rem;
  background: rbg(249, 249, 249);
  letter-spacing: 1.8px;
  transition: all 250ms ease-in-out;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  margin-right: 1.6rem !important;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  span {
    font-size: 3rem;
    color: white;
  }
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgb (0, 0, 0);
  margin-right: 0 !important;
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 1.5rem;
  margin-top: 2.6rem;
  min-height: 2rem;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 2rem;
  margin-top: 1.6rem;
  color: rgb(249, 249, 249);
`;
export default Detail;
