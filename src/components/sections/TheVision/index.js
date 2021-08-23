import { Container, Section, Text, Title } from "../../ui";

import css from "./index.module.scss";

const TheVision = () => {
  return (
    <Section mod={css.theVision}>
      <Container sm>
        <Title tag="h2" text="The vision" sectionTitle />
        <Text mod={css.sectionText}>
          The philosophy of the blockchain is that any action on the network is
          recorded, stored and available for viewing at any time, anywhere in
          the world and from any device.
          <br />
          We see this philosophy as an opportunity to make the world open, more
          secure and decentralized using blockchain technology.
        </Text>
      </Container>
    </Section>
  );
};

export default TheVision;
