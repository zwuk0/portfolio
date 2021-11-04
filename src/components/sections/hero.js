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
          <a
            href="https://github.com/zwuk0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgGithub className="fo-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/anupam-tirkey-7223b5209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgLinkidIn className="fo-icon" />
          </a>
          <a
            href="mailto: anupam.deep01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SvgGmail className="fo-icon" />
          </a>
        </HeroSocial>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;
