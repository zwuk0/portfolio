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
  button {
    background-color: ${(props) => props.theme.color.color2};
    color: #ffffff;
    border: none;
    padding: 0.5em;
    font-size: 1.3rem;
    font-weight: bold;
    width: 100%;
    max-width: 13em;
    margin-top: 2em;
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
  }
  p {
    margin-top: 1em;
    font-size: 1.39rem;
    color: ${(props) => props.theme.color.text2};
  }
`;
export const HeroSocial = styled.div`
  margin-top: 5em;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  color: ${(props) => props.theme.color.color2};
  span:not(:last-child) {
    margin-right: 2em;
  }
`;