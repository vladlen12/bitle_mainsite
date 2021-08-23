import { Button, Text, Title } from "../../ui";

import css from "./index.module.scss";

const VisionBlock = () => {
  return (
    <>
      <Title sectionTitle tag="h2" text="Our vision for future" />
      <Text sm mod={css.text}>
        Together, we're building the greenest infrastructure to drive blockchain
        innovation that doesn't sacrifice utility or performance, to bring the
        developer community's vision to life.
      </Text>
      <Button href="/contact-us" mod={css.button} secondary text="Contact" />
    </>
  );
};

export default VisionBlock;
