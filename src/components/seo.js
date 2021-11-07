import React from "react";
// import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";
import Icon from "../../src/images/icon3.svg";

const Seo = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
          description
          language
          siteUrl
          title
        }
      }
    }
  `);
  const site = data.site.siteMetadata;
  return (
    <Helmet>
      <title>anupamtirkey</title>
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={Icon} />
      <meta property="og:url" content={site.siteUrl} />
      <meta property="og:author" content={site.author} />
      <meta property="og:locale" content={site.language} />
      <meta
        name="google-site-verification"
        content="7EIoDigNL2luQqBevzl-3-h_jiMY06hdd0bjMDMIYu0"
      />
    </Helmet>
  );
};

export default Seo;
