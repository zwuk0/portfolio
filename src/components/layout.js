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
          <span class="material-icons-round">dark_mode</span>
          <span class="material-icons-round">light_mode</span>
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
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2em;
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
    width: 25px;
    height: 25px;
    /* margin: 1.5px; */
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    transform: translateX(1.5em);
  }
  .material-icons-round {
    font-family: "Material Icons";
    font-size: 1.2em;
    color: yellow;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${CheckBoxLabel} {
    /* background: #4ff; */

    &::after {
      position: absolute;

      content: "";
      display: block;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);

      transition: 0.2s;
      transform: translateX(-0.25em);
    }
  }
`;

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
