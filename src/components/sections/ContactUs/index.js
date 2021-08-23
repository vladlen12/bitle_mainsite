import {
  Button,
  Column,
  Container,
  FormControl,
  Row,
  Section,
  Text,
  Title,
} from "../../ui";

import css from "./index.module.scss";

const ContactUs = () => {
  return (
    <Section mod={css.contactUs}>
      <Container md>
        <Row mod={css.sectionRow}>
          <Column mod={css.sectionCol}>
            <Title
              sectionTitle
              tag="h2"
              text="Please take a moment to fill out this form."
            />
            <Text>
              We're here for you, and we're wearing our thinking caps. But first
              swing by our fantastic Help Center for all your InVision product
              and technical needs!
            </Text>
          </Column>
          <form className={css.form} autoComplete="off">
            <FormControl id="name" label="Name" success />
            <FormControl
              id="email"
              label="E-mail"
              errorMessage="Error message"
            />
            <FormControl id="company" label="Your company" />
            <FormControl id="message" label="Type your message here…" />
            <Row mod={css.formFooter}>
              <Button
                mod={css.formSubmit}
                type="submit"
                secondary
                text="submit"
              />
            </Row>
          </form>
        </Row>
      </Container>
    </Section>
  );
};

export default ContactUs;
