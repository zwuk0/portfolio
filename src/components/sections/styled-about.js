import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 53em;
`;
export const AboutContent = styled.div`
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    /* margin-left: 1em; */
    color: ${(props) => props.theme.color.text1};
  }
`;
export const AboutProfile = styled.div`
  margin-top: 4em;
  /* display: grid;
  grid-gap: 3em;
  grid-template-columns: 1fr 2fr; */
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;
export const ProfilePhoto = styled.div`
  img {
    width: 100%;
    max-width: 15em;
    border-radius: 30%;
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 50%;
    }
  }
`;
export const ProfileBio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80ch;
  button {
    margin-top: 3em;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.color.color2};
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
export const BioTitle = styled.h2`
  color: ${(props) => props.theme.color.color2};
  font-size: 2em;
  line-height: 2;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.8em;
  }
`;
export const BioText = styled.p`
  font-family: "Poppins" sans-serif;
  color: ${(props) => props.theme.color.text2};
  font-size: 1.3125rem;
  line-height: 1.5;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 1.2rem;
  }
`;
export const AboutSkills = styled.div`
  margin-top: 5em;
  max-width: 80ch;
`;
export const AboutTools = styled.div`
  margin-top: 5em;
  max-width: 80ch;
`;
