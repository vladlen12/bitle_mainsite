import Layout from "../layout";
import Intro from "../components/sections/Intro";
import Cta from "../components/sections/Cta";
import OurProjects from "../components/sections/OurProjects";

const Projects = () => {
  return (
    <Layout>
      <Intro
        page="projects"
        sectionSubTitle="Bitl projects"
        sectionTitle="Blockchain in the development of everyday products"
      />
      <OurProjects />
      <Cta contact />
    </Layout>
  );
};

export default Projects;
