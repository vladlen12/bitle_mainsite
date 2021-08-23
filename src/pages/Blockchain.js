import Layout from "../layout";
import Intro from "../components/sections/Intro";
import Cta from "../components/sections/Cta";
import BlockchainCapabilities from "../components/sections/BlockchainCapabilities";

const Blockchain = () => {
  return (
    <Layout>
      <Intro
        page="blockchain"
        sectionSubTitle="Blockchain UMI"
        sectionTitle="Technology that opens up new possibilities"
      />
      <BlockchainCapabilities />
      <Cta contact />
    </Layout>
  );
};

export default Blockchain;
