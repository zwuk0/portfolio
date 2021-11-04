import styled from "styled-components";

export const WorkContainer = styled.div`
  min-height: 56em;
`;

export const WorkContent = styled.div`
  padding-top: 6em;
  h1 {
    margin-left: 1em;
    font-size: 1.5em;
    font-weight: bold;
    color: ${(props) => props.theme.color.text1};
  }
`;

export const WorkCardsContainer = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5em;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }

  /* grid-template-columns: 1fr 1fr 1fr; */
`;
export const WorkCard = styled.div`
  /* box-shadow: 2px 2px 3px rgba(1, 0, 0, 0.5); */
  height: fit-content;
  border: 1px solid ${(props) => props.theme.color.color2};
  color: ${(props) => props.theme.color.text2};
  img {
    width: 100%;
    max-width: 660px;
  }
  .wc-text {
    padding: 1em 2em 1.5em 2em;
    a {
      /* margin-top: 2em; */
      text-decoration: none;
      color: ${(props) => props.theme.color.color2};
      font-family: "Work Sans", sans-serif;
      font-weight: 600;
    }
    span {
      margin-top: 0.3em;
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      color: ${(props) => props.theme.color.text3};
    }
    h3 {
      color: ${(props) => props.theme.color.text1};
      font-size: 1.3em;
      margin-bottom: 0.3em;
    }
    p {
      margin-top: 0.3em;
      margin-bottom: 0.5em;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
    }
  }
`;
