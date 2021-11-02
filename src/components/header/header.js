import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import SvgComponentLogo from "../logo";

function Header({ element }) {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  let navigation;

  if (windowWidth < 800) {
    navigation = (
      <>
        <StyleBurger
          aria-controls="sidebar"
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </StyleBurger>

        <Sidebar props={element} open={open} setOpen={setOpen} />
      </>
    );
  } else {
    navigation = (
      <>
        <Navbar /> {element}
      </>
    );
  }
  return (
    <StyledNavWrapper>
      <Helmet bodyAttributes={{ class: open ? "blur" : "" }} />
      <StyledHeader>
        <HomeLink to="/">
          <SvgComponentLogo class="logo" width={30} height={30} />{" "}
          <h3>anupamtirkey</h3>
        </HomeLink>

        {navigation}
      </StyledHeader>
    </StyledNavWrapper>
  );
}

const StyleBurger = styled.div`
  cursor: pointer;
  z-index: 12;
  background: transparent;
  color: ${(props) => props.theme.color.text1};

  @media (min-width: 800px) {
    display: none;
  }
  div {
    width: 2em;
    height: 0.25em;
    background-color: ${({ open }) =>
      open
        ? (props) => props.theme.color.color1
        : (props) => props.theme.color.color1};

    margin: 0.4em;
    transition: all 0.2s ease-in;
    transform-origin: 1px;
    border-radius: 0.5em;
    :nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) =>
        open ? "translateX(20px)" : "translateX(0px)"};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  color: black;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.color.background};
  padding-top: 1em;

  @media (min-width: 800px) {
    padding-top: 1em;
    background-color: ${(props) => props.theme.color.background};
    justify-content: space-between;
    padding-bottom: 1.5em;
  }
  justify-content: space-between;
`;
const StyledNavWrapper = styled.div`
  /* margin-top: 0.8em; */

  width: 90%;
  max-width: 80em;
  position: fixed;
  @media (min-width: 800px) {
    position: fixed;
  }
`;
const HomeLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  display: flex;
  align-items: center;
  .logo {
    fill: ${(props) => props.theme.color.color2};
  }
  h3 {
    margin-left: 0.2em;
    font-weight: bold;
    color: ${(props) => props.theme.color.text1};
  }
`;

export default Header;
