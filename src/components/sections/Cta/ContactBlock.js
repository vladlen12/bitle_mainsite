import { Button, Text, Title } from "../../ui";

import css from "./index.module.scss";

const ContactBlock = () => {
  return (
    <>
      <Title sectionTitle tag="h2" text="Contact Us" />
      <Text mod={css.text}>
        If you want to know about partnership opportunities or ask any question
        that interests you, please contact .
      </Text>
      <Button href="/contact-us" mod={css.button} secondary text="Contact" />
    </>
  );
};

export default ContactBlock;
