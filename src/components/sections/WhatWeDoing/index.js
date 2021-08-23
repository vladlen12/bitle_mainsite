import { Button, Container, Section, Text, Title } from "../../ui";

import css from "./index.module.scss";

const WhatWeDoing = () => {
  return (
    <Section mod={css.whatWeDoing}>
      <Container sm>
        <Title tag="h3" text="What are we doing?" subSectionTitle />
        <Title
          tag="h2"
          text="Our company develops products in areas where blockchain technology is a new stage in the development of industries."
          sectionTitle
        />
        <Text mod={css.sectionText}>
          We strive to improve performance and impact the user experience in the
          best possible way. Provide the opportunity to use all the advantages
          that the UMI blockchain coin provides.
        </Text>
        <Button secondary text="let’s start" />
      </Container>
    </Section>
  );
};

export default WhatWeDoing;
