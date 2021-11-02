import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  AboutContainer,
  AboutContent,
  AboutProfile,
  ProfileBio,
  ProfilePhoto,
} from "./styled-about";

function About() {
  const data = useStaticQuery(graphql`
    {
      prismicAbout {
        data {
          about_me {
            text
          }
          dev_tools {
            tools {
              text
            }
          }
          profile_photo {
            url
          }
          skill_list {
            skill {
              text
            }
          }
        }
      }
    }
  `);
  const qdata = data.prismicAbout.data;
  return (
    <AboutContainer id="about">
      <AboutContent>
        <h1>About Me</h1>
        <AboutProfile>
          <ProfilePhoto>
            <img src={qdata.profile_photo.url} alt="imag" />
          </ProfilePhoto>
          <ProfileBio>
            <p>{qdata.about_me.text}</p>
            <h4>my skillset -</h4>
            {qdata.skill_list.map((a) => (
              <p>{a.skill.text}</p>
            ))}
            <h4>dev tools -</h4>
            {qdata.dev_tools.map((a) => (
              <p>{a.tools.text}</p>
            ))}
          </ProfileBio>
        </AboutProfile>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
