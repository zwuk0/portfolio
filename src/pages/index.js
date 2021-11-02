import * as React from "react";
import Layout from "../components/layout";
import About from "../components/sections/about";
// import Contact from "../components/sections/contact";
import Hero from "../components/sections/hero";
import Work from "../components/sections/work";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Work />
      <About />;
    </Layout>
  );
};

export default IndexPage;
