import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";

const ThanksContainer = styled.div`
  min-height: 56em;
`;
const ThanksContent = styled.div`
  margin-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 4em;
    font-size: 3em;
    color: ${(props) => props.theme.color.color2};
    text-align: center;
  }
  p {
    font-size: 2rem;
  }
`;

function Thanks() {
  return (
    <Layout>
      <ThanksContainer>
        <ThanksContent>
          <h1>Thankyou for reaching out to me!</h1>
        </ThanksContent>
      </ThanksContainer>
    </Layout>
  );
}

export default Thanks;
