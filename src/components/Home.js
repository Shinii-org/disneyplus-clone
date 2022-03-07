import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import NewDisney from "./NewDisney";
import db from "../firebase.js";
import { collection, onSnapshot } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import Originals from "./Originals";
import Trending from "./Trending";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trendings = [];
  const navigate = useNavigate();
  useEffect(() => {
    // const unsub = onSnapshot(doc(db, "movies"));
    if (username) {
      onSnapshot(
        collection(db, "movies"),
        (snapshot) => {
          snapshot.docs.map((doc) => {
            switch (doc.data().type) {
              case "recommend":
                recommends = [...recommends, { id: doc.id, ...doc.data() }];
                break;
              case "new":
                newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                break;
              case "original":
                originals = [...originals, { id: doc.id, ...doc.data() }];
                break;
              case "trending":
                trendings = [...trendings, { id: doc.id, ...doc.data() }];
                break;
            }
          });
          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisneys,
              original: originals,
              trending: trendings,
            })
          );
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      navigate("/login");
    }
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  min-height: calc(100vh - 7rem);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  margin-top: 7rem;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
export default Home;
