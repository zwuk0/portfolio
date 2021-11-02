import React from "react";
import styled from "styled-components";

const ContactContent = styled.div`
  padding-top: 6em;
`;

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <h1>This is Contact</h1>
      </ContactContent>
    </ContactContainer>
  );
}

const ContactContainer = styled.section`
  min-height: 100vh;
`;

export default Contact;
