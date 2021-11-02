import React from "react";
import styled from "styled-components";
import SvgGithub from "./icons/github";
import SvgGmail from "./icons/Gmail";
import SvgLinkidIn from "./icons/LinkidIn";

const FooterContainer = styled.div`
  width: 90%;
  max-width: 80em;
  color: ${(props) => props.theme.color.text1};
`;

// const FooterLine = styled.hr`
//   margin-top: 2em;
//   margin-bottom: 2em;
// `;
const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 1em;
  padding-bottom: 2em; */
  padding: 1em 10em 2em 10em;
  /* background-color: ${(props) => props.theme.color.text3}; */
  button {
    background-color: transparent;
    border: none;
    padding: 0.4em 0.8em;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.color.color2};
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    cursor: pointer;

    .material-icons-outlined {
      font-family: "Material Icons";
      font-size: 24px;
      margin-right: 0.3em;
    }
  }
`;

const FooterSocial = styled.div`
  .fo-icon {
    fill: ${(props) => props.theme.color.color2};

    &:not(:first-child) {
      margin-left: 2em;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSocial>
          <SvgGithub class="fo-icon" />
          <SvgLinkidIn class="fo-icon" />
          <SvgGmail class="fo-icon" />
        </FooterSocial>
        <button>
          <span class="material-icons-outlined">waving_hand</span>Say Hello!
        </button>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
