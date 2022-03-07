import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { Link } from "react-router-dom";
import {
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  useEffect(() => {
    if (username) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUser(user);
          navigate("/");
        } else if (!user) {
          setSignOutState();
          navigate("/login");
        }
      });
    }
  }, [username]);
  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log(user);
          setUser(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } else if (username) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err));
    }
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      {!username ? (
        <Login onClick={handleAuth}> Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to={"/"}>
              <a>
                <img src="/images/home-icon.svg" alt="" />
                <span> Home </span>
              </a>
            </Link>

            <a>
              <img src="/images/search-icon.svg" alt="" />
              <span> Search </span>
            </a>
            <a>
              <img src="/images/watchlist-icon.svg" alt="" />
              <span> watchlist </span>
            </a>
            <a>
              <img src="/images/original-icon.svg" alt="" />
              <span> original </span>
            </a>
            <a>
              <img src="/images/movie-icon.svg" alt="" />
              <span> movies </span>
            </a>
            <a>
              <img src="/images/series-icon.svg" alt="" />
              <span> series </span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={userPhoto} alt={username} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.div`
  height: 7rem;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.6rem;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;

  @media (max-width: 768px) {
    justify-content: space-between;
  }

  text-transform: uppercase;
`;
const Logo = styled.img`
  width: 8rem;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;

  margin-left: 2.5rem;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    cursor: pointer;
    text-decoration: none;
    color: white;

    &:hover,
    &:visited {
      span:after {
        opacity: 1;
        transform: scaleX(1);
      }
    }

    img {
      height: 2rem;
    }

    span {
      font-size: 1.3rem;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        position: absolute;
        background-color: white;
        left: 0;
        right: 0;
        bottom: -6px;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        opacity: 0;
        transform: scaleX(0);
      }
    }
  }
`;
const UserImg = styled.img`
  height: 4.8rem;
  border-radius: 50%;
  cursor: pointer;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.8rem 1.6rem;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 250ms ease-in-out 0s;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const DropDown = styled.div`
  position: absolute;

  background-color: rgb(19, 19, 19);
  top: 5rem;
  z-index: 2;
  right: 0px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 /50%) 0px 0px 18px 0 px;
  padding: 1rem;
  font-size: 1.4rem;
  letter-spacing: 3px;
  width: 11rem;
  opacity: 0;
  transition: all 250ms ease-in-out 0s;
`;
const SignOut = styled.a`
  position: relative;
  cursor: pointer;
  &:hover {
    ${DropDown} {
      opacity: 1;
    }
  }
`;
export default Header;
