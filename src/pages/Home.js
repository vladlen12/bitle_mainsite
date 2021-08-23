import CreateFeatures from "../components/sections/CreateFeatures";
import Cta from "../components/sections/Cta";
import LiquidityPool from "../components/sections/LiquidityPool";
import PlansAndGoals from "../components/sections/PlansAndGoals";
import WhatWeDoing from "../components/sections/WhatWeDoing";
import WhyBlockchain from "../components/sections/WhyBlockchain";
import Layout from "../layout";

const Home = () => {
  return (
    <Layout>
      <CreateFeatures />
      <WhatWeDoing />
      <WhyBlockchain />
      <PlansAndGoals />
      <LiquidityPool />
      <Cta vision />
    </Layout>
  );
};

export default Home;
