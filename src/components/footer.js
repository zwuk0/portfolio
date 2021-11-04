import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterContainer = styled.div`
  width: 100%;
  background-color: #212121;
  color: ${(props) => props.theme.color.text1};
  height: 10em;
  margin-top: 4em;
  display: flex;
  justify-content: center;
`;

// const FooterLine = styled.hr`
//   margin-top: 2em;
//   margin-bottom: 2em;
// `;
const FooterContent = styled.div`
  width: 90%;
  max-width: ${(props) => props.theme.breakpoints.mx};
  height: 100%;
  display: flex;
  /* background-color: aliceblue; */
  justify-content: space-between;
  align-items: center;
  /* padding: 1em 10em 2em 10em; */
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  .material-icons-outlined {
    font-family: "Material Icons";
    font-size: 24px;
    margin-right: 0.3em;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  border-bottom: 1px solid ${(props) => props.theme.color.color2};
  font-size: 1.5em;
  font-weight: 700;
  color: ${(props) => props.theme.color.text1};
  padding-bottom: 0.5em;

  &:hover {
    color: ${(props) => props.theme.color.color2};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    font-size: 1.4em;
  }
`;

// const FooterSocial = styled.div`
//   .fo-icon {
//     fill: ${(props) => props.theme.color.color2};

//     &:not(:first-child) {
//       margin-left: 2em;
//     }
//   }
// `;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* <FooterSocial>
          <SvgGithub class="fo-icon" />
          <SvgLinkidIn class="fo-icon" />
          <SvgGmail class="fo-icon" />
        </FooterSocial> */}

        <p>2021 | designed and developed by me.</p>
        <StyledLink to="/contact">
          Got a project? Lets work together?
        </StyledLink>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
