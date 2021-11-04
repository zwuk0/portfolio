import { Link } from "gatsby";
import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 56em;
`;
export const HeroContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;
  padding: 3em;
  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding: 0;
  }
`;
export const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme.color.color2};
  color: #ffffff;
  padding: 0.5em;
  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  text-decoration: none;
  text-align: center;
  max-width: 13em;
  margin-top: 2em;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.color.color1};
  }
`;
export const HeroIntro = styled.div`
  padding-top: 6em;
  width: 100%;
  max-width: 100ch;
  h1 {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: -2px;

    line-height: 1.1;
    color: ${(props) => props.theme.color.text1};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 2.3rem;
    }
  }
  p {
    margin-top: 1em;
    font-size: 1.39rem;
    color: ${(props) => props.theme.color.text2};
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 1.2rem;
    }
  }
`;
export const HeroSocial = styled.div`
  margin-top: 5em;
  width: 100%;
  display: flex;
  justify-content: center;
  .fo-icon {
    fill: ${(props) => props.theme.color.color2};
    cursor: pointer;
    &:hover {
      fill: ${(props) => props.theme.color.color1};
    }
    &:not(:first-child) {
      margin-left: 2.5em;
    }
  }
  /* justify-content: center; */
  color: ${(props) => props.theme.color.color2};
  span:not(:last-child) {
    margin-right: 2em;
  }
`;
