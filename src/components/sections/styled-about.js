import styled from "styled-components";

export const AboutContainer = styled.section`
  min-height: 53em;
`;
export const AboutContent = styled.div`
  padding-top: 6em;
  h1 {
    margin-left: 1em;
    color: ${(props) => props.theme.color.text1};
  }
`;
export const AboutProfile = styled.div`
  margin-top: 2em;
  display: grid;
  grid-gap: 2em;
  grid-template-columns: 1fr 2fr;
`;
export const ProfilePhoto = styled.div`
  img {
    width: 100%;
  }
`;
export const ProfileBio = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.3em;
  color: ${(props) => props.theme.color.text2};
  padding: 0 10%;
  h4 {
    margin-top: 0.8em;
    margin-bottom: 0.2em;

    color: ${(props) => props.theme.color.color2};
  }
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
