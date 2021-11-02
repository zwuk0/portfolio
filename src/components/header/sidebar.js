import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { navItems } from "../../config/index";

function Sidebar({ props, open, setOpen }) {
  return (
    <>
      <StyledSideBar open={open} aria-hidden={!open} tabIndex={open ? 1 : -1}>
        <ThemeSwitch>{props}</ThemeSwitch>
        <SidebarNav>
          {navItems.navLinks.map((nav) => (
            <StyledLinks onClick={() => setOpen(!open)} href={nav.url}>
              {nav.name}
            </StyledLinks>
          ))}

          {navItems.ctabutton.map((btn) => (
            <StyledBtn href={btn.fileName}>{btn.name} </StyledBtn>
          ))}
        </SidebarNav>
      </StyledSideBar>
      <BackDrop open={open} />
    </>
  );
}
const ThemeSwitch = styled.div`
  position: absolute;
  margin-left: 3em;
  margin-top: 1.2em;
  z-index: 11;
`;

const StyledSideBar = styled.div`
  display: block;
  position: fixed;
  z-index: 11;
  top: 0;
  right: 0;
  height: 100%;
  width: 55%;
  background-color: ${(props) => props.theme.color.background};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  @media (min-width: 800px) {
    display: none;
  }
`;
const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  right: 0;
  padding: 2rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
const StyledLinks = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.text1};

  font-weight: bold;
  &:not(:first-child) {
    margin-top: 1em;
  }
`;
const StyledBtn = styled.a`
  margin-top: 1em;
  border: 0.2em solid ${(props) => props.theme.color.text1};
  padding: 0.5em;
  width: 7em;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.color.text1};
  font-weight: bold;
  border-radius: 1em;
`;
const BackDrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  transition: all 0.3s ease-in-out;
  display: ${({ open }) => (open ? "block" : "none")};
  @media (min-width: 800px) {
    display: none;
  }
`;

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar;
