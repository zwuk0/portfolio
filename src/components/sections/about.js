import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  AboutContainer,
  AboutContent,
  AboutProfile,
  ProfileBio,
  ProfilePhoto,
  BioTitle,
  BioText,
  AboutSkills,
  AboutTools,
} from "./styled-about";

function About() {
  const query = useStaticQuery(graphql`
    {
      prismicAbout {
        data {
          profile_photo {
            url
          }
          title1 {
            text
          }
          text1 {
            text
          }
          title2 {
            text
          }
          text2 {
            text
          }
          title3 {
            text
          }
          text3 {
            text
          }
        }
      }
    }
  `);
  const data = query.prismicAbout.data;
  return (
    <AboutContainer id="about">
      <AboutContent>
        <h1>About Me</h1>
        <AboutProfile>
          <ProfilePhoto>
            {/* <img src={data.profile_photo.url} alt="imag" /> */}
          </ProfilePhoto>
          <ProfileBio>
            <BioTitle>{data.title1.text}</BioTitle>
            <BioText>{data.text1.text}</BioText>
          </ProfileBio>
        </AboutProfile>
        <AboutSkills>
          <BioTitle>{data.title2.text}</BioTitle>
          <BioText>{data.text2.text}</BioText>
        </AboutSkills>
        <AboutTools>
          <BioTitle>{data.title3.text}</BioTitle>
          <BioText>{data.text3.text}</BioText>
        </AboutTools>
      </AboutContent>
    </AboutContainer>
  );
}

export default About;
