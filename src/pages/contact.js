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
  font-size: 4rem;
  color: ${(props) => props.theme.color.color2};
`;
const ContactForm = styled.div``;

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
          <ContactTitle>Lets Create together</ContactTitle>
          <ContactForm>
            <form
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
              <p>
                <label>
                  Your name:
                  <br />
                  <input type="text" name="name" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Your email:
                  <br />
                  <input type="email" name="email" onChange={handleChange} />
                </label>
              </p>
              <p>
                <label>
                  Message:
                  <br />
                  <textarea name="message" onChange={handleChange} />
                </label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </Layout>
  );
}

export default Contact;
