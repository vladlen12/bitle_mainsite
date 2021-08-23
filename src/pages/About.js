import Layout from "../layout";
import Intro from "../components/sections/Intro";
import Cta from "../components/sections/Cta";
import TheVision from "../components/sections/TheVision";
import AboutCompany from "../components/sections/AboutCompany";

const About = () => {
  return (
    <Layout>
      <Intro
        page="about"
        sectionSubTitle="Bitl Foundation"
        sectionTitle="We create products that move industries into the future"
      />
      <TheVision />
      <AboutCompany />
      <Cta contact />
    </Layout>
  );
};

export default About;
