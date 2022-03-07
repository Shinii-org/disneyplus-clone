import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import db from "../firebase";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { selectUserName } from "../features/user/userSlice";

function Detail() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(async () => {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setDetailData(docSnap.data());
    } else {
      console.log("No such documents");
    }
  }, [id]);
  // const username = useSelector()
  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>
      <ImgTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
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
      <SubTitle>{detailData.subTitle}</SubTitle>
      <Description>{detailData.description}</Description>
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  overflow: hidden;
`;

const Background = styled.div`
  position: fixed;
  top: 7rem;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.6;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  margin-top: 6rem;
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
  @media (max-width: 48em) {
    font-size: 1.2rem;
    padding: 0 1rem;
    height: 5rem;
    margin-right: 1rem !important;
  }
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  @media (max-width: 48em) {
    margin-right: 1rem !important;
  }
`;

const AddButton = styled.button`
  margin-right: 1.6rem !important;
  width: 4.4rem;
  height: 4.4rem;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  @media (max-width: 48em) {
    width: 4rem;
    height: 4rem;
    margin-right: 1rem !important;
  }
  span {
    font-size: 1.5rem;
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
  @media (max-width: 48em) {
    font-size: 1.2rem;
  }
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 2rem;
  margin-top: 1.6rem;
  color: rgb(249, 249, 249);
  max-width: 70rem;
  @media (max-width: 48em) {
    font-size: 1.5rem;
  }
`;
export default Detail;
