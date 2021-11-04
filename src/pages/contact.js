import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { navigate } from "gatsby-link";

const ContactContainer = styled.section`
  min-height: 56em;
`;
const ContactContent = styled.div`
  padding-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactTitle = styled.h1`
  margin-top: 1em;
  font-size: 4rem;
  text-align: center;
  color: ${(props) => props.theme.color.color2};
`;
const ContactForm = styled.form`
  margin-top: 5em;
  width: 100%;
  max-width: 40em;
`;
const StyledInputName = styled.input`
  width: 100%;
  font-size: 1.325em;
  padding: 0.5em;
  border-radius: 0.3em;
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.color.color2};
  color: ${(props) => props.theme.color.text2};
  &::placeholder {
    /* font-weight: bold; */
    color: ${(props) => props.theme.color.text3};
  }

  /* outline: none; */
`;
const StyledInputEmail = styled.input`
  width: 100%;
  font-size: 1.325em;
  padding: 0.5em;
  margin-top: 1em;
  margin-bottom: 1em;
  border-radius: 0.3em;
  border: 2px solid ${(props) => props.theme.color.color2};
  background-color: transparent;
  color: ${(props) => props.theme.color.text2};
  &::placeholder {
    /* font-weight: bold; */
    color: ${(props) => props.theme.color.text3};
  }
`;
const StyledTextarea = styled.textarea`
  font-size: 1.9em;
  font-family: "Work Sans" sans-serif;
  width: 100%;
  max-width: 100%;
  padding: 0.5em;
  border-radius: 0.3em;
  border: 2px solid ${(props) => props.theme.color.color2};
  background-color: transparent;
  color: ${(props) => props.theme.color.text2};

  &::placeholder {
    /* font-weight: bold; */

    color: ${(props) => props.theme.color.text3};
  }
`;
const StyledButton = styled.button`
  font-weight: bold;
  margin-top: 1em;
  font-size: 1.325em;
  border: none;
  background-color: ${(props) => props.theme.color.color2};
  color: #ffff;
  padding: 0.3em 0.8em;
  border-radius: 0.3em;
`;
function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

function Contact() {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };
  return (
    <Layout>
      <ContactContainer id="contact">
        <ContactContent>
          <ContactTitle>Lets Create together!</ContactTitle>

          <ContactForm
            name="contact"
            method="post"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>

            <StyledInputName
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
            />

            <StyledInputEmail
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />

            <StyledTextarea
              name="message"
              placeholder="Messege"
              onChange={handleChange}
            />

            <StyledButton type="submit">Send</StyledButton>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </Layout>
  );
}

export default Contact;
