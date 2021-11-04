import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import {
  HeroContainer,
  HeroContent,
  HeroIntro,
  HeroSocial,
  StyledLink,
} from "./styled.hero";
import SvgGithub from "../icons/github";
import SvgLinkidIn from "../icons/LinkidIn";
import SvgGmail from "../icons/Gmail";

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
        <StyledLink to="/contact">Let's Work Together</StyledLink>
        <HeroSocial>
          <SvgGithub className="fo-icon" />
          <SvgLinkidIn className="fo-icon" />
          <SvgGmail className="fo-icon" />
        </HeroSocial>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
