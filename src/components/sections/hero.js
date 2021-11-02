import React from "react";
// import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import {
  HeroContainer,
  HeroContent,
  HeroIntro,
  HeroSocial,
} from "./styled.hero";

function Hero() {
  const queryHero = useStaticQuery(graphql`
    {
      prismicHero {
        data {
          hero_intro {
            richText
          }
          hero_text {
            richText
          }
        }
      }
    }
  `);
  const heque = queryHero.prismicHero.data;
  return (
    <HeroContainer>
      <HeroContent>
        <HeroIntro>
          {heque.hero_intro.richText.map((a) => (
            <h1>{a.text}</h1>
          ))}
          {heque.hero_text.richText.map((a) => (
            <p>{a.text}</p>
          ))}
        </HeroIntro>
        <button>Let's Work Together</button>
        <HeroSocial>
          <span>Github</span>
          <span>LinkedIn</span>
          <span>Email</span>
        </HeroSocial>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
