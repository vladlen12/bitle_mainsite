import { Container, Row, Section } from "../../ui";
import AddressBlock from "./AddressBlock";
import ContactBlock from "./ContactBlock";
import css from "./index.module.scss";
import VisionBlock from "./VisionBlock";

const Cta = ({ vision, contact, address }) => {
  return (
    <Section mod={css.cta}>
      <Container lg>
        <Row mod={css.ctaBorder}>
          <Row mod={css.ctaInner}>
            {vision && <VisionBlock />}
            {contact && <ContactBlock />}
            {address && <AddressBlock />}
          </Row>
        </Row>
      </Container>
    </Section>
  );
};

export default Cta;
