import Layout from "../layout";
import Intro from "../components/sections/Intro";
import Cta from "../components/sections/Cta";
import WhatRoadmap from "../components/sections/WhatRoadmap";

const Roadmap = () => {
  return (
    <Layout>
      <Intro
        page="roadmap"
        sectionSubTitle="Roadmap BITL"
        sectionTitle="The path that we have chosen is important for us"
      />
      <WhatRoadmap />
      <Cta contact />
    </Layout>
  );
};

export default Roadmap;
