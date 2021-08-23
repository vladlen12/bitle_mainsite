import Layout from "../layout";
import Intro from "../components/sections/Intro";
import ContactUs from "../components/sections/ContactUs";
import Cta from "../components/sections/Cta";

const Contact = () => {
  return (
    <Layout>
      <Intro
        page="contact"
        sectionSubTitle="Contact Us"
        sectionTitle="We are Bitl and we are here to help you!"
      />
      <ContactUs />
      <Cta address />
    </Layout>
  );
};

export default Contact;
