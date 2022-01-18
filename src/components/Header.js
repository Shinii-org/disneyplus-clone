import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg"></Logo>
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="" />
          <span> Home </span>
        </a>
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
      <UserImg src="https://lh3.googleusercontent.com/-d7guL6W2Ht8/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclRkN_d_MS89bfiVS0yaTbJFn-NWA/photo.jpg?sz=46" />
    </Nav>
  );
}

const Nav = styled.div`
  height: 7rem;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 3.6rem;
  color: white;
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
  a {
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    cursor: pointer;

    &:hover {
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
export default Header;
