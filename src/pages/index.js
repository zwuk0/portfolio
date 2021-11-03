import * as React from "react";
import Layout from "../components/layout";
import About from "../components/sections/about";
// import Contact from "../components/sections/contact";
import Seo from "../components/seo";
// import { siteMetadata } from "../../gatsby-config";
import Hero from "../components/sections/hero";
import Work from "../components/sections/work";

const IndexPage = () => {
  return (
    <Layout>
      <Seo />
      <Hero />
      <Work />
      <About />;
    </Layout>
  );
};

export default IndexPage;
