import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import Globalstyle from "../styles/globalStyle";
import Header from "../components/header/header";
import Footer from "./footer";
import { lightTheme, darkTheme } from "../styles/theme";
import SvgComponentMoon from "../images/moon";
import SvgComponentSun from "../images/sun";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const button = (
    <>
      <CheckBoxWrapper>
        <CheckBox
          onChange={() => themeToggler()}
          id="checkbox"
          type="checkbox"
        />
        <CheckBoxLabel htmlFor="checkbox">
          <SvgComponentMoon width={30} />
          <SvgComponentSun width={30} />
        </CheckBoxLabel>
      </CheckBoxWrapper>
    </>
  );

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <LayoutWrapper>
        <Globalstyle />
        <Header element={button} />

        <Main id="main-content">{children}</Main>
        <Footer />
      </LayoutWrapper>
    </ThemeProvider>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Main = styled.main`
  width: 90%;
  /* margin-top: 5em; */
  max-width: 80em;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  width: 3.1em;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 3.1em;
  height: 26px;
  border-radius: 15px;
  cursor: pointer;
  background: #4fbe79;
  &::after {
    content: "";
    position: absolute;
    display: block;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    margin: 1.5px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    transform: translateX(1.5em);
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      transition: 0.2s;
      transform: translateX(0);
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
