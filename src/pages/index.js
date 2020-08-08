import React from "react";

// Parts
import Layout from "../components/Layout";
import PartHero from "../components/Hero";
import PartAbout from "../components/About";
import PartSkills from "../components/Skills";
import PartExperience from "../components/Experience";
import PartWorks from "../components/Works";

const Index = () => (
  <Layout>
    <div className="container sm">
      <PartHero />
      <PartAbout />
      <PartSkills />
      <PartExperience />
      <PartWorks />
    </div>
  </Layout>
);

export default Index;
