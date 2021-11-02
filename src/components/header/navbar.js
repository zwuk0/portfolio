import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { navItems } from "../../config/index";

function Navbar() {
  return (
    <Nav>
      <NavLinksWrap>
        {navItems.navLinks.map((nav) => (
          <Link className="navLink" to={nav.url}>
            {nav.name}
          </Link>
        ))}
      </NavLinksWrap>{" "}
      <NavBtnWrap>
        {navItems.ctabutton.map((btn) => (
          <a
            className="navBtn"
            href={btn.fileName}
            target="_blank"
            rel="noopener noreferrer"
          >
            {btn.name}{" "}
          </a>
        ))}
      </NavBtnWrap>
    </Nav>
  );
}

const Nav = styled.nav`
  /* width: 58%; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  .navLink {
    text-decoration: none;
    color: ${(props) => props.theme.color.text2};

    font-weight: normal;
    &:not(:last-child) {
      margin-right: 2em;
    }
  }
  .navBtn {
    text-decoration: none;
    color: ${(props) => props.theme.color.text2};
    font-weight: normal;
    margin-left: 2em;
  }
`;
const NavLinksWrap = styled.div``;
const NavBtnWrap = styled.div``;

export default Navbar;
