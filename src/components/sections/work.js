import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import {
  WorkContainer,
  WorkContent,
  WorkCard,
  WorkCardsContainer,
} from "./styled.work";

function Work() {
  const data = useStaticQuery(graphql`
    {
      allPrismicProjects {
        edges {
          node {
            data {
              tags {
                text
              }
              project_title {
                text
              }
              project_image {
                url
              }
              description {
                text
              }
              live_site {
                url
              }
            }
          }
        }
      }
    }
  `);
  const queryWork = data.allPrismicProjects.edges;
  return (
    <WorkContainer id="work">
      <WorkContent>
        <h1>Recent projects</h1>
        <WorkCardsContainer>
          {queryWork.map((a) => (
            <WorkCard>
              <div className="wc-text">
                <h3>{a.node.data.project_title.text}</h3>
                <span>{a.node.data.tags.text}</span>
                <p>{a.node.data.description.text}</p>
                <div>
                  <a
                    href={a.node.data.live_site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-icons-outlined">open_in_new</span>
                  </a>
                </div>
              </div>
            </WorkCard>
          ))}
        </WorkCardsContainer>
      </WorkContent>
    </WorkContainer>
  );
}

export default Work;
